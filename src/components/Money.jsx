import React from "react";
import {
  ChevronRight,
  Copy,
  MessageCircle,
  Send,
  Share2,
} from "lucide-react";

const Money = () => {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop')",
      }}
    >
      {/* MAIN CONTENT */}
      <div className="w-full max-w-[500px] mx-auto px-3 pt-8 pb-10">
        
        {/* YOU */}
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold border-2 border-white">
            You
          </div>
        </div>

        {/* A LEVEL */}
        <div className="flex justify-center gap-3 mb-4">
          {["A1", "A2"].map((item, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full bg-[#1f1f1f] flex items-center justify-center text-[12px] font-bold"
            >
              {item}
            </div>
          ))}
        </div>

        {/* B LEVEL */}
        <div className="flex justify-center gap-3 mb-4 flex-wrap">
          {["B1", "B2", "B3", "B4"].map((item, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full bg-[#a50d0d] flex items-center justify-center text-[12px] font-bold"
            >
              {item}
            </div>
          ))}
        </div>

        {/* C LEVEL */}
        <div className="flex justify-center gap-2 flex-wrap mb-6">
          {["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"].map(
            (item, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold"
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* BONUS CARDS */}
        <div className="space-y-3">
          
          {/* A */}
          <div className="bg-gradient-to-r from-[#0b8f95] to-[#04545c] border border-yellow-400 rounded-2xl p-4 shadow-lg">
            
            <div className="flex items-start gap-3">
              
              <div className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center font-bold">
                A
              </div>

              <div className="text-[13px] leading-6">
                <p>⚪ 15 on registration & deposit → Cash</p>
                <p>⚪ 50% Bonus</p>
                <p>⚪ 0.5% of bet → Cash</p>
                <p>⚪ 60% of tax → Cash</p>
              </div>
            </div>
          </div>

          {/* B */}
          <div className="bg-gradient-to-r from-[#0b8f95] to-[#04545c] border border-yellow-400 rounded-2xl p-4 shadow-lg">
            
            <div className="flex items-start gap-3">
              
              <div className="w-10 h-10 rounded-full bg-[#b11212] flex items-center justify-center font-bold">
                B
              </div>

              <div className="text-[13px] leading-6">
                <p>⚪ 0.3% of bet → Cash</p>
                <p>⚪ 20% of tax → Cash</p>
              </div>
            </div>
          </div>

          {/* C */}
          <div className="bg-gradient-to-r from-[#0b8f95] to-[#04545c] border border-yellow-400 rounded-2xl p-4 shadow-lg flex items-center justify-between">
            
            <div className="flex items-start gap-3">
              
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                C
              </div>

              <div className="text-[13px] leading-6">
                <p>⚪ 0.2% of bet → Cash</p>
                <p>⚪ 10% of tax → Cash</p>
              </div>
            </div>

            <ChevronRight size={18} />
          </div>
        </div>

        {/* BONUS BAR */}
        <div className="mt-6 bg-[#06656b] border-y border-yellow-400 py-3 text-center text-[13px] font-bold rounded-lg">
          All Refer & Earn Bonus
        </div>

        {/* LIVE RECORDS */}
        <div className="bg-[#08757d]/90 border border-yellow-400/30 rounded-2xl p-4 mt-4">
          
          <div className="space-y-3 text-[12px]">
            
            {[
              "received man***007 Cash(Bonus) 0.94 betting",
              "received pri***101 Cash(Bonus) 0.90 betting",
              "received pri***101 Cash(Bonus) 0.83 referral",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                
                <div className="w-5 h-5 rounded-full bg-[#222]"></div>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SHARE SECTION */}
        <div className="mt-6">
          
          <h2 className="text-center text-[14px] font-bold mb-3">
            Share referral link to friends
          </h2>

          {/* LINK BOX */}
          <div className="bg-white/20 border border-white/10 rounded-xl flex items-center overflow-hidden">
            
            <input
              type="text"
              value="https://yonospot.com"
              readOnly
              className="bg-transparent flex-1 px-4 py-3 outline-none text-[13px]"
            />

            <button className="px-4">
              <Copy size={18} />
            </button>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex justify-center gap-4 mt-5">
            
            <button className="w-10 h-10 rounded-full bg-[#00d26a] flex items-center justify-center">
              <MessageCircle size={18} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center">
              <Send size={18} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;