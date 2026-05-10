import React from "react";
import {
  Gift,
  Copy,
  ExternalLink,
} from "lucide-react";

const Promocodes = () => {
  return (
    <div
      className="min-h-screen text-white pt-10 pb-8"
      style={{
        background:
          "linear-gradient(to bottom,#02130c,#041f15,#02110b)",
      }}
    >
      {/* HEADER */}
      <div className="text-center px-4 mb-6">
        
        <div className="flex items-center justify-center gap-2">
          <Gift size={22} className="text-pink-400" />

          <h1 className="text-[20px] font-bold">
            Daily Promo Codes
          </h1>
        </div>

        <p className="text-[13px] text-gray-300 mt-2 leading-5">
          Join our channel to get latest working promo
          codes instantly
        </p>
      </div>

      {/* CARD 1 */}
      <div className="mx-2 mb-5 overflow-hidden rounded-t-[20px]">
        
        {/* TOP CURVE */}
        <div className="h-[6px] bg-gradient-to-r from-[#0a4429] via-[#15a86a] to-[#0a4429]" />

        {/* BODY */}
        <div className="bg-[#041b14]/95 px-3 py-4 border border-[#00ff99]/10">
          
          {/* TITLE */}
          <div className="flex items-center gap-2 mb-2">
            <Gift size={15} className="text-[#00ff99]" />

            <h2 className="text-[16px] font-bold">
              Daily Promo Codes
            </h2>
          </div>

          <p className="text-[12px] text-gray-300 mb-4">
            Get latest working promo codes updated daily
          </p>

          {/* CODE BOX */}
          <div className="bg-gradient-to-r from-[#103826] to-[#0c5d3f] rounded-xl px-3 py-3 flex items-center justify-between mb-4">
            
            <p className="text-[#92ffcb] text-[15px] font-medium">
              JOIN & GET
            </p>

            <button className="w-8 h-8 rounded-lg bg-[#00c87a] flex items-center justify-center">
              <Copy size={15} />
            </button>
          </div>

          {/* BUTTON */}
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#00c96b] rounded-xl py-3 flex items-center justify-center gap-2 text-[16px] font-bold"
          >
            Join Here

            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="mx-2 overflow-hidden rounded-t-[20px]">
        
        {/* TOP CURVE */}
        <div className="h-[6px] bg-gradient-to-r from-[#0a4429] via-[#15a86a] to-[#0a4429]" />

        {/* BODY */}
        <div className="bg-[#041b14]/95 px-3 py-4 border border-[#00ff99]/10">
          
          {/* TITLE */}
          <div className="flex items-center gap-2 mb-2">
            <Gift size={15} className="text-[#00ff99]" />

            <h2 className="text-[16px] font-bold">
              Exclusive Offers
            </h2>
          </div>

          <p className="text-[12px] text-gray-300 mb-4">
            Premium users ke liye special deals
          </p>

          {/* CODE BOX */}
          <div className="bg-gradient-to-r from-[#103826] to-[#0c5d3f] rounded-xl px-3 py-3 flex items-center justify-between mb-4">
            
            <p className="text-[#92ffcb] text-[15px] font-medium">
              UNLOCK NOW
            </p>

            <button className="w-8 h-8 rounded-lg bg-[#00c87a] flex items-center justify-center">
              <Copy size={15} />
            </button>
          </div>

          {/* BUTTON */}
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#00c96b] rounded-xl py-3 flex items-center justify-center gap-2 text-[16px] font-bold"
          >
            Join Here

            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promocodes;