import React from "react";
import {
  ArrowLeft,
  FileText,
  ChevronRight,
  Copy,
  Link2,
  CreditCard,
} from "lucide-react";

const Bonus = () => {
  return (
    <div
      className="min-h-screen text-white px-4 pt-12 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop')",
      }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
      

        <div className="w-8"></div>
      </div>

      {/* POST TO EARN */}
      <div className="bg-gradient-to-br from-[#047b7d] to-[#01555b] border-2 border-yellow-400 rounded-[28px] p-5 mb-5 shadow-xl">
        
        <div className="flex items-center justify-between mb-5">
          
          <div className="flex items-center gap-3">
            <FileText
              size={28}
              className="text-yellow-300"
            />

            <h2 className="text-[22px] font-black text-yellow-300">
              Post to Earn
            </h2>
          </div>

          <ChevronRight className="text-white" />
        </div>

        <p className="text-[15px] leading-7 text-white/95">
          Earn money simply by sharing posts! Here's how
          it works:
        </p>

        <div className="mt-5 space-y-4 text-[15px] leading-7 text-white/95">
          <p>1. Copy the unique link provided to you.</p>

          <p>
            2. Share the link on your Telegram, Instagram,
            or WhatsApp.
          </p>

          <p>
            3. Take a screenshot of your post and submit
            it along with the link and your UPI ID.
          </p>

          <p>
            4. Once verified, you'll receive instant
            payment!
          </p>
        </div>
      </div>

      {/* EARN CARD */}
      <div className="bg-gradient-to-br from-[#047b7d] to-[#01555b] border-2 border-[#0ce0a0] rounded-[26px] p-5 mb-5 shadow-xl">
        
        <h2 className="text-center text-[26px] font-black text-[#d5ff70]">
          Earn Upto 500 - 5000
        </h2>

        {/* LINK BOX */}
        <div className="mt-5 bg-[#01464b] border border-[#0ce0a0]/40 rounded-2xl px-4 py-4 text-center">
          
          <p className="text-[15px] text-white break-all">
            https://example.com/post-to-earn-referral
          </p>
        </div>

        {/* COPY BUTTON */}
        <div className="flex justify-center mt-5">
          <button className="bg-gradient-to-r from-[#0f8d1e] to-[#00d14a] px-8 py-3 rounded-full flex items-center gap-2 font-black text-[18px] shadow-lg active:scale-95 transition">
            
            <Copy size={20} />

            Copy
          </button>
        </div>
      </div>

      {/* SUBMIT DETAILS */}
      <div className="bg-gradient-to-br from-[#047b7d] to-[#01555b] border-2 border-[#0ce0a0] rounded-[28px] p-5 shadow-xl">
        
        <h2 className="text-center text-[28px] font-black text-[#d5ff70] mb-6">
          Submit Your Details
        </h2>

        {/* POST LINK */}
        <div className="mb-5">
          
          <div className="flex items-center gap-2 mb-2">
            <Link2 size={18} className="text-white" />

            <p className="text-[15px] font-bold">
              Post Link
            </p>
          </div>

          <input
            type="text"
            placeholder="https://post.url/..."
            className="w-full bg-[#01464b] border border-[#0ce0a0]/40 rounded-2xl px-4 py-4 outline-none text-white placeholder:text-white/50"
          />
        </div>

        {/* UPI */}
        <div className="mb-6">
          
          <div className="flex items-center gap-2 mb-2">
            <CreditCard
              size={18}
              className="text-white"
            />

            <p className="text-[15px] font-bold">
              UPI ID
            </p>
          </div>

          <input
            type="text"
            placeholder="yourname@upi"
            className="w-full bg-[#01464b] border border-[#0ce0a0]/40 rounded-2xl px-4 py-4 outline-none text-white placeholder:text-white/50"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button className="w-full bg-gradient-to-r from-[#0f8d1e] to-[#00d14a] py-4 rounded-full text-[22px] font-black shadow-xl active:scale-95 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Bonus;