<<<<<<< HEAD
'use client';
import { useState } from 'react';

export default function JailCheck() {
  const [yourAge, setYourAge] = useState('');
  const [herAge, setHerAge] = useState('');
  const [result, setResult] = useState('');
  const [uses, setUses] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const y = parseInt(yourAge);
    const h = parseInt(herAge);

    if (isNaN(y) || isNaN(h)) {
      setResult('Please enter valid numbers for both ages.');
      return;
    }

    if (y < 0 || h < 18) {
      setResult('⚠️ Both ages need to be 0+ for this one.');
      return;
    }

    if (uses === 0) {
      if (h >= y - 1 && h <= y + 3) {
        setResult('Relax, no handcuffs needed.');
      } else {
        setResult('Ok I see you going for some cougars 👀');
      }
      setUses(1);
    } else {
      setResult('Pay £999 to check again. (No real payment wired up yet!)');
    }
  };

  return (
    <div className="p-6 bg-[#242e4d] border border-red-500 rounded-lg max-w-md mx-auto text-white">
      <h3 className="text-xl font-bold text-red-400 mb-2">Will I Go To Jail For This Relationship?!</h3>
      <form onSubmit={handleCalculate} className="space-y-4 mt-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Your age</label>
          <input 
            type="number" 
            value={yourAge} 
            onChange={(e) => setYourAge(e.target.value)} 
            className="w-full p-2 rounded bg-slate-800 border border-slate-600 text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">Her age</label>
          <input 
            type="number" 
            value={herAge} 
            onChange={(e) => setHerAge(e.target.value)} 
            className="w-full p-2 rounded bg-slate-800 border border-slate-600 text-white"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 bg-[#C4402D] hover:bg-red-700 font-bold rounded transition"
        >
          {uses === 0 ? 'Calculate' : 'Pay £9.99 to check again'}
        </button>
      </form>
      {result && <p className="mt-4 font-semibold text-yellow-300 text-center">{result}</p>}
    </div>
  );
=======
'use client';
import { useState } from 'react';

export default function JailCheck() {
  const [yourAge, setYourAge] = useState('');
  const [herAge, setHerAge] = useState('');
  const [result, setResult] = useState('');
  const [uses, setUses] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const y = parseInt(yourAge);
    const h = parseInt(herAge);

    if (isNaN(y) || isNaN(h)) {
      setResult('Please enter valid numbers for both ages.');
      return;
    }

    if (y < 18 || h < 18) {
      setResult('⚠️ Both ages need to be 18+ for this one.');
      return;
    }

    if (uses === 0) {
      if (h >= y - 1 && h <= y + 3) {
        setResult('Relax, no handcuffs needed.');
      } else {
        setResult('Ok I see you going for some cougars 👀');
      }
      setUses(1);
    } else {
      setResult('Pay £9.99 to check again. (No real payment wired up yet!)');
    }
  };

  return (
    <div className="p-6 bg-[#242e4d] border border-red-500 rounded-lg max-w-md mx-auto text-white">
      <h3 className="text-xl font-bold text-red-400 mb-2">Will I Go To Jail For This Relationship?!</h3>
      <form onSubmit={handleCalculate} className="space-y-4 mt-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Your age</label>
          <input 
            type="number" 
            value={yourAge} 
            onChange={(e) => setYourAge(e.target.value)} 
            className="w-full p-2 rounded bg-slate-800 border border-slate-600 text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">Her age</label>
          <input 
            type="number" 
            value={herAge} 
            onChange={(e) => setHerAge(e.target.value)} 
            className="w-full p-2 rounded bg-slate-800 border border-slate-600 text-white"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 bg-[#C4402D] hover:bg-red-700 font-bold rounded transition"
        >
          {uses === 0 ? 'Calculate' : 'Pay £9.99 to check again'}
        </button>
      </form>
      {result && <p className="mt-4 font-semibold text-yellow-300 text-center">{result}</p>}
    </div>
  );
>>>>>>> 505ab1129f2b8dbc1d901daf4d20573a5c214e31
}