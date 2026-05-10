import React from 'react';
import { Search } from 'lucide-react';
import { DotLottiePlayer } from '@dotlottie/react-player';

const BottomNav = ({ setActivePage, activePage }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] pointer-events-none pb-2">
      <div className="max-w-[450px] mx-auto relative pointer-events-auto px-4">
        
        {/* Glassmorphism Background Container */}
        <div className="absolute inset-0 bottom-2 mx-4 bg-[#051a0f]/90 backdrop-blur-md rounded-[28px] border border-green-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] h-[70px]"></div>
        
        <div className="relative flex justify-between items-center h-[70px] px-2">
          
          {/* Bank */}
          <button 
            onClick={() => setActivePage('bank')}
            className={`flex flex-col items-center justify-center flex-1 group transition-all ${activePage === 'bank' ? 'scale-110' : ''}`}
          >
            <div className={`w-11 h-11 flex items-center justify-center rounded-2xl ${activePage === 'bank' ? 'bg-green-500/20' : 'group-hover:bg-green-500/10'} transition-all duration-300`}>
              <DotLottiePlayer
                src="/Home.json"
                autoplay
                loop
                className="w-9 h-9"
              />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-tight ${activePage === 'bank' ? 'text-green-400' : 'text-green-400/60'} group-hover:text-green-400 transition-colors`}>Bank</span>
          </button>
          
          {/* Bonus */}
          <button 
            onClick={() => setActivePage('bonus')}
            className={`flex flex-col items-center justify-center flex-1 group transition-all ${activePage === 'bonus' ? 'scale-110' : ''}`}
          >
            <div className={`w-11 h-11 flex items-center justify-center rounded-2xl ${activePage === 'bonus' ? 'bg-green-500/20' : 'group-hover:bg-green-500/10'} transition-all duration-300`}>
              <DotLottiePlayer
                src="/Gift Box.json"
                autoplay
                loop
                className="w-9 h-9"
              />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-tight ${activePage === 'bonus' ? 'text-green-400' : 'text-green-400/60'} group-hover:text-green-400 transition-colors`}>Bonus</span>
          </button>

          {/* Center Game Icon */}
          <div className="relative -top-5 flex-1 flex flex-col items-center justify-center">
            <button 
              onClick={() => setActivePage('home')}
              className="relative w-16 h-16 flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <img src="/main.png" alt="Game" className="w-full h-full object-contain" />
            </button>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-tight text-green-400">Game</span>
          </div>

          {/* Promocodes */}
          <button 
            onClick={() => setActivePage('promo')}
            className={`flex flex-col items-center justify-center flex-1 group transition-all ${activePage === 'promo' ? 'scale-110' : ''}`}
          >
            <div className={`w-11 h-11 flex items-center justify-center rounded-2xl ${activePage === 'promo' ? 'bg-green-500/20' : 'group-hover:bg-green-500/10'} transition-all duration-300`}>
              <DotLottiePlayer
                src="/Woman telling about 777  jackpot winner.json"
                autoplay
                loop
                className="w-10 h-10 scale-110"
              />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-tight ${activePage === 'promo' ? 'text-green-400' : 'text-green-400/60'} group-hover:text-green-400 transition-colors`}>Promo</span>
          </button>
          
          {/* Money */}
          <button 
            onClick={() => setActivePage('money')}
            className={`flex flex-col items-center justify-center flex-1 group transition-all ${activePage === 'money' ? 'scale-110' : ''}`}
          >
            <div className={`w-11 h-11 flex items-center justify-center rounded-2xl ${activePage === 'money' ? 'bg-green-500/20' : 'group-hover:bg-green-500/10'} transition-all duration-300`}>
              <DotLottiePlayer
                src="/Money Bag.json"
                autoplay
                loop
                className="w-9 h-9"
              />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-tight ${activePage === 'money' ? 'text-green-400' : 'text-green-400/60'} group-hover:text-green-400 transition-colors`}>Money</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
