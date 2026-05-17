import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALLERGY_DETAILS } from '../constants';
import { Info, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AllergyDetails() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedAllergy = ALLERGY_DETAILS.find(a => a.id === selectedId);

  return (
    <section id="details" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">تفاصيل الحساسيات</h2>
        <p className="text-slate-600">اختر طعاماً لتعرف أكثر عنه وكيف تتجنبه بذكاء!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {ALLERGY_DETAILS.map((allergy) => (
          <button
            key={allergy.id}
            onClick={() => setSelectedId(allergy.id)}
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all border-2",
              selectedId === allergy.id 
                ? "bg-brand-primary text-white border-brand-primary shadow-lg scale-105" 
                : "bg-white text-slate-600 border-slate-100 hover:border-brand-primary/30"
            )}
          >
            <span className="text-2xl">{allergy.icon}</span>
            <span>{allergy.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedId && selectedAllergy ? (
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="text-9xl mb-6 bg-slate-50 w-full aspect-square flex items-center justify-center rounded-3xl">
                  {selectedAllergy.icon}
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-4">{selectedAllergy.name}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {selectedAllergy.description}
                </p>
              </div>

              <div className="md:w-2/3 space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-orange-50 p-6 rounded-2xl border-r-4 border-orange-400">
                    <div className="flex items-center gap-2 mb-4 text-orange-700 font-bold">
                      <AlertCircle size={20} />
                      <h4>أين يختبئ؟</h4>
                    </div>
                    <ul className="space-y-2 text-orange-900/80">
                      {selectedAllergy.hiddenSources.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl border-r-4 border-green-400">
                    <div className="flex items-center gap-2 mb-4 text-green-700 font-bold">
                      <ShieldCheck size={20} />
                      <h4>بدائل آمنة ولذيذة</h4>
                    </div>
                    <ul className="space-y-2 text-green-900/80">
                      {selectedAllergy.alternatives.map((a, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4 text-slate-700 font-bold">
                    <Info size={20} />
                    <h4>الأعراض المحتملة</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedAllergy.symptoms.map((s, i) => (
                      <span key={i} className="bg-white px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-slate-100/50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <RefreshCw className="mx-auto mb-4 text-slate-300 animate-spin-slow" size={48} />
            <p className="text-slate-400 font-bold">اضغط على أي أيقونة أعلاه لتعرف أسرارها!</p>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
