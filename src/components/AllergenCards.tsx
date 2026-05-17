import { motion } from 'motion/react';
import { ALLERGENS } from '../constants';

export default function AllergenCards() {
  const allergensOnly = ALLERGENS.filter(a => a.isAllergen);

  return (
    <section className="py-20 px-6 bg-slate-100 rounded-[3rem]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">أشهر مسببات الحساسية</h2>
          <p className="text-slate-600">هذه هي الأطعمة التي تسبب الحساسية لمعظم الناس!</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {allergensOnly.map((allergen, index) => (
            <motion.div
              key={allergen.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-3xl shadow-md text-center border border-slate-100"
            >
              <div className="text-5xl mb-4">{allergen.icon}</div>
              <h3 className="font-bold text-slate-800">{allergen.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
