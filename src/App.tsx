import Hero from './components/Hero';
import WhatIsAllergy from './components/WhatIsAllergy';
import AllergyDetails from './components/AllergyDetails';
import Symptoms from './components/Symptoms';
import Prevention from './components/Prevention';
import Quiz from './components/Quiz';
import FoodSortGame from './components/FoodSortGame';
import QuickFacts from './components/QuickFacts';
import AllergyJournal from './components/AllergyJournal';
import RatingSystem from './components/RatingSystem';
import { Heart, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-cyan-50 overflow-x-hidden">
      {/* Navigation - Simple translucent bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center justify-between border border-white/20 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl">
              🥗
            </div>
            <span className="font-bold text-slate-800 hidden sm:block">صحتنا في غذائنا</span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-600">
            <a href="#details" className="hover:text-brand-primary transition-colors whitespace-nowrap">مسببات الحساسية</a>
            <a href="#quiz" className="hover:text-brand-primary transition-colors hidden xs:block">اختبر نفسك</a>
            <a href="#rating" className="hover:text-brand-primary transition-colors whitespace-nowrap">تقييم الموقع</a>
            <a href="#game" className="bg-brand-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-white hover:bg-brand-primary/90 transition-all text-xs sm:text-sm">العب</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 space-y-20 pb-20">
        <Hero />
        <WhatIsAllergy />
        <AllergyDetails />
        <Symptoms />
        <Prevention />
        <QuickFacts />
        <AllergyJournal />
        <Quiz />
        <FoodSortGame />
        <RatingSystem />
      </main>

      <footer className="py-12 px-6 bg-slate-100 text-center rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full border-b border-slate-200 pb-6 gap-4">
            <div className="flex items-center gap-2 text-slate-600 font-bold">
              <span>🥗 صحتنا في غذائنا</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://faisal-alzahrani.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all text-sm"
                id="diabetes-assistant-link"
              >
                <span>مساعدي السكري</span>
                <ExternalLink size={16} />
              </a>

              <a 
                href="https://falzahrani.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all text-sm"
                id="achievements-link"
              >
                <span>لمحة لانجازاتي</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500">
            صنع بكل <Heart className="text-red-500 fill-current" size={18} /> لأطفالنا المبدعين
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
            هذا الموقع تعليمي ويهدف لنشر الوعي. في حال الطوارئ، اتصل دائماً بالإسعاف أو بوالديك.
          </p>
        </div>
      </footer>
    </div>
  );
}

