import { motion } from 'motion/react';
import { SYMPTOMS } from '../constants';
import { cn } from '../lib/utils';

export default function Symptoms() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">الأعراض الشائعة</h2>
        <p className="text-slate-600">كيف نعرف أن شخصاً ما لديه حساسية تجاه ما أكل؟</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SYMPTOMS.map((symptom, index) => (
          <motion.div
            key={symptom.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "p-8 rounded-[2rem] border-2 border-transparent hover:border-slate-200 transition-all text-center",
              symptom.color
            )}
          >
            <div className="text-6xl mb-6">{symptom.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">{symptom.name}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{symptom.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
