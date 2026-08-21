<<<<<<< HEAD
'use client';
import { useState } from 'react';

export default function AppreciationPage() {
  const quotes = [
    { text: "George has some sick dance moves", author: "Joel Big man" },
    { text: "I like his music taste", author: "Charlie apple" },
    { text: "I love to suck his toes, in fact i have an entire collection btw this is anonymous right?", author: "No its not Joe Bell" },
    { text: "Its wednesday my dudessssssss", author: "Jamie" },
    { text: "I would rather share one lifetime with you than face all the ages of the world alone", author: "Toby 1" },
    { text: "All we have to decide is what to do with the time given to u.", author: "Toby 2" }
  ];

  return (
    <div className="p-12 text-center text-[#7A1E3D] bg-gradient-to-b from-[#FBE4EC] to-[#FFF5F7] min-h-screen space-y-8">
      <h2 className="text-4xl font-bold tracking-widest font-serif"> Hello visitor take a moment too appreciate some lovely comments by georges' fans </h2>
      <p className="max-w-lg mx-auto text-sm text-[#7A1E3D]/80">
        Appreciating the best moments, the wildest quotes, and the undisputed legends of the group chat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className="bg-[#FFF5F7] p-6 rounded-lg shadow-md border border-[#FBE4EC] flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform"
          >
            <p className="text-lg italic font-serif mb-4">"{quote.text}"</p>
            <p className="text-sm font-bold text-right text-[#C2255C]">— {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
=======
'use client';
import { useState } from 'react';

export default function AppreciationPage() {
  const quotes = [
    { text: "George has some sick dance moves", author: "Joel Big man" },
    { text: "I like his music taste", author: "Charlie apple" },
    { text: "I love to suck his toes, in fact i have an entire collection btw this is anonymous right?", author: "No its not Joe Bell" },
    { text: "Its wednesday my dudessssssss", author: "Jamie" },
    { text: "I would rather share one lifetime with you than face all the ages of the world alone", author: "Toby 1" },
    { text: "All we have to decide is what to do with the time given to u.", author: "Toby 2" }
  ];

  return (
    <div className="p-12 text-center text-[#7A1E3D] bg-gradient-to-b from-[#FBE4EC] to-[#FFF5F7] min-h-screen space-y-8">
      <h2 className="text-4xl font-bold tracking-widest font-serif"> Hello visitor take a moment too appreciate some lovely comments by georges' fans </h2>
      <p className="max-w-lg mx-auto text-sm text-[#7A1E3D]/80">
        Appreciating the best moments, the wildest quotes, and the undisputed legends of the group chat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className="bg-[#FFF5F7] p-6 rounded-lg shadow-md border border-[#FBE4EC] flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform"
          >
            <p className="text-lg italic font-serif mb-4">"{quote.text}"</p>
            <p className="text-sm font-bold text-right text-[#C2255C]">— {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> 505ab1129f2b8dbc1d901daf4d20573a5c214e31
}