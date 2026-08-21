'use client';

export default function Leaderboard() {
  return (
    <div className="max-w-md mx-auto bg-[#242e4d] rounded-lg p-6 border border-slate-600">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">All-Time Top Contributors</h3>
      <ul className="space-y-3 text-left">
        <li className="flex justify-between border-b border-slate-600 pb-2">
          <span className="font-bold">🥇 User A</span>
          <span className="text-slate-400">9,001 msgs</span>
        </li>
        <li className="flex justify-between border-b border-slate-600 pb-2">
          <span className="font-bold">🥈 User B</span>
          <span className="text-slate-400">8,432 msgs</span>
        </li>
        <li className="flex justify-between pb-2">
          <span className="font-bold">🥉 User C</span>
          <span className="text-slate-400">7,110 msgs</span>
        </li>
      </ul>
    </div>
  );
}