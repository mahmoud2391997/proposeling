import { Article, Category, Course, Counselor, Book } from './types';

export const categoriesData: Category[] = [
  {
    id: 'hypertension-cardio',
    name: 'Cardiovascular Health',
    nameBn: 'হৃতযন্ত্র ও রক্তচাপ',
    count: 24,
    countBn: '২৪',
    icon: 'HeartPulse',
    color: 'emerald',
    description: 'Guidelines on hypertension, cholesterol management, and safe cardiac medicine usage.',
    descriptionBn: 'উচ্চ রক্তচাপ, কোলেস্টেরল নিয়ন্ত্রণ এবং হৃদরোগের ওষুধের নিরাপদ ব্যবহার নির্দেশিকা।'
  },
  {
    id: 'diabetes-endocrine',
    name: 'Diabetes & Diet Care',
    nameBn: 'ডায়াবেটিস ও নিয়ন্ত্রিত খাদ্য',
    count: 18,
    countBn: '১৮',
    icon: 'Activity',
    color: 'teal',
    description: 'Insulin safety, oral hypoglycemics, low GI Bengali diet recommendations, and metabolic regulation guidance.',
    descriptionBn: 'ইনসুলিনের নিরাপত্তা, মুখে খাওয়ার ডায়াবেটিসের ওষুধ, লো-জিআই বাঙালি খাবার ও মেটাবলিক নিয়মের নির্দেশিকা।'
  },
  {
    id: 'otc-safety',
    name: 'OTC & General Wellness',
    nameBn: 'সাধারণ ব্যাধি ও ওটিসি ওষুধ',
    count: 35,
    countBn: '৩৫',
    icon: 'Pill',
    color: 'sky',
    description: 'Safe usage of non-prescription pain relievers, cold medicines, zinc supplements, and digestive aids.',
    descriptionBn: 'প্রেসক্রিপশন ছাড়া পাওয়া ব্যথানাশক, ঠাণ্ডা-কাশির ওষুধ, জিংক সাপ্লিমেন্ট ও হজমের ওষুধের সঠিক ব্যবহার।'
  },
  {
    id: 'pediatrics-child',
    name: 'Child Medicine Safety',
    nameBn: 'শিশু স্বাস্থ্য ও ওষুধ',
    count: 12,
    countBn: '১২',
    icon: 'Baby',
    color: 'indigo',
    description: 'Pediatric dosing, measles precautions, child syrup measurements, and critical alert indexes for childrens health.',
    descriptionBn: 'শিশুদের ওষুধের মাত্রা, হামের সুনির্দিষ্ট সতর্কতা, সিরাপ মাপার সঠিক নিয়ম এবং শিশু স্বাস্থ্যের অতিজরুরি সতর্কতা।'
  },
  {
    id: 'antibiotic-awareness',
    name: 'Antibiotic Stewardship',
    nameBn: 'অ্যান্টিবায়োটিকের সঠিক ব্যবহার',
    count: 15,
    countBn: '১৫',
    icon: 'ShieldAlert',
    color: 'rose',
    description: 'Preventing antibiotic resistance, finishing prescribed regimes, and medication discipline.',
    descriptionBn: 'অ্যান্টিবায়োটিক রেজিস্ট্যান্স প্রতিরোধ, ওষুধের কোর্স সম্পন্ন করা এবং শৃঙ্খলা মেনে চলা।'
  }
];

export const articlesData: Article[] = [
  {
    id: 'diabetes-diet',
    title: 'Is Diabetes All About Closing All Food Options? Learn the Correct Diet Chart',
    titleBn: 'ডায়াবেটিস মানেই কি সব খাবার বন্ধ? জেনে নিন সঠিক রিয়েলিস্টিক দেশি খাদ্যতালিকা',
    slug: 'diabetes-bengali-diet-guide',
    category: 'Diabetes & Diet Care',
    categoryBn: 'ডায়াবেটিস ও নিয়ন্ত্রিত খাদ্য',
    readTime: '5 min read',
    readTimeBn: '৫ মিনিট পাঠ',
    date: 'May 19, 2026',
    dateBn: '১৯ মে, ২০২৬',
    author: 'Dr. Rafiqul Islam, Pharm.D',
    authorBn: 'ডা. রফিকুল ইসলাম, ফার্ম.ডি',
    summary: 'A complete medical analysis of the popular diabetic diet myth in Bangladesh. Understand low glycemic index local foods, rice control, and safe carbohydrate distribution.',
    summaryBn: 'ডায়াবেটিস আক্রান্ত রোগীদের কি সব মিষ্টি বা ভাত খাওয়া নিষেধ? কীভাবে প্রতিদিনের দেশীয় খাবার পরিমাপ করে রক্তে গ্লুকোজ লেভেল নিয়ন্ত্রণে রাখা যায়, তা নিয়ে সঠিক ও বিজ্ঞানভিত্তিক আলোচনা।',
    disclaimer: 'Disclaimer: This carbohydrate regulation index serves for health literacy only. Consult your clinical endocrinologist to format individual caloric budgets.',
    disclaimerBn: 'সতর্কতা: এই শর্করা ও ক্যালরি নিয়ন্ত্রণ নির্দেশিকা কেবল সচেতনতা বৃদ্ধির উদ্দেশ্যে তৈরি। ব্যক্তিগত ইনসুলিন মাত্রা ও ক্যালরি চার্ট তৈরিতে আপনার এন্ডোক্রাইনোলজিস্টের পরামর্শ নিন।',
    tags: ['Diabetes', 'Diabetic Diet', 'Low GI Foods', 'Organic Health'],
    tagsBn: ['ডায়াবেটিস', 'ডায়াবেটিস ডায়েট', 'লো-জিআই খাবার', 'স্বাস্থ্য সচেতনতা'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    content: [
      '### The "Forbidden Food" Myth\n\nWhen diagnosed with Type 2 Diabetes in Bangladesh, the immediate traditional reaction of family members is to stop all normal foods: rice is completely locked away, sweet fruits are blacklisted, and the patient feels extremely restricted. Scientifically, this extreme caloric starvation often leads to sudden hypoglycemia, which is far more dangerous than hyperglycemia.',
      '### Understanding Glycemic Index (GI) and Local Food Carbohydrates\n\n*   **High GI Foods**: Standard white polished rice, flour-based parathas, and refined sugar. They cause direct instant spikes in blood sugar.\n*   **Medium to Low GI Alternatives**: Red rice (Lal chal), whole wheat handmade roti, oats, raw spinach, and leafy vegetables.\n*   **The Rice Substitute Strategy**: You don\'t need to abandon rice entirely. Portion control is what matters. Fill 50% of your plate with green vegetables, 25% with protein/fish, and only 25% with red unrefined rice.',
      '### Safe Fruit Consumption Guide\n\nMany patients avoid delicious local seasonal fruits like mangoes, jackfruits, or litchis out of extreme fear. Yes, they contain natural fructose, but you can consume them in limited portions as mid-day snacks. Avoid fruit juices because juicing removes the essential dietary fibers, which accelerates sugar absorption. Eat the whole fruit instead!',
      '### Practical Dietary Rules for Bangladeshis\n\n1.  **Ditch Commercial Diabetic Foods**: Most packaged "Diabetic Biscuits" contain refined flour and palm oil, which secretly spike sugar levels.\n2.  **Consistency in Timing**: Take your meals and snacks at the exact same hour daily to stabilize glucose fluctuation with your medication.\n3.  **Active Muscle Movement**: Even a gentle 20-30 minutes walk immediately after principal meals makes muscle cells absorb surplus blood glucose without relying on auxiliary insulin.'
    ],
    contentBn: [
      '### "সব খাবার বন্ধ" প্রথার ক্ষতিকর ভুল ধারণা\n\nবাংলাদেশে কারো ডায়াবেটিস ধরা পড়লেই সবার প্রথম যে সিদ্ধান্তটি নেওয়া হয়, তা হলো রোগীর নিয়মিত সব স্বাভাবিক খাবার বন্ধ করে দেওয়া। ভাত সম্পূর্ণ লক করে লাল আটার রুটি দিনরাত শুরু হয়, মিষ্টি ফল খাওয়া একদম নিষিদ্ধ করা হয়। বিজ্ঞানসম্মতভাবে এই চরম খাদ্য অবহেলা অনেক সময় রক্তে গ্লুকোজ হঠাত মারাত্মক কমিয়ে দেয় (Hypoglycemia), যা সুগার বৃদ্ধির চেয়েও রোগীর তাৎক্ষণিক জীবনের জন্য মারাত্মক বিপজ্জনক হতে পারে।',
      '### গ্লাইসেমিক ইনডেক্স (GI) ও আমাদের দেশীয় খাবার\n\n*   **উচ্চ গ্লাইসেমিক ইনডেক্স (হাই জিআই) খাবার**: চকচকে সাদা চালের ভাত, ময়দার তৈরি পরোটা এবং রিফাইনড চিনি। এগুলো খাওয়ার ১৫ মিনিটের মধ্যে রক্তে গ্লুকোজ লেভেল এক লাফে বাড়িয়ে দেয়।\n*   **নিচু ও মাঝারি জিআই বিকল্প খাবার**: লাল চালের ভাত, লাল আটার হাতে তৈরি রুটি, ওটস, সবুজ শাকসবজি এবং ডাল।\n*   **প্লেট মেথড ফরমূলা**: ভাত একবারে বন্ধ করার কোনো প্রয়োজন নেই। আপনার দুপুরের খাওয়ার প্লেটকে ৪ ভাগে ভাগ করুন। অর্ধেক প্লেট যেন পূর্ণ থাকে সবুজ শাকসবজি ও সালাদ দিয়ে, এক-চতুর্থাংশ থাকবে প্রোটিন/মাছ বা ডাল এবং বাকি এক-চতুর্থাংশ থাকবে লাল চালের ভাত।',
      '### দেশীয় ফল খাওয়ার বৈজ্ঞানিক নিয়ম\n\nআম, কাঁঠাল বা লিচুর মৌসুমে অনেকেই তীব্র ভয়ে সব ফল খাওয়া বন্ধ রাখেন। অথচ সীমিত মাত্রায় নির্দিষ্ট সময়ে ফল আমাদের জন্য অত্যন্ত প্রয়োজনীয় ভিটামিন ও অ্যান্টিঅক্সিডেন্ট যোগায়। তবে কখনো ফলের রস বা জুস করে খাবেন না। জুস করলে ফলের প্রয়োজনীয় ডায়েটারি ফাইবার বা আঁশ নষ্ট হয়ে যায়, যা সরাসরি সুগার স্পাইক ঘটায়। সবসময় গোটা ফল চিবিয়ে খান।',
      '### বাংলাদেশি রোগীদের জন্য ৩টি সোনালী নিয়ম\n\n১.  **কমার্শিয়াল ডায়াবেটিক বিস্কুট বর্জন**: বাজারজাত ডায়াবেটিক বিস্কুটে ক্ষতিকর ডালডা ও ময়দা প্রচুর পরিমাণে থাকে যা অজান্তে সুগার লেভেল বাড়ায়।\n২.  **খাবার সেবনের সুনির্দিষ্ট নিয়মিত সময়**: প্রতিদিন নির্দিষ্ট সময়ে খাবার ও মধ্যাহ্ন নাশতার অভ্যাস গড়ুন, যাতে রক্তের সুগার মাত্রা ওষুধ ও ইনসুলিনের সাথে চমৎকার ভারসাম্য বজায় রাখতে পারে।\n৩.  **খাবারের পর হালকা হাঁটা**: দুপুরের বা রাতের প্রধান খাবার গ্রহণের পর অন্তত ১৫-২০ মিনিট ধীরে হাঁটাহাঁটি করুন। এতে পেশী কোষগুলো শরীরের বাড়তি গ্লুকোজ ইনসুলিনের সাহায্য ছাড়াই কাজে লাগাতে পারে।'
    ]
  },
  {
    id: 'hypertension-guide',
    title: 'The Role of Calcium Channel Blockers in Hypertension Management',
    titleBn: 'হাইপারটেনশন (উচ্চ রক্তচাপ): কারণ, লক্ষণ, প্রতিরোধ ও সঠিক ওষুধ নির্দেশিকা',
    slug: 'hypertension-and-ccb-guide',
    category: 'Cardiovascular Health',
    categoryBn: 'হৃতযন্ত্র ও রক্তচাপ',
    readTime: '6 min read',
    readTimeBn: '৬ মিনিট পাঠ',
    date: 'May 18, 2026',
    dateBn: '১৮ মে, ২০২৬',
    author: 'Prof. Subrata Sen, FACC',
    authorBn: 'অধ্যাপক সুব্রত সেন, এফএসিসি',
    summary: 'A comprehensive medical guide explaining CCBs like Amlodipine, when to take them, their biological mechanism, common drug-food interactions, and sodium reduction warnings.',
    summaryBn: 'উচ্চ রক্তচাপ নিয়ন্ত্রণে অ্যামলোডিপিনের মতো ক্যালসিয়াম চ্যানেল ব্লকারসমূহের মেডিকেল কার্যকারিতা, কখন সেবন করবেন, লবণ নিয়ন্ত্রণের উপায় এবং বাতাবি লেবু ও ব্যথানাশকের মারাত্মক ড্রাগ মিথস্ক্রিয়া নিয়ে বিস্তারিত আলোচনা।',
    disclaimer: 'Disclaimer: This article is for educational purposes only. Do not change clinical dosages without consulting your cardiologist.',
    disclaimerBn: 'সতর্কতা: এই নিবন্ধটি শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে তৈরি। আপনার কার্ডিওলজিস্ট বা রেজিস্টার্ড চিকিৎসকের পরামর্শ ছাড়া ও রক্তচাপের ওষুধ পরিবর্তন বা ড্রপ আউট করবেন না।',
    tags: ['Amlodipine', 'Hypertension', 'Cardio', 'Drug Guide'],
    tagsBn: ['অ্যামলোডিপিন', 'উচ্চ রক্তচাপ', 'কার্ডিও', 'মেডিসিন গাইড'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    content: [
      '### What is Hypertension & How are CCBs Used?\n\nHypertension (high blood pressure) is often called the silent killer because it can show zero overt symptoms until a catastrophic clinical stroke or coronary event occurs. Calcium channel blockers (CCBs) are a primary line of defense. Common examples include **Amlodipine**, **Nifedipine**, and **Lercanidipine**.',
      '### The Biological Mechanism\n\nOur arterial smooth muscles and cardiac walls rely on calcium ions to initiate contraction. CCBs act as molecular gatekeepers, blocking calcium entry. When calcium influx decreases, vascular muscles relax deeply. This produces **vasodilation** (widening of arteries), which instantly lowers systemic vascular resistance and reduces cardiac workload.',
      '### Optimizing Administration & Timing\n\n*   **Strict Temporal Discipline**: Take your blood pressure medication at the exact same hour every single day to maintain steady pharmaceutical concentration in your cardiovascular system.\n*   **Dietary Grapefruit Warning**: Avoid consuming **grapefruit (Batabi Lebu)** or its juice entirely. Grapefruit contains furanocoumarins that permanently deactivate the intestinal enzyme CYP3A4. This blocks the normal metabolism of CCBs, causing dangerous accumulation in the blood and sudden lethal hypotension.',
      '### Essential Local Sodium & Food Adjustments\n\nReducing refined salt intake is mandatory. For Bangladeshis, salt added during raw rice consumption or inside cooked curry should be minimized. Excess sodium draws fluid into the circulatory pathways, directly escalating inner arterial pressure.'
    ],
    contentBn: [
      '### উচ্চ রক্তচাপ এবং ক্যালসিয়াম চ্যানেল ব্লকার (CCBs) কী?\n\nউচ্চ রক্তচাপ বা হাইপারটেনশনকে "নীরব ঘাতক" বলা হয় কারণ স্ট্রোক বা হার্ট অ্যাটাকের মতো মারাত্মক অঘটন ঘটার আগে শরীরে কোনো স্পষ্ট লক্ষণ প্রকাশ পায় না। এই দীর্ঘমেয়াদী রোগ নিয়ন্ত্রণে প্রথম সারির ওষুধ হলো ক্যালসিয়াম চ্যানেল ব্লকার (CCB)। আমাদের দেশে অত্যন্ত বহুল ব্যবহৃত CCB-সমূহ হলো **অ্যামলোডিপিন (Amlodipine)**, **নিফেডিপিন (Nifedipine)** এবং **লারকানিডিপিন (Lercanidipine)**।',
      '### এগুলো যেভাবে আমাদের হার্টকে সুরক্ষিত রাখে\n\nআমাদের রক্তনালীর দেয়াল এবং হার্টের চারপাশের পেশী সংকুচিত হওয়ার জন্য রক্ত থেকে ক্যালসিয়াম আয়নের ভেতরে প্রবেশের প্রয়োজন হয়। CCB গ্রুপের ওষুধগুলো ঐ ক্যালসিয়াম প্রবেশপথে এক প্রকার দারোয়ান স্বরূপ বসে যায়। যখন ক্যালসিয়ামের প্রবেশ বন্ধ হয়, তখন রক্তনালীগুলো শিথিল ও প্রসারিত হয়। এর ফলে রক্ত সঞ্চালনে হার্টকে কম চাপ প্রয়োগ করতে হয় এবং রক্তচাপ স্বাভাবিক মাত্রায় নেমে আসে।',
      '### ওষুধ গ্রহণের সময় নির্ধারণ ও গুরুত্বপূর্ণ বাতাবি লেবুর সতর্কতা\n\n*   **অভিন্ন সময়সূচী মেনে চলা**: রক্তে ওষুধের সঠিক মাত্রা ২৪ ঘণ্টা বজায় রাখতে প্রতিদিন **ঠিক একই সময়ে** ওষুধটি সেবন করবেন।\n*   **বাতাবি লেবু বা জাম্বুরা (Grapefruit) পরিহার**: রক্তচাপের ওষুধ চলাকালে বাতাবি লেবু বা জাম্বুরার রস সম্পূর্ণ বর্জন করতে হবে। বাতাবি লেবুতে থাকা বিশেষ উপাদান আমাদের অন্ত্রে থাকা সেই এনজাইমকে স্থায়ীভাবে নষ্ট করে দেয় যা রক্তচাপের ওষুধকে পরিপাক করে নষ্ট করে। যার ফলে ওষুধ রক্তে অতিমাত্রায় জমে সুগার ও প্রেসার বিপজ্জনকভাবে নামিয়ে দেয় এবং মারাত্মক মাথা ঘোরার সৃষ্টি করে।',
      '### বাংলাদেশি রোগীদের জন্য অতিরিক্ত লবণের সতর্কতা\n\nকাঁচা লবণ বা খাবারে বাড়তি লবণ খাওয়া বন্ধ রাখা প্রতিটি হাইপারটেনশন রোগীর জন্য আবশ্যিক। অতিরিক্ত সোডিয়াম শরীরের রক্তনালীতে পানির পরিমাণ বাড়িয়ে দেয়, যা রক্তচাপ ওষুধের গতিকে স্লথ করে কার্যকারিতা ব্যাহত করায়।'
    ]
  },
  {
    id: 'child-measles',
    title: 'Rising Concern of Measles in Children: Crucial Guidance for Parents',
    titleBn: 'শিশুদের মধ্যে আমাদের দেশে হাম নিয়ে বাড়ছে উদ্বেগ: অভিভাবকদের এখন কী করণীয়?',
    slug: 'measles-awareness-and-pediatric-care',
    category: 'Child Medicine Safety',
    categoryBn: 'শিশু স্বাস্থ্য ও ওষুধ',
    readTime: '5 min read',
    readTimeBn: '৫ মিনিট পাঠ',
    date: 'May 14, 2026',
    dateBn: '১৪ মে, ২০২৬',
    author: 'Dr. Tasnim Ara',
    authorBn: 'ডা. তাসনিম আরা',
    summary: 'An educational epidemic analysis of measles (Ham) in local children. Learn critical immunization schedules, fever reduction limits, and safe quarantine protocols.',
    summaryBn: 'শিশুদের মারাত্মক সংক্রামক ব্যাধি হাম (Measles) বা স্থানীয়ভাবে প্রচলিত "হাম জ্বর" নিয়ে বাড়ছে শঙ্কা। কখন ইপিআই টিকা দেবেন, জ্বর কমানোর ভুল ওটিসি ওষুধের তীব্র সাইড ইফেক্ট ও পুষ্টি নিশ্চিত করার ঘরোয়া নিয়ম।',
    disclaimer: 'Disclaimer: Measles can trigger severe pneumonia or encephalitis. Never use Aspirin to control pediatric fever due to Reye\'s Syndrome risk.',
    disclaimerBn: 'সতর্কতা: হাম থেকে শিশুদের মারাত্মক নিউমোনিয়া বা তীব্র কানের সমস্যা হতে পারে। শিশুর জ্বর কমাতে বা হামের অস্বস্তিতে কখনো অ্যাসপিরিন (Aspirin) বা চিকিৎসকের তালিকা বহির্ভূত কড়া ব্যথানাশক দেবেন না।',
    tags: ['Measles', 'EPI Immunization', 'Pediatric Care', 'Fever Safety'],
    tagsBn: ['হাম রোগ', 'ইপিআই ভ্যাকসিন', 'শিশু চিকিৎসা', 'জ্বরের সতর্কতা'],
    image: 'https://images.unsplash.com/photo-1502740479091-6398b19d99f4?q=80&w=800&auto=format&fit=crop',
    content: [
      '### Understanding Measles (Ham) Danger\n\nMeasles is a highly contagious viral infection that spreads via airborne droplets. In Bangladesh, parents sometimes hold superstitious beliefs, calling it a "nature curse" and avoiding normal hygienic bathing or proper food. Clinically, this catastrophic isolation leads to severe fluid/electrolyte loss and subsequent secondary bacterial pneumonia.',
      '### Key Symptoms of Pediatric Measles\n\n*   **The Prodromal Phase**: Extremely high fever, dry hacking cough, runny nose, and red watery eyes.\n*   **Koplik Spots**: Small red spots with bluish-white centers inside the inner lining of the mouth (diagnostic sign of measles).\n*   **The Classic Measles Rash**: Flat red spots erupting on the forehead and face, slowly spreading downwards to neck, hands, and feet.',
      '### Safe Fever Dosing & Avoidance of Dangerous OTC Medicines\n\nWhen a child has measles and high fever, never give them self-prescribed medications besides Paracetamol Syrup. Children below 16 must **absolutely avoid Aspirin** due to the catastrophic risk of Reye\'s Syndrome, a rare but highly lethal liver and brain systemic decay. For precise dose measurements, always consult our Pediatric Safety calculator or weight-based guidelines.',
      '### Proactive Quarantine and Nutrition\n\nMaintain absolute isolated quarters for 5 days after rash onset. Ensure abundant Vitamin A intake, as measles rapidly depletes retinol reserves. Ask your healthcare facility for supplementary pediatric Vitamin A capsules, which drop measles mortality rates by 50%.'
    ],
    contentBn: [
      '### শিশুদের হাম বা "হাম জ্বর" এর আধুনিক প্রকৃত চিকিৎসা\n\nহাম বা আমাদের দেশে সচরাচর পরিচিত "হাম জ্বর" একটি অত্যন্ত সংক্রামক বায়ুবাহিত ভাইরাস দ্বারা ঘটে থাকে। প্রাচীন ও প্রচলিত ভুল সংস্কারের কারণে অনেক পরিবারে এই রোগে আক্রান্ত শিশুকে ঘর অন্ধকার করে বাতাস বন্ধ রাখা হয়, গোসল করতে দেওয়া হয় না, এমনকি স্বাভাবিক দুধ বা পুষ্টিকর খাবার বন্ধ রাখা হয়। এই অযাচিত খাদ্য অবহেলা শিশুর শরীরকে মারাত্মক পুষ্টিহীন ও পানিশূন্য করে ফেলে যা নিউমোনিয়া তৈরিতে সহায়ক হয়।',
      '### শিশুর হাম জ্বরের প্রাথমিক লক্ষণ ও শনাক্ত করার উপায়\n\n*   **প্রথম ৩-৪ দিন**: তীব্র জ্বর, অনবরত শুকনো কাশি, সর্দি লেগে থাকা ও চোখ লাল হয়ে অনবরত পানি পরা।\n*   **কপ্লিক স্পট**: শিশুর গালের ভেতরের নরম স্তরে লবণের দানার মতো সাদাটে দাগ বা ফুসকুড়ি দেখা দেওয়া।\n*   **টাইপিক্যাল হামের র‍্যাশ**: কানের পিছন থেকে লাল রঙের সূক্ষ্ম র‍্যাশ বের হয়ে ধীরে ধীরে কপাল, মুখমণ্ডল এবং ৪-৫ দিনে হাত ও সারা শরীরে ছড়িয়ে পড়ে।',
      '### জ্বরের সঠিক ওষুধ এবং মারাত্মক অ্যাসপিরিনের ক্ষতিকর সতর্কতা\n\nশিশুর হাম জ্বরের অস্বস্তি বা অতিরিক্ত তাপমাত্রা কমানোর জন্য কখনো চিকিৎসকের পরামর্শ ছাড়া ওটিসি ওষুধ সেবন করাবেন না। ১৬ বছরের নিচের কোনো শিশুর জন্যই হামে বা অন্য কোনো ভাইরাল জ্বরে **অ্যাসপিরিন (Aspirin) সম্পূর্ণ নিষিদ্ধ**। অ্যাসপিরিন অনবধানবশত সেবনে শিশুর লিভার ও মস্তিষ্ক চিরতরে নষ্ট হয়ে যাওয়ার মতো মারাত্মক রোগ রে সিন্ড্রোম (Reye\'s Syndrome) দেখা দিতে পারে। শিশুর দেহের সঠিক ওজন মেপে প্যারাসিটামলের সিরাপ ড্রপ খাওয়ান।',
      '### আইসোলেশন ও অতিপ্রয়োজনীয় ভিটামিন-এ এর ব্যবহার\n\nর‍্যাশ বের হওয়ার পর অন্তত ৫ দিন পর্যন্ত শিশুকে অন্য সুস্থ শিশুদের থেকে পৃথক রাখতে হবে। হামের ভাইরাসের কারণে শিশুর শরীরের অতিপ্রয়োজনীয় ভিটামিন-এ অত্যন্ত দ্রত নিঃশেষ হয়ে যায় যা চোখের অন্ধত্ব ও মারাত্মক ফুসফুসের ঝুঁকি বাড়ায়। তাই হামের ইতিহাস জানার সাথে সাথে সরকারি টিকা কেন্দ্র বা চিকিৎসকের পরামর্শে ডাবল ডোজে ক্যাপিউল আকারের ভিটামিন-এ খাওয়ানো মৃত্যুঝুঁকি ৫০% কমিয়ে দেয়।'
    ]
  },
  {
    id: 'zinc-height',
    title: 'Does Zinc Sulfate Really Make Kids Grow Tall Faster? Decode the Supplement Myth',
    titleBn: 'জিংক খেলে কি সত্যিই খুব দ্রুত শিশুর উচ্চতা বাড়ে? জেনে নিন জিংকের আসল ভূমিকা',
    slug: 'zinc-supplementation-and-pediatric-growth',
    category: 'OTC & General Wellness',
    categoryBn: 'সাধারণ ব্যাধি ও ওটিসি ওষুধ',
    readTime: '4 min read',
    readTimeBn: '৪ মিনিট পাঠ',
    date: 'May 10, 2026',
    dateBn: '১০ মে, ২০২৬',
    author: 'Dr. Rafiqul Islam, Pharm.D',
    authorBn: 'ডা. রফিকুল ইসলাম, ফার্ম.ডি',
    summary: 'A detailed biochemical analysis of the trending parent zinc craze in Bangladesh. Understand cellular growth, immune optimization, and why excessive dosing triggers toxic metallic iron deficiencies.',
    summaryBn: 'বাংলাদেশি অভিভাবকদের মাঝে শিশুদের অতিরিক্ত জিংক সিরাপ খাওয়ানোর ঝোঁক ইদানীং ব্যাপক রূপ নিয়েছে। সত্যিই কি জিংক খাওয়ালেই শিশু রাতারাতি লম্বা হবে? শিশুর হাড় বৃদ্ধি, ইমিউনিটি উন্নয়ন ও অতিরিক্ত জিংকের ফলে হওয়া রক্তশূন্যতা নিয়ে সঠিক আলোচনা।',
    disclaimer: 'Disclaimer: Chronic overdosing of zinc sulfate can lead to cellular copper depletion and microcytic anemia.',
    disclaimerBn: 'সতর্কতা: চিকিৎসকের পরামর্শ ব্যতিরেকে কন্টিনিউয়াস জিংক সিরাপ খাওয়ালে শিশুর শরীরে তামা (Copper) শোষণ স্থায়ীভাবে বন্ধ হয়ে মারাত্মক রক্তশূন্যতা ও হজম বিভ্রাট দেখা দেয়।',
    tags: ['Zinc Sulfate', 'Pediatric Growth', 'Supplements', 'Iron Anemia'],
    tagsBn: ['জিংক সালফেট', 'শিশুর পুষ্টি', 'সাপ্লিমেন্ট', 'রক্তশূন্যতা'],
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
    content: [
      '### The "Height Maker" Internet Sensation\n\nLately, on social media in Bangladesh, countless blogs are claiming that Zinc Sulfate syrup is a magical medicine to double your child\'s physical growth and height. Anxious parents are immediately buying these syrups without prescriptions, feeding them daily to kids as a long-term habit. Is this practice healthy?',
      '### The Reality of Zinc in Pediatric Growth\n\nZinc is a critical micronutrient required for over 300 metabolic enzyme systems in the human body. It indeed synthesizes proteins, aids DNA structure, and drives bone cell multiplication. However, zinc is only a **cofactor** for natural growth. It cannot override your child\'s genetic DNA code or natural growth plates. Once the growth plates close, no amount of zinc will alter adult height.',
      '### Zinc During Diarrhea: The Most Vital Usage\n\n*   **The Clinical Standard**: While not a height maker, zinc is a life-saver during acute diarrhea. Giving children 20mg zinc daily for 10-14 days reduces the duration and recurrence of severe pediatric dehydration.\n*   **Why It Works**: Zinc rapidly repairs damaged intestinal mucosal linings, preventing dangerous continuous fluid drainage.'
    ],
    contentBn: [
      '### ইন্টারনেটে জিংক নিয়ে ভুল ভাইরাল হিড়িক\n\nইদানীং বাংলাদেশের ফেসবুক ও টিকটকে বেশ কিছু ব্লগে ব্যাপকভাবে প্রচারণা চালানো হচ্ছে যে জিংক সালফেট সিরাপ খাওয়ালেই শিশুর উচ্চতা ম্যাজিকের মতো হুড়হুড় করে বেড়ে যাবে। এই অসত্য তথ্যে প্রলুব্ধ হয়ে হাজার হাজার অভিভাবক কোনো প্রকার কনসাল্টেশন ছাড়াই নিয়মিত জিংক সিরাপ কিনে বোতলের পর বোতল খাইয়ে যাচ্ছেন। এটি শিশুর শরীরের জন্য মারাত্মক সংকট ডেকে আনতে পারে।',
      '### শিশুর শারীরিক বৃদ্ধিতে জিংকের আসল বৈজ্ঞানিক ভূমিকা\n\nজিংক মেটাবলিজম ও শিশুর রোগ প্রতিরোধ ক্ষমতার ৩০০টি এনজাইমেটিক বিক্রিয়ায় সহায়ক ক্ষুদ্রাতিক্ষুদ্র খনিজ। এটি কোষ বিভাজন, প্রোটিন তৈরি ও শিশুর খাদ্য চাহিদা স্বাভাবিক রাখতে কাজ করে সত্যি, তবে এটি কোনো হরমন নয়। শিশুর উচ্চতা মূলত তার বাবা-মায়ের ডিএনএ ও বংশানুক্রমিক জিনের ওপর ৯০% নির্ভর করে। জিংক ঘাটতি থাকলে কেবল হজমে গোলমাল হতে পারে, অতিরিক্ত জিংক খাওয়ালেই শিশু জেনেটিক সীমার অতিরিক্ত দৈর্ঘ্য কখনো পাবে না।',
      '### ডায়রিয়ায় জিংক: একটি অত্যন্ত জীবনরক্ষাকারী ব্যবহার\n\n*   **ক্লিনিক্যাল গুরুত্ব**: উচ্চতা বৃদ্ধি নয়, জিংক সবচেয়ে বড় ভূমিকা পালন করে ডায়রিয়া নিরাময়ে। বিশ্ব স্বাস্থ্য সংস্থার (WHO) মতে ডায়রিয়া আক্রান্ত শিশুকে দৈনিক ২০ মিলিগ্রাম করে একটানা ১০-১৪ দিন জিংক সিরাপ খাওয়ালে তার পাকস্থলীর ক্ষত নিরাময় হয় ও বার বার ডায়রিয়ার প্রবণতা সম্পূর্ণ কমে আসে।',
      '### অতিরিক্ত জিংক ব্যবহারের নীরব ক্ষতি ও রক্তশূন্যতা\n\nনিয়মিত ৩ মাসের বেশি চিকিৎসকের অগোচরে জিংক খাওয়ালে শরীরে তামা বা কপার (Copper) শোষিত হতে বাধা পায়। কপার না থাকলে হাড়ের লাল মজ্জা থেকে লোহিত রক্তকণিকা ও হিমোগ্লোবিন তৈরি ব্যাহত হয়, যার দরুন শিশু চরম আয়রন ঘাটতিজনিত রক্তশূন্যতায় ভোগে।'
    ]
  }
];

export const coursesData: Course[] = [
  {
    id: 'antibiotics-safety',
    title: 'Antibiotic Use & Precautions',
    titleBn: 'অ্যান্টিবায়োটিক ব্যবহার ও সতর্কতা',
    instructor: 'MD. NAYON KARIGOR',
    instructorBn: 'MD. NAYON KARIGOR',
    lessons: 10,
    lessonsBn: '১০টি লেকচার',
    duration: '2.5 Hours',
    durationBn: '2.5 Hours',
    price: '৳499',
    priceBn: '৳৪৯৯',
    originalPrice: '৳৯৯৯',
    originalPriceBn: '৳৯৯৯',
    rating: 4.9,
    enrolled: 1200,
    enrolledBn: '১২০০+ নিবন্ধিত শিক্ষার্থী',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=500&auto=format&fit=crop',
    badge: 'Admission Open',
    badgeBn: 'ভর্তি চলছে'
  },
  {
    id: 'diabetes-treatment',
    title: 'Diabetes: Cause, Symptoms and Treatment',
    titleBn: 'ডায়াবেটিস: কারণ, লক্ষণ ও সঠিক চিকিৎসা',
    instructor: 'MD. NAYON KARIGOR',
    instructorBn: 'MD. NAYON KARIGOR',
    lessons: 12,
    lessonsBn: '১২টি লেকচার',
    duration: '3 Hours',
    durationBn: '3 Hours',
    price: '৳599',
    priceBn: '৳৫৯৯',
    originalPrice: '৳১,১৯৯',
    originalPriceBn: '৳১,১৯৯',
    rating: 4.8,
    enrolled: 850,
    enrolledBn: '৮৫০+ নিবন্ধিত শিক্ষার্থী',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop',
    badge: 'Popular',
    badgeBn: 'জনপ্রিয় কোর্স'
  },
  {
    id: 'child-fever-care',
    title: 'Pediatric Fever Symptoms & Care Guidelines',
    titleBn: 'শিশুদের জ্বর: করণীয় ও চিকিৎসা',
    instructor: 'MD. NAYON KARIGOR',
    instructorBn: 'MD. NAYON KARIGOR',
    lessons: 8,
    lessonsBn: '৮টি লেকচার',
    duration: '2 Hours',
    durationBn: '2 Hours',
    price: '৳499',
    priceBn: '৳৪৯৯',
    originalPrice: '৳৮৯৯',
    originalPriceBn: '৳৮৯৯',
    rating: 4.7,
    enrolled: 620,
    enrolledBn: '৬২০+ নিবন্ধিত শিক্ষার্থী',
    image: 'https://images.unsplash.com/photo-1502740479091-6398b19d99f4?q=80&w=500&auto=format&fit=crop',
    badge: 'Admission Open',
    badgeBn: 'ভর্তি চলছে'
  },
  {
    id: 'gastric-remedy',
    title: 'Gastric Acid Reflux: Cause & Ultimate Solutions',
    titleBn: 'পেটের গ্যাস ও অম্বল: কারণ ও সমাধান',
    instructor: 'MD. NAYON KARIGOR',
    instructorBn: 'MD. NAYON KARIGOR',
    lessons: 6,
    lessonsBn: '৬টি লেকচার',
    duration: '1.5 Hours',
    durationBn: '1.5 Hours',
    price: '৳399',
    priceBn: '৳৩৯৯',
    originalPrice: '৳৭৯৯',
    originalPriceBn: '৳৭৯৯',
    rating: 4.9,
    enrolled: 1400,
    enrolledBn: '১৪০০+ নিবন্ধিত শিক্ষার্থী',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=500&auto=format&fit=crop',
    badge: 'Popular',
    badgeBn: 'জনপ্রিয়'
  }
];

export const counselorsData: Counselor[] = [
  {
    id: 'c1',
    name: 'Dr. Rafiqul Islam, Pharm.D',
    nameBn: 'ডা. রফিকুল ইসলাম, ফার্ম.ডি',
    role: 'Clinical Medication Specialist',
    roleBn: 'ক্লিনিক্যাল মেডিসিন বিশেষজ্ঞ',
    qualifications: ['B.Pharm, M.Pharm (DU)', 'Doctor of Pharmacy (USA)', 'Specialised in Geriatric Dosing'],
    qualificationsBn: ['বি.ফার্ম, এম.ফার্ম (ঢাকা বিশ্ব.)', 'ডক্টর অব ফার্মেসি (ইউএসএ)', 'বয়স্কদের ওষুধ প্রয়োগে বিশেষ প্রশিক্ষণপ্রাপ্ত'],
    availability: 'Sat, Mon, Wed (07:00 PM - 09:30 PM)',
    availabilityBn: 'শনি, সোম, বুধ (সন্ধ্যা ০৭:০০ - রাত ০৯:৩০)',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 'c2',
    name: 'Dr. Tasnim Ara',
    nameBn: 'ডা. তাসনিম আরা',
    role: 'Pediatric Pharmacotherapist',
    roleBn: 'শিশু রোগ ও ওষুধ থেরাপি বিশেষজ্ঞ',
    qualifications: ['MBBS (DMC)', 'MD (Pediatrics)', 'Advisory Consultant at Medicine Mentor'],
    qualificationsBn: ['এমবিবিএস (ডিএমসি)', 'এমডি (শিশু স্বাস্থ্য)', 'মেডিসিন মেন্টর বিশেষজ্ঞ প্যানেলিস্ট'],
    availability: 'Sun, Tue, Thu (06:00 PM - 08:30 PM)',
    availabilityBn: 'রবি, মঙ্গল, বৃহস্পতি (স্বন্ধ্যা ০৬:০০ - রাত ০৮:৩০)',
    avatar: 'https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=150&auto=format&fit=crop',
    rating: 4.8
  }
];

export const booksData: Book[] = [
  {
    id: 'book-safe-medicine',
    title: 'Complete Guide to Correct Medicine Usage',
    titleBn: 'সঠিক ঔষধ ব্যবহারের সম্পূর্ণ গাইড',
    author: 'NAYON KARIGOR',
    authorBn: 'NAYON KARIGOR',
    price: '৳450',
    priceBn: '৳৪৫০',
    originalPrice: '৳৬০০',
    originalPriceBn: '৳৬০০',
    pages: 350,
    pagesBn: '৩৫০ পৃষ্ঠা',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop',
    badge: 'Best Seller',
    badgeBn: 'বেস্ট সেলার',
    description: 'A comprehensive guide on safe prescription administration, preventing drug interactions and side effects.',
    descriptionBn: 'প্রেসক্রিপশনের জটিল ওষুধ নিরাপদ ব্যবহারে এবং ওটিসি ড্রাগের পার্শ্বপ্রতিক্রিয়া সম্পর্কে সহজ বাংলা ভাষায় লিখিত সম্পূর্ণ সমাধান।'
  },
  {
    id: 'book-antibiotics-intro',
    title: 'Easy Antibiotics Guide',
    titleBn: 'আন্টিবায়োটিক সহজ পাঠ',
    author: 'NAYON KARIGOR',
    authorBn: 'NAYON KARIGOR',
    price: '৳400',
    priceBn: '৳৪০০',
    originalPrice: '৳৫৫০',
    originalPriceBn: '৳৫৫০',
    pages: 280,
    pagesBn: '২৮০ পৃষ্ঠা',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop',
    badge: 'Must Read',
    badgeBn: 'জরুরি পাঠ'
  },
  {
    id: 'book-diabetes-solution',
    title: 'Easy Diabetes Solutions',
    titleBn: 'ডায়াবেটিস সহজ সমাধান',
    author: 'NAYON KARIGOR',
    authorBn: 'NAYON KARIGOR',
    price: '৳500',
    priceBn: '৳৫০০',
    originalPrice: '৳৭০০',
    originalPriceBn: '৳৭০০',
    pages: 410,
    pagesBn: '৪১০ পৃষ্ঠা',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=400&auto=format&fit=crop',
    badge: 'Recommended',
    badgeBn: 'জনপ্রিয়'
  },
  {
    id: 'book-child-health',
    title: 'Simple Child Healthcare Guide',
    titleBn: 'শিশুদের স্বাস্থ্য সহজ যত্ন',
    author: 'NAYON KARIGOR',
    authorBn: 'NAYON KARIGOR',
    price: '৳350',
    priceBn: '৳৩৫০',
    originalPrice: '৳৫০০',
    originalPriceBn: '৳৫০০',
    pages: 240,
    pagesBn: '২৪০ পৃষ্ঠা',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop',
    badge: 'New Edition',
    badgeBn: 'নতুন সংস্করণ'
  }
];

// Color values for style guide representation
export const designTokens = {
  colors: [
    { name: 'Primary Clinical Aqua/Teal', hex: '#0EA5E9', class: 'bg-sky-500', use: 'Main Action buttons, Brand Logo highlight, structural markers' },
    { name: 'Soothe Mint/Healthcare Light', hex: '#0D9488', class: 'bg-teal-600', use: 'Trust badges, verified indicators, and medical graphics' },
    { name: 'Warning / Alert Coral', hex: '#F43F5E', class: 'bg-rose-500', use: 'Medical disclaimers, dose alerts, danger notifications' },
    { name: 'Slate Gray', hex: '#475569', class: 'bg-slate-600', use: 'Primary secondary descriptions and structural borders' },
    { name: 'Pure Snow Cloud', hex: '#F8FAFC', class: 'bg-slate-50', use: 'Light clean card backdrops and soft layout grids' },
    { name: 'Charcoal Midnight', hex: '#0F172A', class: 'bg-slate-900', use: 'Primary high-contrast bold typography and dark mode accents' }
  ],
  typography: [
    { label: 'Display Headings', font: 'Inter, Weight 700+ tracking-tight', size: 'text-3xl to text-5xl', example: 'Medicine Mentor BD' },
    { label: 'Sub-components/Cards', font: 'Inter, Weight 600', size: 'text-lg to text-xl', example: 'Amlodipine Guideline' },
    { label: 'Optimized Reading Body', font: 'Inter/System, Weight 400, leading-relaxed text-slate-700', size: 'text-base', example: 'Calcium channel blockers relax smooth muscles...' },
    { label: 'Technical Data & Meta Labels', font: 'JetBrains Mono, Weight 500', size: 'text-xs', example: 'MAX_DOSE_LIMIT = 4000mg' }
  ]
};
