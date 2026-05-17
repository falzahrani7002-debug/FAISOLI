import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, ChevronLeft, RotateCcw } from 'lucide-react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const correct = index === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    const next = currentQuestion + 1;
    if (next < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl border border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:text-center text-slate-800">اختبر معلوماتك</h2>
        
        {showScore ? (
          <div className="text-center py-6 sm:py-10">
            <div className="text-6xl sm:text-8xl mb-6">🏆</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">أحسنت يا بطل!</h3>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">لقد أجبت على {score} من أصل {QUIZ_QUESTIONS.length} بشكل صحيح.</p>
            <button
              onClick={restartQuiz}
              className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-brand-primary text-white rounded-2xl font-bold mx-auto hover:scale-105 transition-transform"
            >
              <RotateCcw size={18} />
              حاول مرة أخرى
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 overflow-hidden bg-slate-100 h-2.5 rounded-full flex">
              <div 
                className="bg-brand-primary transition-all duration-500" 
                style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400 font-bold text-xs sm:text-sm">السؤال {currentQuestion + 1} من {QUIZ_QUESTIONS.length}</span>
              <span className="bg-brand-primary/10 text-brand-primary text-xs px-2 py-1 rounded-lg font-bold">نقاطك: {score}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-slate-800 leading-snug">{QUIZ_QUESTIONS[currentQuestion].question}</h3>
            
            <div className="grid gap-3 sm:gap-4">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrectOption = index === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
                
                let btnClass = "p-4 sm:p-5 rounded-2xl border-2 text-right transition-all font-bold text-base sm:text-lg flex items-center justify-between ";
                if (selectedOption === null) {
                  btnClass += "hover:bg-slate-50 hover:border-brand-primary border-slate-100";
                } else if (isCorrectOption) {
                  btnClass += "bg-green-50 border-green-500 text-green-700";
                } else if (isSelected && !isCorrectOption) {
                  btnClass += "bg-red-50 border-red-500 text-red-700";
                } else {
                  btnClass += "opacity-50 border-slate-100";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                    className={btnClass}
                  >
                    <span>{option}</span>
                    {selectedOption !== null && isCorrectOption && <CheckCircle2 className="text-green-500 shrink-0" />}
                    {selectedOption === index && !isCorrectOption && <XCircle className="text-red-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
            
            <AnimatePresence>
              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-blue-50 rounded-2xl border-r-4 border-blue-500"
                >
                  <p className="text-blue-900 leading-relaxed">
                    <strong className="block mb-1">لماذا؟</strong>
                    {QUIZ_QUESTIONS[currentQuestion].explanation}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="mt-6 flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-bold hover:gap-4 transition-all"
                  >
                    <span>{currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'إنهاء' : 'السؤال التالي'}</span>
                    <ChevronLeft size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
