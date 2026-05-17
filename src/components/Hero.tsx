import { motion } from 'motion/react';
import { Apple, Milk, Fish, Wheat } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 px-6 py-16 md:py-24 rounded-b-[3rem]">
      <div className="absolute top-10 right-20 text-brand-primary opacity-20 animate-bounce">
        <Milk size={80} />
      </div>
      <div className="absolute bottom-10 left-20 text-brand-secondary opacity-20 animate-pulse">
        <Apple size={64} />
      </div>
      <div className="absolute top-1/2 left-10 text-brand-accent opacity-10 rotate-12">
        <Fish size={100} />
      </div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/20 text-brand-primary font-bold text-sm mb-4">
            دليلك الذكي للحياة الصحية
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight mb-6">
            صحتنا في <span className="text-brand-primary">غذائنا</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            مرحباً بك يا بطل! هل تساءلت يوماً لماذا قد يشعر البعض بالتعب بعد تناول طعام معين؟ 
            تعال معنا في رحلة سريعة لنكتشف سر "الحساسية الغذائية"!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#what-is" className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold shadow-lg shadow-brand-primary/30 hover:scale-105 transition-transform">
              ابدأ الرحلة
            </a>
            <a href="#game" className="px-8 py-4 bg-white text-brand-primary border-2 border-brand-primary/10 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              العب وتعلم
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
