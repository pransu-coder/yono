import React from 'react';

const Money = () => {
  return (
    <div className="p-6 pt-20 min-h-screen bg-[#020817]">
      <h1 className="text-2xl font-bold text-green-400 mb-6">WALLET & WITHDRAW</h1>
      
      <div className="bg-gradient-to-br from-green-500 to-emerald-800 p-6 rounded-[30px] shadow-2xl mb-8">
        <p className="text-green-100 text-sm font-bold uppercase tracking-wider">Total Balance</p>
        <h2 className="text-4xl font-black text-white mt-1">₹5,240.00</h2>
        <div className="flex gap-4 mt-6">
          <button className="flex-1 bg-white text-green-900 py-3 rounded-2xl font-black text-sm uppercase">Deposit</button>
          <button className="flex-1 bg-black/20 text-white py-3 rounded-2xl font-black text-sm uppercase backdrop-blur-sm">Withdraw</button>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-4">Transaction History</h3>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#0a2e1d] p-4 rounded-2xl flex justify-between items-center border border-green-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">↓</div>
              <div>
                <p className="text-sm font-bold text-white">Deposit via UPI</p>
                <p className="text-[10px] text-gray-400">May 10, 2024 • 12:30 PM</p>
              </div>
            </div>
            <p className="text-green-400 font-bold">+₹500</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Money;
