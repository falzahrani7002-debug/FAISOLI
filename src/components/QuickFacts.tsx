import { motion } from 'motion/react';
import { QUICK_FACTS } from '../constants';

export default function QuickFacts() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">حقائق سريعة</h2>
        <p className="text-slate-600">معلومات مفيدة تزيد من ذكائك الصحي!</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {QUICK_FACTS.map((fact, index) => (
          <motion.div
            key={fact.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group perspective-1000 h-64"
          >
            <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
              {/* Front */}
              <div className="absolute inset-0 bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col items-center justify-center [backface-visibility:hidden]">
                <div className="text-6xl mb-4">{fact.icon}</div>
                <h3 className="text-xl font-bold text-brand-primary">{fact.title}</h3>
                <p className="mt-4 text-slate-400 text-sm">المس البطاقة لتكتشف الحقيقة</p>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 bg-brand-primary p-8 rounded-[2rem] shadow-lg text-white flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="text-lg leading-relaxed font-bold">{fact.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
