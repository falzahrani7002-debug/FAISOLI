import { motion } from 'motion/react';
import { Eye, HeartHandshake, School, MessageCircleWarning } from 'lucide-react';

const PREVENTIONS = [
  { id: 1, text: 'اقرأ مكونات الطعام دائماً قبل الأكل.', icon: <Eye className="text-blue-500" /> },
  { id: 2, text: 'تجنب مشاركة طعامك أو شرب عبوات الآخرين.', icon: <HeartHandshake className="text-pink-500" /> },
  { id: 3, text: 'أخبر المدرسة والمعلمين عن نوع حساسيتك.', icon: <School className="text-orange-500" /> },
  { id: 4, text: 'احرص على غسل يديك جيداً قبل وبعد الأكل.', icon: <MessageCircleWarning className="text-green-500" /> },
];

export default function Prevention() {
  return (
    <section className="py-20 px-6 bg-slate-800 text-white rounded-[3rem] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-[100px] rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">طرق الوقاية</h2>
          <p className="text-slate-300">درهم وقاية خير من قنطار علاج! اتبع هذه النصائح لتبقى آمناً.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {PREVENTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="font-medium text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-danger">ماذا أفعل عند حدوث الحساسية؟</h2>
            <p className="text-slate-300">لا تخف! التصرف السريع هو الحل.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1 bg-red-500/10 border-2 border-red-500/20 p-8 rounded-3xl text-center">
              <div className="text-4xl mb-4 text-red-500">📢</div>
              <h3 className="text-xl font-bold mb-2">اطلب المساعدة فوراً</h3>
              <p className="text-slate-300">نادي المعلم أو أي شخص كبير بجانبك.</p>
            </div>
            <div className="flex-1 bg-yellow-500/10 border-2 border-yellow-500/20 p-8 rounded-3xl text-center">
              <div className="text-4xl mb-4 text-yellow-500">📞</div>
              <h3 className="text-xl font-bold mb-2">الاتصال بالطوارئ</h3>
              <p className="text-slate-300">يجب على الكبار الاتصال بالإسعاف إذا لزم الأمر.</p>
            </div>
            <div className="flex-1 bg-blue-500/10 border-2 border-blue-500/20 p-8 rounded-3xl text-center">
              <div className="text-4xl mb-4 text-blue-500">💊</div>
              <h3 className="text-xl font-bold mb-2">استخدم الدواء</h3>
              <p className="text-slate-300">إذا كان لديك حقنة طوارئ، استخدمها فوراً.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
