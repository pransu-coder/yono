import React, { useState } from "react";
import {
  Coins,
  Settings,
  Lock,
  Copy,
  Phone,
  Pencil,
  CircleHelp,
  Plus,
  X,
} from "lucide-react";

const vipData = [
  { name: "VIP0", color: "border-orange-400" },
  { name: "VIP1", color: "border-gray-400" },
  { name: "VIP2", color: "border-yellow-400" },
  { name: "VIP3", color: "border-purple-400" },
  { name: "VIP4", color: "border-green-400" },
  { name: "VIP5", color: "border-pink-400" },
  { name: "VIP6", color: "border-blue-400" },
  { name: "VIP7", color: "border-indigo-400" },
  { name: "VIP8", color: "border-cyan-400" },
  { name: "VIP9", color: "border-sky-400" },
  { name: "VIP10", color: "border-emerald-400" },
  { name: "VIP11", color: "border-amber-400" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-[60] h-[58px] bg-[#020817] border-b border-green-500/30 overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2447_0%,#020817_70%)]"></div>

        <div className="relative flex items-center justify-between h-full px-4">
          
          {/* PROFILE */}
          <button onClick={() => setOpen(true)}>
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-10 h-10 rounded-full border-[2px] border-orange-500"
            />
          </button>

          {/* COIN BOX */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            
            <div className="w-[210px] h-[60px] rounded-b-[40px] border-x-[4px] border-b-[4px] border-yellow-500 bg-gradient-to-b from-[#005c57] to-[#013631] flex items-center justify-center gap-2 shadow-lg">
              
              <span className="text-white text-[20px] font-bold">
                100
              </span>

              <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                <Coins className="w-3 h-3 text-yellow-900" />
              </div>
            </div>
          </div>

          {/* SETTINGS */}
          <button>
            <Settings className="w-6 h-6 text-green-400" />
          </button>
        </div>
      </header>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex justify-center items-start pt-16 px-3 overflow-y-auto">

          <div className="relative w-full max-w-[540px] rounded-[22px] border border-cyan-400/40 bg-[#2d3d58]/95 overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.12)]">

            {/* TOP BALANCE CARD */}
            <div className="p-3">
              
              <div className="bg-[#394a65]/90 border border-cyan-400/30 rounded-[18px] px-4 py-3 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-3">

                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/100"
                      alt=""
                      className="w-12 h-12 rounded-full border-[3px] border-orange-500"
                    />

                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[9px] px-2 py-[1px] rounded-full font-bold">
                      VIP
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    
                    <Coins className="w-4 h-4 text-yellow-400 fill-yellow-400" />

                    <span className="text-white text-[20px] font-bold">
                      24.59
                    </span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2">

                  <button className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center">
                    <Plus className="w-4 h-4 text-green-900" />
                  </button>

                  <div className="w-7 h-7 rounded-full bg-red-500 text-white text-[12px] font-bold flex items-center justify-center">
                    2
                  </div>

                  <button onClick={() => setOpen(false)}>
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* USER INFO */}
            <div className="px-4">

              <div className="flex justify-between items-start">

                {/* LEFT */}
                <div className="flex gap-3">

                  <img
                    src="https://i.pravatar.cc/100"
                    alt=""
                    className="w-14 h-14 rounded-full border-[3px] border-cyan-500"
                  />

                  <div>

                    {/* NAME */}
                    <div className="flex items-center gap-1">
                      
                      <h2 className="text-white text-[20px] font-bold leading-none">
                        Yono Spot
                      </h2>

                      <Pencil className="w-3 h-3 text-cyan-400" />
                    </div>

                    {/* UID */}
                    <div className="flex items-center gap-1 mt-2">
                      
                      <span className="text-gray-300 text-[11px]">
                        UID:
                      </span>

                      <div className="bg-[#2d3a50] rounded-md px-2 py-[2px] flex items-center gap-1 border border-white/10">
                        
                        <span className="text-white text-[11px] font-semibold">
                          58XXXX9
                        </span>

                        <Copy className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center gap-1 mt-1">

                      <Phone className="w-3 h-3 text-gray-300" />

                      <div className="bg-[#2d3a50] rounded-md px-2 py-[2px] flex items-center gap-1 border border-white/10">
                        
                        <span className="text-white text-[11px] font-semibold">
                          99XXXX21
                        </span>

                        <Copy className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-center gap-2">

                  <button className="w-6 h-6 rounded-full border border-orange-400 flex items-center justify-center">
                    <CircleHelp className="w-3 h-3 text-orange-300" />
                  </button>

                  <button className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-[2px] rounded-full">
                    VIP
                  </button>
                </div>
              </div>

              {/* BALANCE */}
              <div className="flex items-center gap-2 mt-4">

                <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Coins className="w-4 h-4 text-yellow-900 fill-yellow-900" />
                </div>

                <span className="text-white text-3xl font-black">
                  24.59
                </span>
              </div>

              {/* DIVIDER */}
              <div className="w-full h-[1px] bg-white/10 mt-4"></div>

              {/* TITLE */}
              <h2 className="text-center text-yellow-400 text-[30px] font-black mt-5 tracking-wide">
                BACKPACK
              </h2>
            </div>

            {/* VIP GRID */}
            <div className="grid grid-cols-4 gap-y-5 gap-x-3 mt-6 px-4">

              {vipData.map((vip, i) => (
                <div key={i} className="flex flex-col items-center">

                  <div
                    className={`w-16 h-16 rounded-full border-[4px] ${vip.color} bg-[#202d45] flex items-center justify-center shadow-md`}
                  >
                    <div className="w-11 h-11 rounded-full bg-[#182235] border-2 border-black/20 flex items-center justify-center">
                      
                      <Lock className="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>

                  <span className="mt-1 text-white text-[12px] font-bold">
                    {vip.name}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-3 mt-6 px-4 pb-4">

              <button className="h-11 rounded-xl bg-gradient-to-b from-orange-400 to-orange-600 text-white text-[15px] font-bold">
                Verify Now
              </button>

              <button className="h-11 rounded-xl bg-gradient-to-b from-red-500 to-red-700 text-white text-[15px] font-bold">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;