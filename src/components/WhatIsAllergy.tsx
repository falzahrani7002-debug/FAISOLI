import { motion } from 'motion/react';

export default function WhatIsAllergy() {
  return (
    <section id="what-is" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-800">ما هي الحساسية الغذائية؟</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              تخيل أن في جسمنا جيشاً صغيراً يسمى "جهاز المناعة". وظيفته هي حمايتنا من الجراثيم. 
              لكن أحياناً، يخطئ هذا الجيش ويظن أن قطعة من الفول السوداني أو كوباً من الحليب هو عدو خطر!
            </p>
            <p className="bg-brand-primary/5 p-6 rounded-2xl border-r-4 border-brand-primary">
              <strong className="text-brand-primary block mb-2">هل تعلم الفرق؟</strong>
              <strong>الحساسية الغذائية:</strong> رد فعل سريع وخطير أحياناً من جهاز المناعة.
              <br />
              <strong>عدم تحمل الطعام:</strong> مجرد انزعاج في المعدة ليس له علاقة بجهاز المناعة، مثل الشعور بالانتفاخ.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-2"
        >
          <div className="aspect-square bg-brand-primary/10 rounded-3xl flex items-center justify-center p-8">
            <div className="text-9xl animate-pulse">🛡️</div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
            <span className="font-bold text-sm">جسمك يحاول حمايتك</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
