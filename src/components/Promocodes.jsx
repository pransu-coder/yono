import React from 'react';

const Promocodes = () => {
  return (
    <div className="p-6 pt-20 min-h-screen bg-[#020817]">
      <h1 className="text-2xl font-bold text-green-400 mb-6">PROMO CODES</h1>
      <div className="space-y-4">
        <div className="bg-[#0a2e1d] border-2 border-dashed border-green-500/50 p-6 rounded-2xl text-center">
          <p className="text-gray-400 mb-2 text-sm">Enter your code here</p>
          <input 
            type="text" 
            placeholder="YONONEW2024" 
            className="w-full bg-[#030c07] border border-green-500/30 rounded-xl p-3 text-center text-xl font-black tracking-widest text-green-400 focus:outline-none focus:border-green-500"
          />
          <button className="w-full mt-4 bg-green-500 text-black py-3 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)]">APPLY CODE</button>
        </div>
        
        <div className="bg-[#1b5f4c]/20 p-4 rounded-xl border border-green-500/10">
          <p className="text-sm font-bold text-green-400">PROMO HINT:</p>
          <p className="text-xs text-gray-400">Join our Telegram channel for daily limited promocodes!</p>
        </div>
      </div>
    </div>
  );
};

export default Promocodes;
