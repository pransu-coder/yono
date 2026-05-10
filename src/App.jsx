import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Games from './components/Games'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Bonus from './components/Bonus'
import Promocodes from './components/Promocodes'
import Money from './components/Money'
import Bank from './components/Bank'
import About from './components/About'
import Privacy from './components/Privacy'

function App() {
  const [activePage, setActivePage] = useState('home');
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true); // Global Sound Effects state
  const audioRef = useRef(null);
  const clickSoundRef = useRef(null);

  // Click Sound Function
  const playClick = () => {
    if (audioEnabled && clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }
  };

  // Background Music Logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      if (musicEnabled) {
        audio.muted = false;
        audio.volume = 0.4;
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    };

    tryPlay();

    const startOnInteraction = () => {
      if (musicEnabled && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    window.addEventListener('mousedown', startOnInteraction);
    window.addEventListener('touchstart', startOnInteraction);
    window.addEventListener('keydown', startOnInteraction);

    return () => {
      window.removeEventListener('mousedown', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
    };
  }, [musicEnabled]);

  const renderPage = () => {
    switch(activePage) {
      case 'bank': return <Bank />;
      case 'bonus': return <Bonus />;
      case 'promo': return <Promocodes />;
      case 'money': return <Money />;
      case 'about': return <About />;
      case 'privacy': return <Privacy />;
      default: return (
        <>
          <Hero />
          <Games playClick={playClick} />
          <Footer setActivePage={setActivePage} />
        </>
      );
    }
  }

  const handlePageChange = (page) => {
    playClick();
    setActivePage(page);
  };

  return (
    <div className="min-h-screen text-white font-sans pb-24 md:pb-0 bg-[#020817]">
      {/* Background Music */}
      <audio ref={audioRef} src="/bg-music.mp3" loop />
      
      {/* Click Sound Effect */}
      <audio ref={clickSoundRef} src="/click.wav" />

      <Header 
        musicEnabled={musicEnabled} 
        setMusicEnabled={setMusicEnabled}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />
      
      {renderPage()}

      <BottomNav setActivePage={handlePageChange} activePage={activePage} />
    </div>
  )
}

export default App
