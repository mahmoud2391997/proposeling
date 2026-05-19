import { Article, Category, Course, Counselor } from './types';

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
    name: 'Diabetes Care',
    nameBn: 'ডায়াবেটিস ও হরমোন',
    count: 18,
    countBn: '১৮',
    icon: 'Activity',
    color: 'teal',
    description: 'Insulin safety, oral hypoglycemics, and metabolic regulation guidance.',
    descriptionBn: 'ইনসুলিনের নিরাপত্তা, মুখে খাওয়ার ডায়াবেটিসের ওষুধ এবং মেটাবলিক নিয়মের নির্দেশিকা।'
  },
  {
    id: 'otc-safety',
    name: 'OTC & General Wellness',
    nameBn: 'সাধারণ ব্যাধি ও ওটিসি ওষুধ',
    count: 35,
    countBn: '৩৫',
    icon: 'Pill',
    color: 'sky',
    description: 'Safe usage of non-prescription pain relievers, cold medicines, and digestive aids.',
    descriptionBn: 'প্রেসক্রিপশন ছাড়া পাওয়া ব্যথানাশক, ঠাণ্ডা-কাশির ওষুধ ও হজমের ওষুধের সঠিক ব্যবহার।'
  },
  {
    id: 'pediatrics-child',
    name: 'Child Medicine Safety',
    nameBn: 'শিশু স্বাস্থ্য ও ওষুধ',
    count: 12,
    countBn: '১২',
    icon: 'Baby',
    color: 'indigo',
    description: 'Pediatric dosing, suspension measurements, and critical alert indexes for childrens health.',
    descriptionBn: 'শিশুদের ওষুধের মাত্রা, সিরাপ মাপার সঠিক নিয়ম এবং শিশু স্বাস্থ্যের অতিজরুরি সতর্কতা।'
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
    id: 'ccb-hypertension',
    title: 'The Role of Calcium Channel Blockers in Hypertension Management',
    titleBn: 'উচ্চ রক্তচাপ নিয়ন্ত্রণে ক্যালসিয়াম চ্যানেল ব্লকারসমূহের ভূমিকা ও সঠিক ব্যবহার',
    slug: 'ccb-hypertension-guide',
    category: 'Cardiovascular Health',
    categoryBn: 'হৃতযন্ত্র ও রক্তচাপ',
    readTime: '6 min read',
    readTimeBn: '৬ মিনিট পাঠ',
    date: 'May 18, 2026',
    dateBn: '১৮ মে, ২০২৬',
    author: 'Dr. Rafiqul Islam, Pharm.D',
    authorBn: 'ডা. রফিকুল ইসলাম, ফার্ম.ডি',
    summary: 'A comprehensive medical guide explaining CCBs like Amlodipine, when to take them, their mechanism, common drug interactions, and dietary warnings.',
    summaryBn: 'অ্যামলোডিপিন এর মতো ক্যালসিয়াম চ্যানেল ব্লকার জাতীয় ওষুধ কখন খাবেন, পার্শ্বপ্রতিক্রিয়া এবং খাদ্যতালিকার বিশেষ সতর্কতা নিয়ে এক বিস্তারিত আলোচনা।',
    disclaimer: 'Disclaimer: This article is for educational purposes only. Do not change clinical dosages without consulting your cardiologist.',
    disclaimerBn: 'সতর্কতা: এই নিবন্ধটি শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে তৈরি। আপনার কার্ডিওলজিস্টের পরামর্শ ছাড়া ওষুধের মাত্রা পরিবর্তন করবেন না।',
    tags: ['Amlodipine', 'Hypertension', 'Cardio', 'Drug Guide'],
    tagsBn: ['অ্যামলোডিপিন', 'উচ্চ রক্তচাপ', 'কার্ডিও', 'মেডিসিন গাইড'],
    image: 'https://picsum.photos/seed/cardio/800/450',
    content: [
      '### What are Calcium Channel Blockers (CCBs)?\n\nCalcium channel blockers (CCBs) are a class of medications widely used to treat high blood pressure (hypertension) and chest pain (angina). They work by relaxing the muscles of your heart and blood vessels, allowing blood flow to increase and blood pressure to drop. Common examples include **Amlodipine**, **Nifedipine**, and **Lercanidipine**.',
      '### How Do They Work?\n\nOur blood vessel walls and heart muscle rely on calcium ions to contract. CCBs act as a gatekeeper, preventing calcium from entering these muscle cells. When calcium entry is blocked, the vascular smooth muscles relax, leading to **vasodilation** (widening of arteries). This decreases the workload of the heart and lowers resistance to blood flow.',
      '### Optimizing Administration: When to Take?\n\n*   **Consistency is Key**: It is highly recommended to take your CCB at the **same time every single day** to maintain steady concentration in your bloodstream.\n*   **Morning vs. Night**: Depending on symptoms like ankle edema or nocturnal hypertension, your doctor may recommend night dosing. Follow your physician’s schedule.\n*   **Food Interactions**: Can be taken with or without food, but avoid **grapefruit juice** entirely. Grapefruit contains furanocoumarins which block the intestinal enzyme CYP3A4, causing the drug to accumulate in your body and dangerously dropping your blood pressure.',
      '### Common Side Effects & Mitigations\n\nWhile highly effective, CCBs can trigger side effects due to vascular dilation:\n\n1.  **Peripheral Edema (Ankle Swelling)**: This occurs because blood vessels in the legs dilate, causing localized fluid accumulation. Gentle walking and keeping your legs elevated can help. If severe, consult your doctor.\n2.  **Dizziness or Flushes**: Standing up too quickly can cause orthostatic hypotension. Move slowly when shifting positions.\n3.  **Gingival Hyperplasia**: Swelling of gums is a rare side effect of Amlodipine. Maintain strict oral hygiene (flossing twice daily) and complete dental cleanings.',
      '### Crucial Drug & Food Interactions to Watch\n\n*   **Grapefruit / Grapefruit Juice**: Dramatically elevates blood concentrations of Amlodipine/Nifedipine.\n*   **NSAIDs (like Ibuprofen / Naproxen)**: Frequently taken for pain, NSAIDs can cause fluid retention and decrease the antihypertensive efficacy of CCBs.\n*   **Simvastatin**: High doses of CCBs can raise the plasma levels of Simvastatin, increasing the risk of muscle pain (myopathy). If you are on both, keep the cholesterol medication dosage strictly within safe medical thresholds.',
      '### Summary Checklist for Patients\n\n* Take your medicine daily at the same time.\n* Monitor and log your blood pressure twice a week.\n* Limit sodium/salt intake.\n* Avoid Grapefruit or high doses of painkillers.\n* Schedule routine kidney and kidney function checks and check in with your Medicine Mentor specialist.'
    ],
    contentBn: [
      '### ক্যালসিয়াম চ্যানেল ব্লকার (CCBs) কি?\n\nক্যালসিয়াম চ্যানেল ব্লকার (CCB) হলো এক শ্রেণীর ওষুধ যা মূলত উচ্চ রক্তচাপ (হাইপারটেনশন) এবং বুক ব্যথার (এনজিনা) চিকিৎসায় ব্যবহৃত হয়। এরা হৃৎপিণ্ড ও রক্তনালীর পেশীগুলোকে শিথিল করে রক্তপ্রবাহ সহজ ও রক্তচাপ হ্রাস করে। সাধারণ উদাহরণগুলোর মধ্যে রয়েছে **অ্যামলোডিপিন (Amlodipine)**, **নিফেডিপিন (Nifedipine)** এবং **লারকানিডিপিন (Lercanidipine)**।',
      '### এগুলো কীভাবে কাজ করে?\n\nআমাদের রক্তনালীর দেয়াল এবং হার্টের পেশী সংকুচিত হওয়ার জন্য ক্যালসিয়াম আয়নের প্রয়োজন হয়। CCBs গুলো দারোয়ান হিসেবে কাজ করে এবং এই কোষগুলিতে ক্যালসিয়াম প্রবেশে বাধা দেয়। যখন ক্যালসিয়ামের প্রবেশ বন্ধ হয়, তখন রক্তনালী শিথিল ও প্রসারিত হয়। এর ফলে রক্ত সঞ্চালনে হার্টকে কম চাপ প্রয়োগ করতে হয় এবং রক্তচাপ কমে যায়।',
      '### ওষুধ গ্রহণের সঠিক নিয়ম: কখন খাবেন?\n\n*   **নিয়মিত অভিন্ন সময়সূচী**: রক্তে ওষুধের সঠিক মাত্রা বজায় রাখতে প্রতিদিন **ঠিক একই সময়ে** ওষুধটি সেবন করা উচিত।\n*   **সকাল বনাম রাত**: গোড়ালি ফুলা বা রাতে রক্তচাপ বাড়ার প্রবণতার উপর ভিত্তি করে আপনার চিকিৎসক এটি রাতে খাবার পরামর্শ দিতে পারেন। চিকিৎসকের নির্দেশ কঠোরভাবে মেনে চলুন।\n*   **খাবারের সাথে সম্পর্ক**: এটি খাবারের আগে বা পরে খাওয়া যায়, তবে **জাম্বুরা বা বাতাবি লেবুর রস (Grapefruit juice)** সম্পূর্ণ পরিহার করুন। জাম্বুরার রস অন্ত্রের বিশেষ এনজাইম নিষ্ক্রিয় করে দেয়, যার ফলে রক্তে ওষুধের ঘনত্ব অত্যন্ত বেড়ে যায় এবং রক্তচাপ বিপজ্জনকভাবে নেমে যেতে পারে।',
      '### সাধারণ পার্শ্বপ্রতিক্রিয়া ও প্রশমন\n\nঅত্যন্ত কার্যকরী হওয়া সত্ত্বেও রক্তনালী প্রসারণের কারণে কিছু পার্শ্বপ্রতিক্রিয়া দেখা দিতে পারে:\n\n১.  **পা বা গোড়ালি ফোলা (Ankle Edema)**: রক্তনালীগুলো প্রসারিত হওয়ার কারণে পায়ে তরল জমে ফুলে যায়। নিয়মিত হাঁটাচলা করা এবং বসার সময় পা উঁচুতে রাখা উপকারী। ফোলা অতিরিক্ত হলে ডাক্তারের পরামর্শ নিন।\n২.  **ঝিমুনি বা মাথা ঘোরানো**: হঠাৎ সোজা হয়ে দাঁড়ালে সাময়িক রক্তচাপ কমে যেতে পারে। বসা বা শোয়া থেকে ওঠার সময় ধীরে উঠুন।\n৩.  **মাড়ির ফোলাভাব (Gingival Hyperplasia)**: অ্যামলোডিপিনের দীর্ঘ মেয়াদী ব্যবহারে মাড়ির হালকা স্ফীতি হতে পারে। ডেন্টাল হাইজিন মেনে চলুন এবং নিয়মিত মাড়ির যত্ন নিন।',
      '### গুরুত্বপূর্ণ মিথস্ক্রিয়া (Interactions) যা এড়ানো আবশ্যক\n\n*   **বাতাবি লেবু / জাম্বুরা**: হঠাৎ ওষুধের কার্যক্ষমতা বিষাক্ত মাত্রায় বাড়িয়ে তুলতে পারে।\n*   **ব্যথানাশক ওষুধ (NSAIDs)**: যেমন আইবুপ্রোফেন বা ন্যাপ্রক্সেন রক্তচাপ ওষুধের কার্যকারিতা কমিয়ে দেয় এবং শরীরে পানি জমতে সাহায্য করে।\n*   **সিমভাস্ট্যাটিন (Simvastatin)**: কোলেস্টেরলের এই ওষুধের সাথে অ্যামলোডিপিন সেবনে মাড়িতে বা পেশী ব্যথা (Myopathy) হওয়ার ঝুঁকি বাড়ে।'
    ]
  },
  {
    id: 'paracetamol-overdose',
    title: 'Safe Use of Paracetamol: Preventing Silent Liver Adverse Events',
    titleBn: 'প্যারাসিটামলের নিরাপদ ব্যবহার: লিভারের দীর্ঘমেয়াদী ক্ষতি থেকে বাঁচুন',
    slug: 'paracetamol-overdose-guide',
    category: 'OTC & General Wellness',
    categoryBn: 'সাধারণ ব্যাধি ও ওটিসি ওষুধ',
    readTime: '4 min read',
    readTimeBn: '৪ মিনিট পাঠ',
    date: 'May 15, 2026',
    dateBn: '১৫ মে, ২০২৬',
    author: 'Prof. Subrata Sen, Clinical Pharmacologist',
    authorBn: 'অধ্যাপক সুব্রত সেন, ক্লিনিক্যাল ফার্মাকোলজিস্ট',
    summary: 'OTC Cold remedies often hide Acetaminophen. Learn about cumulative toxicity thresholds, maximum daily dose limitations, and why alcohol is a lethal combo.',
    summaryBn: 'ঠাণ্ডা-জ্বরের বিভিন্ন প্যাকেজ ওষুধে প্যারাসিটামল লুকিয়ে থাকে। জেনে নিন দৈনিক সর্বোচ্চ ওষুধের মাত্রা এবং কেন অ্যালকোহল ও প্যারাসিটামলের মিশ্রণ লিভারের জন্য মারাত্মক ক্ষতিকর।',
    disclaimer: 'Disclaimer: The maximum adult daily dose of paracetamol is strictly 4000mg. Excess dose is highly hepatotoxic.',
    disclaimerBn: 'সতর্কতা: প্রাপ্তবয়স্কদের জন্য প্যারাসিটামল সেবনের দৈনিক সর্বোচ্চ মাত্রা ৪০০০ মিলিগ্রাম। এর বেশি সেবন লিভারের চরম ক্ষতি ডেকে আনে।',
    tags: ['Paracetamol', 'OTC', 'Liver Care', 'Pain Reliever'],
    tagsBn: ['প্যারাসিটামল', 'ওটিসি', 'লিভারের যত্ন', 'ব্যথানাশক'],
    image: 'https://picsum.photos/seed/liver/800/450',
    content: [
      '### The Paradox of OTC Availability\n\nMany consumers believe because **Paracetamol** (Acetaminophen) can be bought anywhere without a prescription, it is completely harmless. In reality, it is one of the leading causes of acute liver failure globally due to unintentional accidental overdosing.',
      '### The Cumulative Trap: Cold Banners and Syrups\n\nCommonly marketed cold packets and cough syrups (such as multi-symptom cold relief capsules) often contain paracetamol as a dynamic base active ingredient. If you take standard paracetamol along with these cold remedies, you have initiated double-dosing. Always read the back panel label of your syrups and powders!',
      '### Toxicity Thresholds\n\n*   **Adult Limit**: No more than **1000mg per single dose**, and absolutely no more than **4000mg in 24 hours** (usually equivalent to 8 standard 500mg tablets).\n*   **Interval**: Maintain at least **4 to 6 hours gap** between doses.\n*   **Alcohol Hazard**: Chronic alcohol intake depletes glutathione reserves in the liver. When glutathione is low, a toxic byproduct of paracetamol called **NAPQI** cannot be detoxified, leading directly to liver cell death.'
    ],
    contentBn: [
      '### ওটিসি ওষুধের আড়ালে নীরব বিপদ\n\nপ্যারাসিটামল সহজে প্রেসক্রিপশন ছাড়া কেনা যায় বলে আমরা অনেকেই মনে করি এটি সম্পূর্ণ নিরাপদ। অথচ বিশ্বজুড়ে লিভার অকেজো হয়ে যাওয়ার অন্যতম প্রধান কারণ হলো অজান্তে অতিরিক্ত মাত্রায় প্যারাসিটামল সেবন।',
      '### সাধারণ জ্বরের সিরাপ ও ট্যাবলেটের ফাঁদ\n\nঠাণ্ডা বা কাশির জন্য যে সব কম্বিনেশন সিরাপ বা ট্যাবলেট বাজারে পাওয়া যায়, সেগুলোর ভেতরেও প্যারাসিটামল সক্রিয় উপাদান হিসেবে থাকে। আপনি যদি মূল প্যারাসিটামল ট্যাবলেটের সাথে সাধারণ ঠাণ্ডা-কাশির ওষুধও খান, তবে শরীরের জন্য দ্বিগুণ মাত্রা হয়ে যায়। তাই ওষুধের পাতার পেছনে থাকা উপাদানের তালিকা মনোযোগ দিয়ে পড়ুন।',
      '### গ্রহণের বিপদসীমা ও মাত্রা\n\n*   **সর্বোচ্চ সীমা**: একবারে সর্বোচ্চ **১০০০ মিলিগ্রাম (২টি ৫০০ মিগ্রা ট্যাবলেট)** এবং ২৪ ঘন্টায় সর্বোচ্চ **৪০০০ মিলিগ্রামের** বেশি সেবন করা সম্পূর্ণ নিষিদ্ধ।\n*   **সময়ের ব্যাবধান**: প্রতি দুই ডোজের মধ্যে অন্তত **৪ থেকে ৬ ঘণ্টার** ব্যাবধান রাখুন।\n*   **লিভারের ক্ষতি এড়াতে**: নিয়মিত ড্রিঙ্ক করা বা জন্ডিসের ইতিহাস থাকলে সতর্ক থাকতে হবে এবং চিকিৎসকের পরামর্শ ছাড়া ওটিসি প্যারাসিটামল খাওয়া বন্ধ রাখতে হবে।'
    ]
  },
  {
    id: 'antibiotic-resistance-crisis',
    title: 'Why Stopping Antibiotics Early is Creating Drug-Resistant Superbugs',
    titleBn: 'অ্যান্টিবায়োটিকের কোর্স অর্ধেক খেয়ে ছেড়ে দেওয়া কেন মারাত্মক বিপদ ডেকে আনছে?',
    slug: 'antibiotic-resistance-crisis',
    category: 'Antibiotic Stewardship',
    categoryBn: 'অ্যান্টিবায়োটিকের সঠিক ব্যবহার',
    readTime: '5 min read',
    readTimeBn: '৫ মিনিট পাঠ',
    date: 'May 10, 2026',
    dateBn: '১০ মে, ২০২৬',
    author: 'Dr. Tasnim Ara, Microbiologist',
    authorBn: 'ডা. তাসনিম আরা, অণুজীববিদ',
    summary: 'The science of clinical resistance. What happens to surviving bacterial strains when you discontinue antibiotic treatment as soon as you feel better.',
    summaryBn: 'অর্ধেক অ্যান্টিবায়োটিক খেয়ে জ্বর কমলে ছেড়ে দিলে শরীরের ভেতরে বেঁচে থাকা শক্তিশালী ব্যাক্টেরিয়াগুলো পরবর্তী সময়ে সুপারবাগে রূপ নেয়। জানুন এর বৈজ্ঞানিক প্রভাব।',
    disclaimer: 'Disclaimer: Always complete the full course of your antibiotic exactly as written on the prescription, even if your symptoms completely disappear.',
    disclaimerBn: 'সতর্কতা: লক্ষণ দেখা দেওয়া বন্ধ হয়ে গেলেও প্রেসক্রিপশনের নির্দেশনা অনুযায়ী অ্যান্টিবায়োটিকের পূর্ণ কোর্স সম্পন্ন করুন।',
    tags: ['Antibiotics', 'Superbugs', 'Health Safety', 'Resistance'],
    tagsBn: ['অ্যান্টিবায়োটিক', 'সুপারবাগ', 'স্বাস্থ্য সচেতনতা', 'রেজিস্ট্যান্স'],
    image: 'https://picsum.photos/seed/antibiotics/800/450',
    content: [
      '### The "I Feel Better" Illusion\n\nWhen you contract a bacterial infection, millions of pathogens colonize your body. Upon starting an antibiotic, the most vulnerable bacteria die in the first 48 hours. This makes your fever subside, and you feel recover. However, the slightly more resilient strains are still lingering, partially injured.',
      '### Selection Pressure and Superbug Incubation\n\nIf you abort your prescription course midway (e.g., taking 3 days out of a 7-day course), the remaining robust bacteria recover, mutate, and acquire resistance genes against that drug. When they multiply again, that antibiotic becomes completely useless. You now host a drug-resistant "superbug" which you can spread to family members.'
    ],
    contentBn: [
      '### "আজ ভালো আছি" ভ্রম\n\nব্যাক্টেরিয়াল ইনফেকশনের পর অ্যান্টিবায়োটিক খাওয়া শুরু করলে সবচেয়ে দুর্বল জীবাণুগুলো প্রথম ৪৮ ঘণ্টায় মরে যায়। আপনার জ্বর কমে আসে ও সুস্থ বোধ করেন। কিন্তু মারাত্মক ক্ষতিকর ও শক্তিশালী ব্যাক্টেরিয়াগুলো তখনও অল্প আঘাতপ্রাপ্ত অবস্থায় বেঁচে থাকে।',
      '### সুপারবাগ তৈরির প্রক্রিয়া\n\nআপনি যখন ৭ দিনের কোর্স ৩ দিন খেয়ে বন্ধ করেন, তখন থেকে যাওয়া শক্তিশালী ব্যাক্টেরিয়াগুলো বেঁচে থাকার জন্য নিজেদের গঠন পরিবর্তন করে ফেলে এবং ওই ওষুধের বিরুদ্ধে প্রতিরোধ গড়ে তোলে। পরবর্তীতে সেই ওষুধ আর তাদের ধ্বংস করতে পারে না।'
    ]
  }
];

export const coursesData: Course[] = [
  {
    id: 'rational-use-medicines',
    title: 'Professional Guide: Rational Use of OTC & Chronic Medications',
    titleBn: 'পেশাদার গাইড: ক্রনিক রোগ ও ওটিসি ওষুধের পরিমিত ব্যবহার',
    instructor: 'Dr. Rafiqul Islam, Clinical Pharmacist',
    instructorBn: 'ডা. রফিকুল ইসলাম, ক্লিনিক্যাল ফার্মাসিস্ট',
    lessons: 15,
    lessonsBn: '১৫টি লেকচার',
    duration: '6h 30m',
    durationBn: '৬ ঘণ্টা ৩০ মিনিট',
    price: '৳১,৪৯০',
    priceBn: '৳১,৪৯০',
    originalPrice: '৳৩,০০০',
    originalPriceBn: '৳৩,০০০',
    rating: 4.9,
    enrolled: 340,
    enrolledBn: '৩৪০ জন শিক্ষার্থী',
    image: 'https://picsum.photos/seed/medcourse/500/300',
    badge: 'Popular',
    badgeBn: 'জনপ্রিয়'
  },
  {
    id: 'cardiac-pharmacotherapy',
    title: 'Advanced Cardiac Drug Guidelines for Healthcare Educators',
    titleBn: 'স্বাস্থ্য সহায়কদের জন্য হৃদরোগের আধুনিক ওষুধ নির্দেশিকা',
    instructor: 'Prof. Subrata Sen, FACC',
    instructorBn: 'অধ্যাপক সুব্রত সেন, এফএসিসি',
    lessons: 18,
    lessonsBn: '১৮টি লেকচার',
    duration: '8h 15m',
    durationBn: '৮ ঘণ্টা ১৫ মিনিট',
    price: '৳১,৯৫০',
    priceBn: '৳১,৯৫০',
    originalPrice: '৳৪,০০০',
    originalPriceBn: '৳৪,০০০',
    rating: 4.8,
    enrolled: 210,
    enrolledBn: '২১০ জন শিক্ষার্থী',
    image: 'https://picsum.photos/seed/cardiocourse/500/300',
    badge: 'Premium',
    badgeBn: 'প্রিমিয়াম'
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
    avatar: 'https://picsum.photos/seed/doc1/150/150',
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
    avatar: 'https://picsum.photos/seed/doc2/150/150',
    rating: 4.8
  }
];

// Color values for style guide representation
export const designTokens = {
  colors: [
    { name: 'Primary Premium Aqua/Teal', hex: '#0EA5E9', class: 'bg-indigo-600', use: 'Main Action buttons, Brand Logo highlight, structural markers' },
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
