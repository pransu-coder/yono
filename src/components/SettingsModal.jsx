import React, { useState } from 'react';
import { X, Volume2, Music } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose, musicEnabled, setMusicEnabled, audioEnabled, setAudioEnabled }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-6">
      <div className="relative w-full max-w-[280px] bg-[#03110a] border border-green-500/30 rounded-[24px] overflow-hidden shadow-2xl">
        
        {/* Simple Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-green-500/10">
          <h2 className="text-sm font-bold text-green-400 uppercase tracking-widest">Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Compact Content */}
        <div className="p-6 space-y-6">
          
          {/* Sound Effects - Functional */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Volume2 className={`w-5 h-5 ${audioEnabled ? 'text-green-400' : 'text-gray-600'}`} />
              <span className="text-[13px] font-medium text-gray-200">Sounds</span>
            </div>
            
            <button 
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${audioEnabled ? 'bg-green-500' : 'bg-gray-800'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${audioEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </div>

          {/* Background Music - Functional */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Music className={`w-5 h-5 ${musicEnabled ? 'text-green-400' : 'text-gray-600'}`} />
              <span className="text-[13px] font-medium text-gray-200">Music</span>
            </div>
            
            <button 
              onClick={() => setMusicEnabled(!musicEnabled)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${musicEnabled ? 'bg-green-500' : 'bg-gray-800'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${musicEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="pb-4 text-center">
          <p className="text-[9px] text-gray-600 font-medium uppercase tracking-widest">v1.0.4</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
