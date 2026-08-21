<<<<<<< HEAD
'use client';
import { useState } from 'react';

export default function DatingProfile() {
  const [message, setMessage] = useState('');

  const handleSwipe = () => {
    setMessage("Ye so no dating actually LOOOOOOL but nice try ");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-[#F2EEE3] text-[#1B2340] rounded-lg shadow-xl border border-slate-400">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">Secret Dating Profile</h2>
      <div className="space-y-3 text-sm">
        <p><strong>Status:</strong> Single and ready to mingle </p>
        <p><strong>Looking for:</strong> Someone cool ,calm, and well collected </p>
        <p><strong>Red flags:</strong> Error 69</p>
        <p><strong>Green flags:</strong>Error too many </p>
        <p><strong>Ideal first date:</strong>Exploring this epic collection of shirts!</p>
        <p><strong>Deal breaker:</strong> Someone who isnt as cool as me </p>
      </div>

      <div className="flex gap-4 mt-6 justify-center">
        <button onClick={handleSwipe} className="px-6 py-2 bg-[#C4402D] text-white font-bold rounded hover:opacity-90">
          Swipe Left
        </button>
        <button onClick={handleSwipe} className="px-6 py-2 bg-[#E8A93B] text-black font-bold rounded hover:opacity-90">
          Swipe Right
        </button>
      </div>

      {message && <p className="mt-4 text-center font-bold text-[#C4402D]">{message}</p>}
    </div>
  );
=======
'use client';
import { useState } from 'react';

export default function DatingProfile() {
  const [message, setMessage] = useState('');

  const handleSwipe = () => {
    setMessage("Ye so no dating actually LOOOOOOL but nice try ");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-[#F2EEE3] text-[#1B2340] rounded-lg shadow-xl border border-slate-400">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">Secret Dating Profile</h2>
      <div className="space-y-3 text-sm">
        <p><strong>Status:</strong> Single and ready to mingle </p>
        <p><strong>Looking for:</strong> Someone cool ,calm, and well collected </p>
        <p><strong>Red flags:</strong> Error 69</p>
        <p><strong>Green flags:</strong>Error too many </p>
        <p><strong>Ideal first date:</strong>Exploring this epic collection of shirts!</p>
        <p><strong>Deal breaker:</strong> Someone who isnt as cool as me </p>
      </div>

      <div className="flex gap-4 mt-6 justify-center">
        <button onClick={handleSwipe} className="px-6 py-2 bg-[#C4402D] text-white font-bold rounded hover:opacity-90">
          Swipe Left
        </button>
        <button onClick={handleSwipe} className="px-6 py-2 bg-[#E8A93B] text-black font-bold rounded hover:opacity-90">
          Swipe Right
        </button>
      </div>

      {message && <p className="mt-4 text-center font-bold text-[#C4402D]">{message}</p>}
    </div>
  );
>>>>>>> 505ab1129f2b8dbc1d901daf4d20573a5c214e31
}