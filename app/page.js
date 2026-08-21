'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ShopPage from '@/components/ShopPage';
import AppreciationPage from '@/components/AppreciationPage';
import ExtraInfoPage from '@/components/ExtraInfoPage';
import JailCheck from '@/components/JailCheck';
import DatingProfile from '@/components/DatingProfile';
import ProfileWidget from '@/components/ProfileWidget';
import PhotoCarousel from '@/components/PhotoCarousel';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [jailUnlocked, setJailUnlocked] = useState(false);
  const [datingUnlocked, setDatingUnlocked] = useState(false);

  const getTheme = () => {
    if (activeTab === 'appreciation') return 'appreciation';
    if (activeTab === 'extrainfo' || activeTab === 'jail' || activeTab === 'dating') return 'extrainfo';
    return 'main';
  };

  return (
    <main className="min-h-screen bg-[#1B2340] text-white relative">
      <ProfileWidget />
      <BackgroundMusic />

      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={getTheme()} 
        jailUnlocked={jailUnlocked} 
        datingUnlocked={datingUnlocked} 
      />

      {activeTab === 'home' && (
        <div className="p-8 text-center space-y-6 mt-4 max-w-5xl mx-auto">
          <h1 className="text-5xl tracking-wide font-bold">WELCOME TO <span className="text-[#E8A93B]">COOLCALMCOLLECTED</span></h1>
          
          <p className="text-[#F2EEE3] max-w-xl mx-auto text-sm leading-relaxed italic">
            "Welcome to CoolCalmCollected, here we will show you an incredible selection of tshirts but not just that featuring George!!!!. So with futher ado enjoy!"
          </p>

          <PhotoCarousel />
        </div>
      )}

      {activeTab === 'shop' && <ShopPage />}
      {activeTab === 'appreciation' && <AppreciationPage />}
      {activeTab === 'extrainfo' && (
        <ExtraInfoPage 
          setJailUnlocked={setJailUnlocked} 
          setDatingUnlocked={setDatingUnlocked} 
          jailUnlocked={jailUnlocked}
          datingUnlocked={datingUnlocked}
        />
      )}
      {activeTab === 'jail' && <div className="p-12"><JailCheck /></div>}
      {activeTab === 'dating' && <div className="p-12"><DatingProfile /></div>}
    </main>
  );
}