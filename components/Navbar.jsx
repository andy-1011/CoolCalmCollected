<<<<<<< HEAD
'use client';

export default function Navbar({ activeTab, setActiveTab, theme, jailUnlocked, datingUnlocked }) {
  return (
    <nav className={`p-4 flex gap-6 justify-center items-center text-white border-b border-slate-700 ${
      theme === 'main' ? 'bg-[#151b30]' : 'bg-[#0f1423]'
    }`}>
      <button 
        onClick={() => setActiveTab('home')} 
        className={activeTab === 'home' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Home
      </button>
      <button 
        onClick={() => setActiveTab('shop')} 
        className={activeTab === 'shop' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Shop
      </button>
      <button 
        onClick={() => setActiveTab('appreciation')} 
        className={activeTab === 'appreciation' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Appreciation
      </button>
      <button 
        onClick={() => setActiveTab('extrainfo')} 
        className={activeTab === 'extrainfo' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Extra Info
      </button>

      {jailUnlocked && (
        <button 
          onClick={() => setActiveTab('jail')} 
          className="text-red-500 font-bold animate-pulse"
        >
          🚨 Jail Check
        </button>
      )}

      {datingUnlocked && (
        <button 
          onClick={() => setActiveTab('dating')} 
          className="text-[#C2255C] font-bold animate-pulse"
        >
          💖 Dating Profile
        </button>
      )}
    </nav>
  );
=======
'use client';

export default function Navbar({ activeTab, setActiveTab, theme, jailUnlocked, datingUnlocked }) {
  return (
    <nav className={`p-4 flex gap-6 justify-center items-center text-white border-b border-slate-700 ${
      theme === 'main' ? 'bg-[#151b30]' : 'bg-[#0f1423]'
    }`}>
      <button 
        onClick={() => setActiveTab('home')} 
        className={activeTab === 'home' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Home
      </button>
      <button 
        onClick={() => setActiveTab('shop')} 
        className={activeTab === 'shop' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Shop
      </button>
      <button 
        onClick={() => setActiveTab('appreciation')} 
        className={activeTab === 'appreciation' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Appreciation
      </button>
      <button 
        onClick={() => setActiveTab('extrainfo')} 
        className={activeTab === 'extrainfo' ? 'text-[#E8A93B] font-bold underline' : 'hover:text-slate-300'}
      >
        Extra Info
      </button>

      {jailUnlocked && (
        <button 
          onClick={() => setActiveTab('jail')} 
          className="text-red-500 font-bold animate-pulse"
        >
          🚨 Jail Check
        </button>
      )}

      {datingUnlocked && (
        <button 
          onClick={() => setActiveTab('dating')} 
          className="text-[#C2255C] font-bold animate-pulse"
        >
          💖 Dating Profile
        </button>
      )}
    </nav>
  );
>>>>>>> 505ab1129f2b8dbc1d901daf4d20573a5c214e31
}