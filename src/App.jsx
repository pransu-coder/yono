import React, { useState } from 'react'
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

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'bank': return <Bank />;
      case 'bonus': return <Bonus />;
      case 'promo': return <Promocodes />;
      case 'money': return <Money />;
      default: return (
        <>
          <Hero />
          <Games />
          <Footer />
        </>
      );
    }
  }

  return (
    <div className="min-h-screen text-white font-sans pb-24 md:pb-0 bg-[#020817]">
      <Header />
      
      {renderPage()}

      <BottomNav setActivePage={setActivePage} activePage={activePage} />
    </div>
  )
}

export default App
