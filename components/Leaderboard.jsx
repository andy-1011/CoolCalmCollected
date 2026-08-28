'use client';
import { useState, useEffect } from 'react';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Pull created accounts/users from localStorage (defaults to empty array if none exist)
    const savedUsers = JSON.parse(localStorage.getItem('ccc_users') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('ccc_current_user') || 'null');
    
    let allUsers = [...savedUsers];
    if (currentUser && currentUser.username && !allUsers.some(u => u.username === currentUser.username)) {
      allUsers.push(currentUser);
    }

    // Sort by XP/messages descending
    allUsers.sort((a, b) => (b.xp || b.messages || 0) - (a.xp || a.messages || 0));
    
    setLeaderboard(allUsers);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-[#242e4d] rounded-lg p-6 border border-slate-600 text-white">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">All-Time Top Contributors</h3>
      
      {leaderboard.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-4">No accounts created yet. Once accounts are made, they will appear here!</p>
      ) : (
        <ul className="space-y-3 text-left">
          {leaderboard.map((user, index) => (
            <li key={index} className="flex justify-between border-b border-slate-600 pb-2 items-center">
              <span className="font-bold">
                {index === 0 ? '🥇 ' : index === 1 ? '🥈 ' : index === 2 ? '🥉 ' : `#${index + 1} `}
                {user.username || user.name}
              </span>
              <span className="text-slate-400">
                {user.xp !== undefined ? `${user.xp} XP` : `${user.messages || 0} msgs`}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}