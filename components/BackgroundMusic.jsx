'use client';
import { useState } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  const playlist = [
    { title: "Jazz Track #1", id: "zR6D5o5bIdU" },
    { title: "Jazz Track #5", id: "oyFTBhUNwKQ" },
    { title: "Jazz Track #11", id: "aeQabDcDwYc" }
  ];

  const currentSong = playlist[currentSongIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 bg-[#242e4d] border border-slate-600 text-white px-4 py-2 rounded-lg shadow-2xl flex items-center gap-3 text-xs transition-transform ${
      isPlaying ? 'animate-bounce' : ''
    }`}>
      {/* Hidden YouTube Iframe to stream the audio */}
      <div className="hidden">
        {isPlaying && (
          <iframe
            src={`https://www.youtube.com/embed/${currentSong.id}?autoplay=1`}
            allow="autoplay"
            title="Background Jazz"
          />
        )}
      </div>

      <div className={isPlaying ? 'animate-pulse' : ''}>
        <p className="font-bold text-[#E8A93B]">🎵 Lounge Jazz</p>
        <p className="text-slate-300 text-[10px]">{currentSong.title}</p>
      </div>

      <div className="flex gap-1">
        <button 
          onClick={togglePlay}
          className="px-2 py-1 bg-[#E8A93B] text-black font-bold rounded hover:opacity-90 active:scale-95 transition"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
          onClick={nextSong}
          className="px-2 py-1 bg-slate-700 text-white font-bold rounded hover:bg-slate-600 active:scale-95 transition"
          title="Skip Song"
        >
          ⏭
        </button>
      </div>
    </div>
  );
}