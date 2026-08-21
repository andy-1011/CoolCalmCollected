'use client';
import { useState, useEffect } from 'react';

export default function ShopPage() {
  const [currentUser, setCurrentUser] = useState('Guest');

  useEffect(() => {
    const saved = localStorage.getItem('ccc_current_user');
    if (saved) {
      try {
        const userObj = JSON.parse(saved);
        setCurrentUser(userObj.username.trim());
      } catch (e) {
        // fallback
      }
    }
  }, []);

  const designs = [
    { id: 1, name: "George with a bit of pozaz!", description: "Front chest fit", image: "/design1.png.png" },
    { id: 2, name: "Love is in the air", description: "Front chest fit", image: "/design2.png.png" },
    
    
    
  ];

  const [selections, setSelections] = useState(
    designs.reduce((acc, item) => ({ ...acc, [item.id]: { color: 'white', size: 'M' } }), {})
  );

  // Track reaction counts per item: { [id]: { '😂': count, ... } }
  const [reactions, setReactions] = useState(
    designs.reduce((acc, item) => ({
      ...acc,
      [item.id]: { '😂': 0, '💀': 0, '😭': 0, '😡': 0, '👍': 0, '👎': 0 }
    }), {})
  );

  // Track which emojis the CURRENT user has clicked per item: { [id]: { '😂': true, '👍': false, ... } }
  const [userReactions, setUserReactions] = useState(
    designs.reduce((acc, item) => ({
      ...acc,
      [item.id]: { '😂': false, '💀': false, '😭': false, '😡': false, '👍': false, '👎': false }
    }), {})
  );

  const [comments, setComments] = useState(
    designs.reduce((acc, item) => ({
      ...acc,
      [item.id]: [
       
      ]
    }), {})
  );

  const [newCommentInput, setNewCommentInput] = useState({});
  const [activeCommentCard, setActiveCommentCard] = useState(null);

  const handleOptionChange = (id, field, value) => {
    setSelections(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleReaction = (id, emoji) => {
    const hasReacted = userReactions[id][emoji];

    // Toggle reaction state for current user (limit 1 per emoji)
    setUserReactions(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [emoji]: !hasReacted
      }
    }));

    // Update the count (+1 if adding, -1 if removing)
    setReactions(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [emoji]: prev[id][emoji] + (hasReacted ? -1 : 1)
      }
    }));
  };

  const handleAddComment = (id, e) => {
    e.preventDefault();
    const text = newCommentInput[id]?.trim();
    if (!text) return;

    setComments(prev => ({
      ...prev,
      [id]: [...prev[id], { username: currentUser, text }]
    }));

    setNewCommentInput(prev => ({ ...prev, [id]: '' }));
  };

  let basePrice = 15.00;
  let displayPrice = basePrice;
  let isGeorge = currentUser.toLowerCase() === 'george';
  let isHarry = currentUser.toLowerCase() === 'harry';

  if (isGeorge) displayPrice = basePrice * 0.01;
  else if (isHarry) displayPrice = basePrice * 1.10;

  const handleCheckout = (designName) => {
    alert(`Redirecting to secure checkout for "${designName}" at $${displayPrice.toFixed(2)}...`);
  };

  return (
    <div className="p-12 text-center text-white space-y-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold tracking-widest font-serif text-[#E8A93B]">OFFICIAL GEORGE MERCH HUB</h2>
      <p className="text-slate-300 max-w-lg mx-auto text-sm">
        
      </p>

      {isGeorge && (
        <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-lg max-w-md mx-auto text-xs font-bold animate-pulse">
          🎉 GEORGE SPECIAL: 99% OFF! .
        </div>
      )}

      {isHarry && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg max-w-md mx-auto text-xs font-bold">
          ⚠️ HARRY TAX APPLIED: +10% surcharge because it's Harry.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {designs.map((design) => {
          const currentSelection = selections[design.id];
          const isWhite = currentSelection.color === 'white';
          const itemReactions = reactions[design.id];
          const itemUserReactions = userReactions[design.id];
          const itemComments = comments[design.id];
          const isCommentsOpen = activeCommentCard === design.id;

          return (
            <div 
              key={design.id} 
              className="relative bg-[#242e4d] p-6 rounded-lg border border-slate-600 flex flex-col justify-between shadow-lg"
            >
              {/* Top-Right Comment Toggle Button */}
              <button 
                onClick={() => setActiveCommentCard(isCommentsOpen ? null : design.id)}
                className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-amber-400 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 z-10 transition"
              >
                💬 {itemComments.length}
              </button>

              <div>
                {/* T-Shirt Mockup / Image Display */}
                <div className={`h-48 rounded-lg mb-4 flex items-center justify-center border border-slate-500 transition-colors overflow-hidden relative ${
                  isWhite ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  {design.image ? (
                    <img 
                      src={design.image} 
                      alt={design.name} 
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-xs tracking-wider opacity-60">[ {design.name} Mockup ]</span>
                  )}
                </div>

                <h3 className="font-bold text-lg">{design.name}</h3>
                <p className="text-xs text-slate-400 mb-2">{design.description}</p>
                
                {/* Price Display */}
                <div className="mb-3">
                  {isGeorge ? (
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-slate-400 line-through text-sm">$25.00</span>
                      <span className="text-green-400 font-mono font-bold text-base">${displayPrice.toFixed(2)} (99% OFF)</span>
                    </div>
                  ) : isHarry ? (
                    <div className="flex flex-col items-center">
                      <span className="text-slate-400 line-through text-xs">$25.00</span>
                      <span className="text-red-400 font-mono font-bold text-base">${displayPrice.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="text-[#E8A93B] font-mono font-bold text-base">$25.00</span>
                  )}
                </div>

                {/* Color & Size Selectors */}
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span className="text-[10px] text-slate-300">Color:</span>
                  <button onClick={() => handleOptionChange(design.id, 'color', 'white')} className={`w-5 h-5 rounded-full border ${isWhite ? 'border-[#E8A93B]' : 'border-transparent'} bg-white`} />
                  <button onClick={() => handleOptionChange(design.id, 'color', 'black')} className={`w-5 h-5 rounded-full border ${!isWhite ? 'border-[#E8A93B]' : 'border-transparent'} bg-black`} />
                </div>

                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-[10px] text-slate-300">Size:</span>
                  {['S', 'M', 'L'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleOptionChange(design.id, 'size', size)}
                      className={`px-2 py-0.5 text-[10px] font-bold rounded border ${
                        currentSelection.size === size ? 'bg-[#E8A93B] text-black border-[#E8A93B]' : 'bg-slate-800 text-white border-slate-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Reaction Bar with Highlight when Selected */}
                <div className="flex justify-center gap-1 bg-slate-900/60 p-2 rounded-md mb-4 text-xs">
                  {Object.entries({ '😂': itemReactions['😂'], '💀': itemReactions['💀'], '😭': itemReactions['😭'], '😡': itemReactions['😡'], '👍': itemReactions['👍'], '👎': itemReactions['👎'] }).map(([emoji, count]) => {
                    const isSelected = itemUserReactions[emoji];
                    return (
                      <button
                        key={emoji}
                        onClick={() => handleReaction(design.id, emoji)}
                        className={`hover:scale-125 transition px-1.5 py-0.5 rounded flex flex-col items-center text-[10px] border ${
                          isSelected ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'border-transparent text-slate-300'
                        }`}
                        title={isSelected ? "Remove reaction" : "Add reaction"}
                      >
                        <span>{emoji}</span>
                        <span className="text-slate-400">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={() => handleCheckout(design.name)}
                className="w-full py-2 bg-[#C4402D] hover:bg-red-700 font-bold rounded text-white transition tracking-wide text-xs"
              >
                Buy Now
              </button>

              {/* Toggled Comment Section Drawer */}
              {isCommentsOpen && (
                <div className="mt-4 pt-3 border-t border-slate-700 text-left text-xs space-y-3 animate-fadeIn">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#E8A93B]">Discussion</span>
                    <button 
                      onClick={() => setActiveCommentCard(null)} 
                      className="text-[10px] text-slate-400 hover:text-white"
                    >
                      [Close]
                    </button>
                  </div>

                  <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                    {itemComments.map((c, idx) => (
                      <div key={idx} className="bg-slate-800/80 p-2 rounded border border-slate-700">
                        <span className="font-bold text-amber-300">{c.username}: </span>
                        <span className="text-slate-200">{c.text}</span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={(e) => handleAddComment(design.id, e)} className="flex gap-1">
                    <input 
                      type="text" 
                      placeholder={`Comment as ${currentUser}...`}
                      value={newCommentInput[design.id] || ''}
                      onChange={(e) => setNewCommentInput({ ...newCommentInput, [design.id]: e.target.value })}
                      className="flex-1 p-1.5 rounded bg-slate-800 border border-slate-600 text-white text-[10px]"
                    />
                    <button type="submit" className="px-3 py-1 bg-[#E8A93B] text-black font-bold rounded text-[10px]">
                      Post
                    </button>
                  </form>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}