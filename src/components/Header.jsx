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
import SettingsModal from "./SettingsModal";

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

const Header = ({ musicEnabled, setMusicEnabled, audioEnabled, setAudioEnabled }) => {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-[60] h-[64px] bg-[#020817]/80 backdrop-blur-md border-b border-cyan-500/20 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        
        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2447_0%,#020817_100%)]"></div>

        {/* Animated Sparkles */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full animate-sparkle"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (Math.random() * 3 + 2) + 's'
              }}
            />
          ))}
        </div>

        <div className="relative flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
          
          {/* PROFILE SECTION */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setOpen(true)}
              className="relative group transition-transform active:scale-95"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="https://i.pravatar.cc/100"
                alt="Profile"
                className="relative w-10 h-10 rounded-full border-2 border-white/20 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-[8px] px-1.5 py-0.5 rounded-full font-black border border-[#020817]">
                VIP
              </div>
            </button>
            <div className="hidden sm:block">
              <p className="text-white text-xs font-bold leading-none">Guest User</p>
              <p className="text-cyan-400 text-[10px] font-medium">UID: 582349</p>
            </div>
          </div>

          {/* CENTRAL COIN BOX - THE "GAMING" LOOK */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <div className="relative flex items-center bg-[#1e293b]/60 backdrop-blur-xl px-4 py-1.5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              {/* Glowing Background Effect */}
              <div className="absolute -inset-px bg-gradient-to-b from-yellow-500/20 to-transparent rounded-2xl pointer-events-none"></div>
              
              {/* Coin Icon */}
              <div className="relative mr-2 group">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-[4px] opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-200 flex items-center justify-center border border-yellow-900/20 shadow-inner">
                  <Coins className="w-4 h-4 text-yellow-900 fill-yellow-900/30" />
                </div>
              </div>

              {/* Amount */}
              <div className="flex flex-col items-start mr-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-0.5 tracking-tighter">Balance</span>
                <span className="text-white text-lg font-black leading-none tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  100.00
                </span>
              </div>

              {/* Add Button */}
              <button className="w-7 h-7 rounded-lg bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center hover:from-green-300 hover:to-green-500 transition-all active:scale-90 shadow-[0_2px_10px_rgba(34,197,94,0.3)] border border-green-400/30">
                <Plus className="w-4 h-4 text-white font-bold" />
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setSettingsOpen(true)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
            >
              <Settings className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>

        </div>
      </header>

      {/* SETTINGS MODAL */}
      <SettingsModal 
        isOpen={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
        musicEnabled={musicEnabled}
        setMusicEnabled={setMusicEnabled}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex justify-center items-start pt-16 px-4 overflow-y-auto">

          <div className="relative w-full max-w-[540px] rounded-[30px] border border-white/10 bg-[#0f172a]/95 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-300">
            
            {/* Header Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>

            {/* TOP BALANCE CARD */}
            <div className="p-4">
              
              <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur opacity-40"></div>
                    <img
                      src="https://i.pravatar.cc/100"
                      alt="Avatar"
                      className="relative w-12 h-12 rounded-full border-2 border-white/20"
                    />

                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[9px] px-2 py-0.5 rounded-full font-black border border-[#0f172a] shadow-lg">
                      VIP
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Total Wallet</span>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shadow-[0_0_8px_rgba(234,179,8,0.4)]">
                        <Coins className="w-3 h-3 text-yellow-900 fill-yellow-900/20" />
                      </div>
                      <span className="text-white text-2xl font-black tracking-tight">
                        24.59
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">

                  <button className="w-9 h-9 rounded-xl bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95">
                    <Plus className="w-5 h-5 text-white" />
                  </button>

                  <div className="relative">
                    <div className="w-7 h-7 rounded-full bg-red-500 text-white text-[12px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.4)]">
                      2
                    </div>
                  </div>

                  <button 
                    onClick={() => setOpen(false)}
                    className="p-1 hover:bg-white/5 rounded-full transition-colors ml-1"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* USER INFO */}
            <div className="px-6 pb-6">

              <div className="flex justify-between items-start">

                {/* LEFT */}
                <div className="flex gap-4">

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <img
                      src="https://i.pravatar.cc/100"
                      alt=""
                      className="relative w-16 h-16 rounded-full border-2 border-cyan-500 shadow-xl"
                    />
                  </div>

                  <div className="pt-1">

                    {/* NAME */}
                    <div className="flex items-center gap-2">
                      <h2 className="text-white text-2xl font-black leading-none tracking-tight">
                        Yono Spot
                      </h2>
                      <button className="p-1 hover:bg-white/5 rounded-md transition-colors">
                        <Pencil className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>

                    {/* UID */}
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">UID:</span>
                      <div className="bg-white/5 rounded-lg px-3 py-1 flex items-center gap-2 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                        <span className="text-white text-xs font-mono font-bold tracking-wider">5811349</span>
                        <Copy className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="w-3 h-3 text-gray-500" />
                      <div className="bg-white/5 rounded-lg px-3 py-1 flex items-center gap-2 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                        <span className="text-white text-xs font-mono font-bold tracking-wider">99XXXXXX21</span>
                        <Copy className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-center gap-3 pt-2">

                  <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                    <CircleHelp className="w-4 h-4 text-gray-400" />
                  </button>

                  <div className="px-3 py-1 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest shadow-[0_4px_10px_rgba(234,179,8,0.3)]">
                    VIP 0
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8"></div>

              {/* TITLE */}
              <div className="relative mt-6 mb-8">
                <h2 className="text-center text-yellow-400 text-[32px] font-black tracking-[0.2em] italic uppercase drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  Backpack
                </h2>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-yellow-400/50 blur-[1px]"></div>
              </div>

              {/* VIP GRID */}
              <div className="grid grid-cols-4 gap-y-6 gap-x-4">
                {vipData.map((vip, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div
                      className={`relative w-16 h-16 rounded-full border-[3px] ${vip.color} bg-[#1a2235] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300`}
                    >
                      <div className="absolute inset-0 rounded-full bg-black/20 group-hover:bg-transparent transition-colors"></div>
                      <div className="w-12 h-12 rounded-full bg-[#0f172a] border border-white/5 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-white/20 group-hover:text-yellow-400 transition-colors" />
                      </div>
                    </div>
                    <span className="mt-2 text-white/60 text-[10px] font-black uppercase tracking-wider group-hover:text-white transition-colors">
                      {vip.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <button className="h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-black uppercase tracking-widest shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:opacity-90 transition-opacity active:scale-95">
                  Verify Now
                </button>
                <button className="h-12 rounded-2xl bg-white/5 border border-white/10 text-gray-400 text-sm font-black uppercase tracking-widest hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all active:scale-95">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
