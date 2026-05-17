import { QuizQuestion, FoodItem, Fact, Symptom, AllergyDetail } from './types';

export const ALLERGENS: FoodItem[] = [
  { id: '1', name: 'الحليب', icon: '🥛', isAllergen: true, category: 'dairy' },
  { id: '2', name: 'البيض', icon: '🥚', isAllergen: true, category: 'other' },
  { id: '3', name: 'الفول السوداني', icon: '🥜', isAllergen: true, category: 'nuts' },
  { id: '4', name: 'المكسرات', icon: '🌰', isAllergen: true, category: 'nuts' },
  { id: '5', name: 'السمك', icon: '🐟', isAllergen: true, category: 'seafood' },
  { id: '6', name: 'القمح', icon: '🌾', isAllergen: true, category: 'grains' },
  { id: '7', name: 'التفاح', icon: '🍎', isAllergen: false, category: 'other' },
  { id: '8', name: 'الجزر', icon: '🥕', isAllergen: false, category: 'other' },
  { id: '9', name: 'الأرز', icon: '🍚', isAllergen: false, category: 'other' },
  { id: '10', name: 'الموز', icon: '🍌', isAllergen: false, category: 'other' },
];

export const SYMPTOMS: Symptom[] = [
  { id: 1, name: 'حكة في الجلد', description: 'شعور بالرغبة في حك الجلد أو ظهور بقع حمراء.', icon: '✋', color: 'bg-orange-100' },
  { id: 2, name: 'طفح جلدي', description: 'ظهور حبوب صغيرة أو احمرار واسع على الجسم.', icon: '🤒', color: 'bg-red-100' },
  { id: 3, name: 'صعوبة التنفس', description: 'شعور بضيق في الصدر أو صعوبة في أخذ النفس.', icon: '🫁', color: 'bg-blue-100' },
  { id: 4, name: 'آلام المعدة', description: 'مغص أو رغبة في التقيؤ بعد الأكل مباشرة.', icon: '🤢', color: 'bg-green-100' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'ما هي الحساسية الغذائية؟',
    options: [
      'أن تحب طعاماً معيناً جداً',
      'رد فعل دفاعي من الجسم ضد بروتين في الطعام',
      'ألم عادي في الأسنان',
      'عدم الرغبة في تناول الخضروات'
    ],
    correctAnswer: 1,
    explanation: 'تحدث الحساسية عندما يخطئ جهاز المناعة ويعتبر بروتين الطعام عدواً فيبدأ بالدفاع عن الجسم.'
  },
  {
    id: 2,
    question: 'أي من هذه الأطعمة يعتبر من مسببات الحساسية الشائعة؟',
    options: ['الماء', 'الجزر', 'الفول السوداني', 'الخيار'],
    correctAnswer: 2,
    explanation: 'الفول السوداني هو واحد من أشهر مسببات الحساسية لدى الأطفال.'
  },
  {
    id: 3,
    question: 'ماذا يجب أن تفعل إذا شعرت بضيق تنفس بعد الأكل؟',
    options: [
      'تذهب للنوم',
      'تخبر شخصاً بالغاً فوراً',
      'تشرب الكثير من العصير',
      'تنتظر حتى يختفي الألم'
    ],
    correctAnswer: 1,
    explanation: 'ضيق التنفس علامة خطيرة ويجب طلب المساعدة فوراً من الأهل أو المعلم.'
  }
];

export const ALLERGY_DETAILS: AllergyDetail[] = [
  {
    id: 'milk',
    name: 'حساسية الحليب',
    icon: '🥛',
    description: 'رد فعل تجاه بروتينات الحليب. تختلف عن عدم تحمل اللاكتوز.',
    hiddenSources: ['البسكويت', 'الشوكولاتة وجبن البيتزا', 'الحلويات'],
    alternatives: ['حليب اللوز', 'حليب الأرز', 'حليب الشوفان'],
    symptoms: ['مغص', 'طفح جلدي', 'قيء'],
    isCommon: true
  },
  {
    id: 'egg',
    name: 'حساسية البيض',
    icon: '🥚',
    description: 'شائعة جداً عند الأطفال وتتحسن غالباً مع التقدم في السن.',
    hiddenSources: ['المعكرونة', 'المايونيز', 'المخبوزات اللامعة'],
    alternatives: ['بذور الكتان المطحونة', 'هريس التفاح في الكيك'],
    symptoms: ['حكة حول الفم', 'آلام بطن'],
    isCommon: true
  },
  {
    id: 'peanut',
    name: 'حساسية الفول السوداني',
    icon: '🥜',
    description: 'من أخطر أنواع الحساسية وقد تسبب رد فعل شديد جداً.',
    hiddenSources: ['الصلصات الآسيوية', 'الحلويات المفتوحة', 'زيت الفول السوداني'],
    alternatives: ['زبدة عباد الشمس', 'زبدة الحمص'],
    symptoms: ['ضيق تنفس', 'تورم الوجه'],
    isCommon: true
  },
  {
    id: 'nuts',
    name: 'حساسية المكسرات',
    icon: '🌰',
    description: 'تشمل اللوز، الجوز، الكاجو، والفستق.',
    hiddenSources: ['الآيس كريم', 'ألواح الطاقة', 'الحبوب المقرمشة'],
    alternatives: ['البذور (مثل دوار الشمس)', 'الفواكه المجففة'],
    symptoms: ['سرعة ضربات القلب', 'إغماء'],
    isCommon: true
  },
  {
    id: 'fish',
    name: 'حساسية السمك',
    icon: '🐟',
    description: 'قد تظهر في أي عمر وغالباً ما تستمر مدى الحياة.',
    hiddenSources: ['الصلصات الجاهزة', 'السوشي', 'بعض زيوت الفيتامينات'],
    alternatives: ['اللحوم الحمراء', 'الدواجن', 'البقوليات للبروتين'],
    symptoms: ['صداع', 'عطس'],
    isCommon: true
  },
  {
    id: 'shrimp',
    name: 'حساسية المأكولات البحرية',
    icon: '🍤',
    description: 'تشمل الروبيان، المحار، والكابوريا.',
    hiddenSources: ['نكهات السمك الجاهزة', 'شوربة البحر'],
    alternatives: ['البروتينات النباتية'],
    symptoms: ['تورم الحلق', 'حكة'],
    isCommon: true
  },
  {
    id: 'wheat',
    name: 'حساسية القمح',
    icon: '🌾',
    description: 'جسمك يهاجم بروتينات القمح (تختلف عن مرض السيلياك).',
    hiddenSources: ['صلصة الصويا', 'اللحوم المصنعة'],
    alternatives: ['الأرز', 'الذرة', 'الكينوا'],
    symptoms: ['عسر هضم', 'أزمة تنفسية'],
    isCommon: true
  },
  {
    id: 'soy',
    name: 'حساسية الصويا',
    icon: '🫘',
    description: 'تدخل في الكثير من الأطعمة المصنعة والمعلبة.',
    hiddenSources: ['الزيوت النباتية', 'خبز الساندويتش'],
    alternatives: ['حليب جوز الهند', 'البازلاء'],
    symptoms: ['وخز في الفم'],
    isCommon: true
  },
  {
    id: 'strawberry',
    name: 'حساسية الفراولة',
    icon: '🍓',
    description: 'حساسية من بروتين يعطي الفراولة لونها الأحمر.',
    hiddenSources: ['العصائر المشكلة', 'مربى الفواكه'],
    alternatives: ['التوت الأزرق', 'العنب'],
    symptoms: ['حمى القش', 'حبوب حمراء'],
    isCommon: false
  },
  {
    id: 'chocolate',
    name: 'حساسية الشوكولاتة',
    icon: '🍫',
    description: 'غالباً ما تكون حساسية من الحليب أو المكسرات داخل الشوكولاتة.',
    hiddenSources: ['الحلويات الداكنة', 'الكاكاو'],
    alternatives: ['الخروب', 'الفواكه'],
    symptoms: ['صداع نصفي', 'اضطراب معدة'],
    isCommon: false
  },
  {
    id: 'honey',
    name: 'حساسية العسل',
    icon: '🍯',
    description: 'نادرة وتحدث غالباً بسبب حبوب اللقاح الموجودة في العسل.',
    hiddenSources: ['الشاي المعطر', 'الحلويات الشرقية'],
    alternatives: ['دبس التمر', 'شراب القيقب'],
    symptoms: ['سعال', 'عيون دامعة'],
    isCommon: false
  },
  {
    id: 'sesame',
    name: 'حساسية السمسم',
    icon: '🌱',
    description: 'أصبحت شائعة جداً وتوجد في المخابز والصلصات.',
    hiddenSources: ['الطحينة', 'الحمص الجاهز', 'خبز الهمبرغر'],
    alternatives: ['بذور اليقطين'],
    symptoms: ['ألم شديد في البطن'],
    isCommon: true
  },
  {
    id: 'preservatives',
    name: 'المواد الحافظة',
    icon: '🧃',
    description: 'حساسية من الألوان الصناعية والمواد المضافة.',
    hiddenSources: ['المشروبات الغازية', 'النقانق'],
    alternatives: ['العصائر الطبيعية', 'الأكل الطازج'],
    symptoms: ['فرط حركة', 'حكة'],
    isCommon: false
  }
];

export const QUICK_FACTS: Fact[] = [
  { id: 1, title: 'حقيقة مدهشة', content: 'جسمك يحاول حمايتك! الحساسية هي محاولة خاطئة من جهاز المناعة لحمايتك.', icon: '🛡️' },
  { id: 2, title: 'كن بطلاً', content: 'مساعدة زملائك المصابين بالحساسية بجعل بيئتكم خالية من مسبباتها يجعلك بطلاً حقيقياً.', icon: '🦸' },
  { id: 3, title: 'اقرأ بذكاء', content: 'قراءة الملصقات على عبوات الطعام هي أفضل طريقة للبقاء آمناً.', icon: '🔍' },
];
