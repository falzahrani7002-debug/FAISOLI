import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RatingSystem() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Load state if rated previously
  useEffect(() => {
    const hasRated = localStorage.getItem('app_rated');
    if (hasRated) {
      setSubmitted(true);
      const savedRating = localStorage.getItem('app_rating_val');
      if (savedRating) setRating(parseInt(savedRating, 10));
      
      const savedName = localStorage.getItem('app_rating_name');
      if (savedName) setName(savedName);

      const savedJob = localStorage.getItem('app_rating_job');
      if (savedJob) setJob(savedJob);

      const savedComment = localStorage.getItem('app_rating_comment');
      if (savedComment) setComment(savedComment);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    localStorage.setItem('app_rated', 'true');
    localStorage.setItem('app_rating_val', rating.toString());
    localStorage.setItem('app_rating_name', name || 'زائر كريم');
    localStorage.setItem('app_rating_job', job || 'مستمتع بالتعلم');
    if (comment) {
      localStorage.setItem('app_rating_comment', comment);
    } else {
      localStorage.removeItem('app_rating_comment');
    }
    
    setSubmitted(true);

    // Reward with confetti if high rating
    if (rating >= 4) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const getRatingMessage = () => {
    switch (rating) {
      case 5: return 'عظيم جداً! شكراً لك يا بطل! 🌟';
      case 4: return 'رائع جداً، سعيدون لأنك أحببت الموقع! 🎉';
      case 3: return 'شكراً لتقييمك، نسعى دائماً للأفضل! 👍';
      case 2: return 'شكراً لك، سنعمل على تحسين الموقع! 🔧';
      case 1: return 'نأسف لذلك، سنعمل جاهدين لننال إعجابك المرة القادمة! ❤️';
      default: return '';
    }
  };

  return (
    <section id="rating" className="py-16 px-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-brand-primary/5 rounded-full blur-xl" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-brand-secondary/5 rounded-full blur-xl" />

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="rating-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div>
                <span className="text-3xl">⭐</span>
                <h3 className="text-2xl font-extrabold text-slate-800 mt-2">ما هو تقييمك للموقع؟</h3>
                <p className="text-slate-500 text-sm mt-1">شاركونا آراءكم لنستمر بتطوير وتحديث الموقع بدعمكم المستمر!</p>
              </div>

              {/* Stars selection */}
              <div className="flex items-center justify-center gap-2 py-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 hover:scale-125 transition-transform duration-150 focus:outline-none"
                    id={`star-btn-${star}`}
                  >
                    <Star
                      size={40}
                      className={`transition-colors duration-150 ${
                        star <= (hoverRating || rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-slate-200'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-brand-primary font-bold text-lg"
                >
                  {getRatingMessage()}
                </motion.p>
              )}

              {/* Feedback form */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 mr-1">الاسم الكريم</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: فيصل الزهراني"
                      className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-brand-primary focus:bg-white outline-none transition-all text-slate-700 text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 mr-1">الوظيفة أو الصفة</label>
                    <input
                      type="text"
                      value={job}
                      onChange={(e) => setJob(e.target.value)}
                      placeholder="مثال: معلم، ولي أمر، بطل خارق..."
                      className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-brand-primary focus:bg-white outline-none transition-all text-slate-700 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 mr-1">رأيك اللطيف (اختياري)</label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="اكتب اقتراحاتك أو رأيك الطيب هنا..."
                    className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-brand-primary focus:bg-white outline-none transition-all text-slate-700 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={rating === 0}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                    rating > 0
                      ? 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-brand-primary/20'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                  id="submit-rating-btn"
                >
                  <Send size={18} />
                  <span>إرسال التقييم وحفظه</span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="thanks-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 space-y-6"
            >
              <div className="inline-flex p-4 bg-green-50 rounded-full text-green-500 mb-2">
                <CheckCircle2 size={40} className="animate-bounce" />
              </div>
              <h3 className="text-3xl font-black text-slate-800">شكراً جزيلاً لتقييمك!</h3>
              <p className="text-slate-600 max-w-md mx-auto -mt-2">
                سعيدون جداً بمشاركتك لنا رأيك القيّم لتطوير الموقع باستمرار. إليك بطاقتك التذكارية المحفوظة:
              </p>

              {/* Review Card Layout */}
              <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 max-w-md mx-auto text-right hover:border-brand-primary/20 transition-all shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary text-white flex items-center justify-center font-black text-lg shadow-sm">
                    {name ? name.charAt(0).toUpperCase() : '👤'}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base">{name || 'زائر كريم'}</h4>
                    <span className="text-xs text-slate-400 font-bold bg-slate-200/40 px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                      {job || 'محب للتعلم'}
                    </span>
                  </div>
                  <div className="mr-auto flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={`${
                          star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {comment && (
                  <p className="text-slate-600 text-sm leading-relaxed bg-white p-4 rounded-2xl border border-slate-100/80 italic">
                    " {comment} "
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    localStorage.removeItem('app_rated');
                    setSubmitted(false);
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-brand-primary underline transition-all"
                >
                  تعديل التقييم والبيانات
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
