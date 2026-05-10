import React from 'react';

const Bank = () => {
  return (
    <div className="p-6 pt-20 min-h-screen bg-[#020817]">
      <h1 className="text-2xl font-bold text-green-400 mb-6">BANK & ACCOUNTS</h1>
      
      <div className="bg-[#0a2e1d] border border-green-500/30 p-6 rounded-[28px] mb-6">
        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Linked Bank Account</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-white font-mono">XXXX XXXX 4521</p>
            <p className="text-sm text-green-500">State Bank of India</p>
          </div>
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-black">SB</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="bg-[#1b5f4c]/30 border border-green-500/20 p-4 rounded-2xl text-center">
          <p className="text-green-400 font-bold">ADD BANK</p>
        </button>
        <button className="bg-[#1b5f4c]/30 border border-green-500/20 p-4 rounded-2xl text-center">
          <p className="text-green-400 font-bold">RECORDS</p>
        </button>
      </div>

      <h3 className="text-lg font-bold text-white mb-4">Verification Status</h3>
      <div className="bg-[#051a0f] border border-green-500/10 p-4 rounded-2xl flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-sm text-gray-300">Your account is fully verified and ready for withdrawal.</p>
      </div>
    </div>
  );
};

export default Bank;
