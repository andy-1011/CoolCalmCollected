'use client';
import { useState, useEffect } from 'react';

export default function ExtraInfoPage({ setJailUnlocked, setDatingUnlocked, jailUnlocked, datingUnlocked }) {
  const [codeWordInput, setCodeWordInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  // Load real leaderboard from localStorage
  useEffect(() => {
    const fetchLeaderboard = () => {
      // Define default members so the app never crashes
      const defaultMembers = [
        { username: "George", xp: 120 },
        { username: "Andy", xp: 90 },
        { username: "Jamie", xp: 60 }
      ];

      // Mocking a few users plus checking local storage for current user
      const currentUser = JSON.parse(localStorage.getItem('ccc_current_user') || '{"username": "You (Not Logged In)", "xp": 0}');
      
      // Add or update current user in list
      const existingIndex = defaultMembers.findIndex(m => m.username === currentUser.username);
      if (existingIndex >= 0) {
        defaultMembers[existingIndex].xp = currentUser.xp;
      } else if (currentUser.username !== 'You (Not Logged In)') {
        defaultMembers.push(currentUser);
      }

      // Sort by XP descending
      defaultMembers.sort((a, b) => b.xp - a.xp);
      setLeaderboard(defaultMembers);
    };

    fetchLeaderboard();
  }, []);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    const cleanInput = codeWordInput.trim().toLowerCase();

    if (cleanInput === 'jamie') {
      setJailUnlocked(true);
      setFeedback('🚨 Success! "Jail Check" has been unlocked in the navigation bar.');
    } else if (cleanInput === 'this shirts good but the models even better') {
      setDatingUnlocked(true);
      setFeedback('💖 Success! "Dating Profile" has been unlocked in the navigation bar.');
    } else {
      setFeedback('❌ Incorrect code-word. Keep searching the chat!');
    }
    setCodeWordInput('');
  };

  return (
    <div className="p-12 max-w-4xl mx-auto space-y-12 text-white">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold tracking-widest font-serif text-[#E8A93B]">EXTRA INFO FOR NERDS</h2>
        <p className="text-slate-300 text-sm">Leaderboards, stats, and secret code-word unlocks.</p>
      </div>

      {/* Code-Word Input Section */}
      <div className="bg-[#242e4d] border border-slate-600 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-2 text-[#E8A93B]">Secret Code-Word Terminal</h3>
        <p className="text-xs text-slate-300 mb-4">Enter secret phrases discovered around the site or group chat to unlock hidden pages.</p>
        
        <form onSubmit={handleCodeSubmit} className="flex gap-3">
          <input 
            type="text" 
            placeholder="Type secret code-word..." 
            value={codeWordInput}
            onChange={(e) => setCodeWordInput(e.target.value)}
            className="flex-1 p-2 rounded bg-slate-800 border border-slate-600 text-white text-sm"
          />
          <button type="submit" className="px-6 py-2 bg-[#E8A93B] text-black font-bold text-sm rounded hover:opacity-90">
            Unlock
          </button>
        </form>
        {feedback && <p className="mt-3 text-sm font-semibold">{feedback}</p>}
      </div>

      {/* XP Leaderboard Section */}
      <div className="bg-[#242e4d] border border-slate-600 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4 text-[#E8A93B]">Live XP Leaderboard</h3>
        <div className="space-y-2">
          {leaderboard.map((member, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center p-3 rounded border ${
                index === 0 ? 'bg-yellow-500/20 border-yellow-500 font-bold text-yellow-300' :
                index === 1 ? 'bg-slate-400/20 border-slate-400 text-slate-200' :
                index === 2 ? 'bg-amber-700/20 border-amber-600 text-amber-200' :
                'bg-slate-800/50 border-slate-700 text-slate-300'
              }`}
            >
              <span>#{index + 1} — {member.username}</span>
              <span className="font-mono">{member.xp} XP</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center text-xs text-slate-400">
        <p>Contact / Support: andyroo_1011</p>
      </div>
    </div>
  );
}