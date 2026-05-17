import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JournalEntry } from '../types';
import { BookOpen, Plus, Trash2, Calendar } from 'lucide-react';

export default function AllergyJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [foodName, setFoodName] = useState('');
  const [symptoms, setSymptoms] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('allergy_journal');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load journal');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allergy_journal', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!foodName || !symptoms) return;

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      foodName,
      symptoms,
      date: new Date().toLocaleDateString('ar-SA'),
    };

    setEntries([newEntry, ...entries]);
    setFoodName('');
    setSymptoms('');
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  return (
    <section id="journal" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-brand-primary p-10 text-white flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <BookOpen />
              مفكرة الحساسية
            </h2>
            <p className="text-white/80 mt-2">سجل الأطعمة التي تزعجك لتتذكرها دائماً!</p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <form onSubmit={addEntry} className="grid md:grid-cols-3 gap-4 mb-12 bg-slate-50 p-6 rounded-3xl">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 mr-2">اسم الطعام</label>
              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                placeholder="مثلاً: بسكويت بالسمسم"
                className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 mr-2">ماذا حدث؟</label>
              <input
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="مثلاً: حكة في اليد"
                className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full p-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20 transition-all active:scale-95"
              >
                <Plus size={20} />
                إضافة للمفكرة
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {entries.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p>لا توجد قيود حتى الآن. ابدأ بتدوين ملاحظاتك!</p>
                </div>
              ) : (
                entries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center justify-between p-6 bg-white border-2 border-slate-50 rounded-2xl hover:border-brand-primary/10 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-slate-50 rounded-xl text-slate-400">
                        <Calendar size={20} />
                        <span className="text-xs block mt-1">{entry.date}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">{entry.foodName}</h4>
                        <p className="text-slate-500">{entry.symptoms}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeEntry(entry.id)}
                      className="p-3 text-slate-300 hover:text-brand-danger hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
