import { useState, useRef } from 'react';
import { ALLERGENS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertTriangle, RefreshCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FoodSortGame() {
  const [foods, setFoods] = useState(ALLERGENS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ id: string; correct: boolean }[]>([]);
  const [gameFinished, setGameFinished] = useState(false);

  const currentFood = foods[currentIndex];

  const handleDecision = (choice: boolean) => {
    const isCorrect = currentFood.isAllergen === choice;
    const newResults = [...results, { id: currentFood.id, correct: isCorrect }];
    setResults(newResults);
    
    if (currentIndex < foods.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameFinished(true);
      const correctCount = newResults.filter(r => r.correct).length;
      if (correctCount >= foods.length * 0.8) {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 }
        });
      }
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setResults([]);
    setGameFinished(false);
  };

  return (
    <section id="game" className="py-20 px-6 bg-brand-primary/5 rounded-[3rem]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">صنّف طعامك</h2>
        <p className="text-slate-600 mb-12">هل هذا الطعام مسبب للحساسية؟ ساعدنا في تصنيفه!</p>
        
        {gameFinished ? (
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
            <h3 className="text-2xl font-bold mb-6">انتهى التصنيف!</h3>
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {results.map((r, i) => (
                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${r.correct ? 'bg-green-500' : 'bg-red-500'}`}>
                  {r.correct ? '✓' : '×'}
                </div>
              ))}
            </div>
            <p className="text-xl mb-8">لقد صنّفت {results.filter(r => r.correct).length} من {foods.length} بنجاح.</p>
            <button onClick={restart} className="flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold mx-auto">
              <RefreshCcw size={20} />
              العب مرة أخرى
            </button>
          </div>
        ) : (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFood.id}
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ x: 200, opacity: 0, rotate: 20 }}
                className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl mb-8 sm:mb-12 border-b-8 border-slate-100 flex flex-col items-center"
              >
                <div className="text-7xl sm:text-9xl mb-6 sm:mb-8 select-none">{currentFood.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-800">{currentFood.name}</h3>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={() => handleDecision(true)}
                className="p-4 sm:p-6 bg-brand-danger text-white rounded-3xl font-bold flex flex-col items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-danger/20"
              >
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base">يسبب حساسية</span>
              </button>
              <button
                onClick={() => handleDecision(false)}
                className="p-4 sm:p-6 bg-brand-secondary text-white rounded-3xl font-bold flex flex-col items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-secondary/20"
              >
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base">طعام آمن</span>
              </button>
            </div>
            
            <div className="mt-8 text-slate-400 font-bold">
              الباقي: {foods.length - currentIndex} أطعمة
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
