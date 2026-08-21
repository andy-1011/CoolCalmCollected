'use client';
import { useState, useEffect } from 'react';

export default function ProfileWidget() {
  const [user, setUser] = useState(null);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('ccc_current_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    const timer = setInterval(() => {
      setUser((prevUser) => {
        const updated = { ...prevUser, xp: (prevUser.xp || 0) + 1 };
        localStorage.setItem('ccc_current_user', JSON.stringify(updated));
        return updated;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [user]);

  const handleAuth = (e) => {
    e.preventDefault();
    if (!usernameInput.trim()) return;

    const newUser = { username: usernameInput.trim(), xp: 10 };
    setUser(newUser);
    localStorage.setItem('ccc_current_user', JSON.stringify(newUser));
    setIsLoggingIn(false);
    setUsernameInput('');
    setPasswordInput('');
  };

  const handleLogout = () => {
    localStorage.removeItem('ccc_current_user');
    setUser(null);
  };

  if (user) {
    return (
      <div className="absolute top-4 left-4 z-50 bg-[#242e4d] border border-slate-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 text-xs">
        <div>
          <p className="font-bold text-[#E8A93B]">{user.username}</p>
          <p className="text-slate-300 font-mono">XP: {user.xp}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="text-slate-400 hover:text-red-400 text-xs underline ml-2"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="absolute top-4 left-4 z-50">
      {!isLoggingIn ? (
        <button 
          onClick={() => setIsLoggingIn(true)}
          className="bg-[#E8A93B] text-black font-bold px-4 py-2 rounded-lg shadow-lg text-xs hover:opacity-90 transition"
        >
          Sign Up / Log In
        </button>
      ) : (
        <form onSubmit={handleAuth} className="bg-[#242e4d] border border-slate-600 p-3 rounded-lg shadow-xl space-y-2 text-xs w-48">
          <p className="font-bold text-white mb-1">Account Access</p>
          <input 
            type="text" 
            placeholder="Username" 
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="w-full p-1.5 rounded bg-slate-800 border border-slate-600 text-white"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-1.5 rounded bg-slate-800 border border-slate-600 text-white"
            required
          />
          <div className="flex gap-2 pt-1">
            <button type="submit" className="flex-1 bg-[#E8A93B] text-black font-bold py-1 rounded">Go</button>
            <button type="button" onClick={() => setIsLoggingIn(false)} className="text-slate-400 hover:text-white px-2">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}