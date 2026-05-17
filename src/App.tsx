import Hero from './components/Hero';
import WhatIsAllergy from './components/WhatIsAllergy';
import AllergyDetails from './components/AllergyDetails';
import Symptoms from './components/Symptoms';
import Prevention from './components/Prevention';
import Quiz from './components/Quiz';
import FoodSortGame from './components/FoodSortGame';
import QuickFacts from './components/QuickFacts';
import AllergyJournal from './components/AllergyJournal';
import { Heart } from 'lucide-react';

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
          
          <div className="flex items-center gap-6 text-sm font-bold text-slate-600">
            <a href="#details" className="hover:text-brand-primary transition-colors">مسببات الحساسية</a>
            <a href="#quiz" className="hover:text-brand-primary transition-colors">اختبر نفسك</a>
            <a href="#journal" className="hover:text-brand-primary transition-colors">المفكرة</a>
            <a href="#game" className="bg-brand-primary px-4 py-2 rounded-xl text-white hover:bg-brand-primary/90 transition-all">العب الآن</a>
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
      </main>

      <footer className="py-12 px-6 bg-slate-100 text-center rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-4">
            صنع بكل <Heart className="text-red-500 fill-current" size={18} /> لأطفالنا المبدعين
          </div>
          <p className="text-slate-400 text-sm">
            هذا الموقع تعليمي ويهدف لنشر الوعي. في حال الطوارئ، اتصل دائماً بالإسعاف أو بوالديك.
          </p>
        </div>
      </footer>
    </div>
  );
}

