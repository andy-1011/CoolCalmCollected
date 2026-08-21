'use client';

export default function ReactionRow() {
  return (
    <div className="flex gap-2 justify-center mt-4">
      <span className="bg-slate-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-slate-600 transition">🔥 </span>
      <span className="bg-slate-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-slate-600 transition">💀 </span>
      <span className="bg-slate-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-slate-600 transition">💯 </span>
    </div>
  );
}