import React, { useState } from 'react';
import { 
  HeartPulse, Activity, Pill, Baby, ShieldAlert, ChevronRight, BookOpen, Star, 
  Clock, ArrowUpRight, GraduationCap, ThumbsUp, Calendar, User, Search, Award, CheckCircle, Smartphone
} from 'lucide-react';
import { categoriesData, articlesData, coursesData, counselorsData } from '../data';
import { Category, Course, Counselor } from '../types';

interface HomepageProps {
  language: 'en' | 'bn';
  setCurrentView: (view: string) => void;
}

export default function Homepage({ language, setCurrentView }: HomepageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [doseWeight, setDoseWeight] = useState<string>('');
  const [doseAge, setDoseAge] = useState<'adult' | 'child'>('adult');
  const [doseDrug, setDoseDrug] = useState<string>('paracetamol');
  const [calculatedAdvice, setCalculatedAdvice] = useState<string | null>(null);
  
  // Counselor scheduler states
  const [activeCounselor, setActiveCounselor] = useState<string>('c1');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [scheduleName, setScheduleName] = useState<string>('');
  const [scheduleSuccess, setScheduleSuccess] = useState<boolean>(false);

  // Dosage calculator logic (fully functional interactive educational tool)
  const handleCalculateDose = (e: React.FormEvent) => {
    e.preventDefault();
    if (doseDrug === 'paracetamol') {
      if (doseAge === 'adult') {
        const advice = language === 'en'
          ? "Standard Dose: 500mg to 1000mg (1-2 tablets) every 4-6 hours. Absolute maximum is 4000mg (8 tablets) in 24 hours. Do not combine with multi-symptom cold syrups as they may secretly contain Acetaminophen, leading to potential severe liver failure index risks."
          : "স্বাভাবিক মাত্রা: ৫০০মিগ্রা থেকে ১০০০মিগ্রা (১-২টি ট্যাবলেট) প্রতি ৪-৬ ঘণ্টা পর পর। ২৪ ঘণ্টায় সর্বোচ্চ মাত্রা ৪০০০মিগ্রা (৮টি ট্যাবলেট)। ঠাণ্ডা-কাশির অন্যান্য সিরাপের সাথে খাবেন না কারণ সেগুলোতে প্যারাসিটামল লুকিয়ে থাকে, যা লিভারের মারাত্মক ক্ষতি ডেকে আনে।";
        setCalculatedAdvice(advice);
      } else {
        const weightNum = parseFloat(doseWeight);
        if (isNaN(weightNum) || weightNum <= 0) {
          const adviceErr = language === 'en' 
            ? "Please enter a valid weight in kg for pediatric calculation."
            : "শিশুর ওষুধ পরিমাপের জন্য সঠিক ওজন (কেজি) প্রদান করুন।";
          setCalculatedAdvice(adviceErr);
          return;
        }
        // Pediatric Paracetamol calculation: 15mg/kg
        const pediatricDose = Math.round(weightNum * 15);
        const adviceChild = language === 'en'
          ? `Calculated Dose: ${pediatricDose}mg per single dose. Give every 4-6 hours. Do not exceed 4 doses in 24 hours. Always use the milliliter syringe/spoon provided with the suspension. Avoid visual guess estimations entirely.`
          : `হিসাবকৃত সঠিক মাত্রা: একক ডোজে প্রায় ${pediatricDose} মিলিগ্রাম (সিরাপের পিছনের মিলি হিসেব দেখুন)। প্রতি ৪-৬ ঘণ্টা অন্তর সেব্য। ২৪ ঘণ্টায় ৪ বারের বেশি দেবেন না। ওষুধ পরিমাপের জন্য ড্রপ বা ওয়ান-টাইম সিরিঞ্জ ব্যবহার করুন। আন্দাজে চামচ দিয়ে খাওয়ানো বন্ধ করুন।`;
        setCalculatedAdvice(adviceChild);
      }
    } else if (doseDrug === 'amlodipine') {
      const adviceAmlodipine = language === 'en'
        ? "Cardiology Advisory: Standard dosage typically initiates at 5mg orally once daily, adjusting up to 10mg max per cardiologist directive. WARNING: Avoid Grapefruit juice or Simvastatin 20mg+ combinations. Monitor and log your blood pressure twice weekly."
        : "কার্ডিওলজি সতর্কতা: রক্তচাপ নিয়ন্ত্রণে সাধারণত প্রতিদিন ৫ মিলিগ্রাম দিয়ে শুরু হয়, চিকিৎসকের নির্দেশিকায় সর্বোচ্চ ১০ মিলিগ্রাম পর্যন্ত নেওয়া যেতে পারে। সতর্কতা: জাম্বুরা বা বাতাবি লেবু সম্পূর্ণরূপে বর্জন করুন। সপ্তাহে রক্তচাপ মেপে ৩ বার ডায়েরিতে লিখে রাখুন।";
      setCalculatedAdvice(adviceAmlodipine);
    } else {
      const adviceAntacid = language === 'en'
        ? "Antacid Guidelines: 1-2 chewable tablets or 10-20ml suspension taken 1 hour after meals and at bedtime. Warning: Antacids can bind other critical drugs (like Antibiotics or Iron). Consume other medicines 2 hours before or 4 hours after antacids."
        : "অ্যান্টাসিড নির্দেশিকা: খাবারের ১ ঘণ্টা পর এবং ঘুমানোর আগে ১০-২০ মিলি অথবা ১-২টি চুষে খাওয়ার ট্যাবলেট। সতর্কতা: অ্যান্টাসিড অন্যান্য প্রয়োজনীয় ওষুধ শোষণ ব্যাহত করে (যেমন অ্যান্টিবায়োটিক)। তাই অন্যান্য ওষুধ খাওয়ার কমপক্ষে ২ ঘণ্টা আগে বা ৪ ঘণ্টা পর অ্যান্টাসিড খাবেন।";
      setCalculatedAdvice(adviceAntacid);
    }
  };

  const handleBookCounseling = (e: React.FormEvent) => {
    e.preventDefault();
    if (scheduleName && selectedSlot) {
      setScheduleSuccess(true);
      setTimeout(() => {
        setScheduleSuccess(false);
        setScheduleName('');
        setSelectedSlot('');
      }, 5000);
    }
  };

  const featuredArticles = articlesData.slice(0, 3);

  return (
    <div id="homepage_root" className="w-full bg-white font-sans text-slate-800">
      
      {/* ----------------- SECTION 1: HERO SECTION ----------------- */}
      <section id="hero-section" className="relative bg-gradient-to-tr from-slate-900 via-slate-950 to-indigo-950 text-white min-h-[550px] flex items-center pt-16 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Subtle grid backdrop overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 text-left items-center">
          
          {/* Hero Left Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 w-fit text-xs text-sky-300 font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>{language === 'en' ? 'Pioneering Drug Literacy in Bangladesh' : 'অপপ্রয়োগ প্রতিরোধ ও নিরাপদ তথ্য সহায়তা'}</span>
            </div>

            <h1 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-2">
              {language === 'en' ? (
                <span>Stop Secret Self-Medicating. Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Rational Drug Use</span> Today.</span>
              ) : (
                <span>ভুল ওষুধ সেবন বন্ধ করুন। জেনে নিন মেডিসিনের <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">সঠিক ও বিজ্ঞানসম্মত</span> নিরাপদ ব্যবহার।</span>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              {language === 'en'
                ? 'Medicine Mentor is a premium digital counseling and clinical health education platform. Read evidence-based drug reviews, schedule online consultations, and access children pediatric guide tools.'
                : 'মেডিসিন মেন্টর বাংলাদেশের প্রথম পূর্ণাঙ্গ অনলাইন ওষুধ শিক্ষা পোর্টাল। প্রখ্যাত ফার্মাকোলজিস্টদের তথ্যভিত্তিক লেখা পড়ুন, সঠিক ওষুধের মাত্রা হিসাব করুন এবং অযাচিত ওষুধের পার্শ্বপ্রতিক্রিয়া এড়িয়ে চলুন।'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                id="hero-read-guides"
                onClick={() => setCurrentView('article')}
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-sky-950/40 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer"
              >
                {language === 'en' ? 'Explore Drug Guides' : 'নিরাপদ গাইডসমূহ পড়ুন'}
              </button>
              
              <button 
                id="hero-consult-now"
                onClick={() => {
                  const el = document.getElementById('consult-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-7 py-4 rounded-2xl border border-slate-700 transition-all text-sm cursor-pointer"
              >
                {language === 'en' ? 'Medication Counseling' : 'মেন্টর কাউন্সিলিং বুক করুন'}
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 mt-4 text-xs">
              <div>
                <span className="block text-xl font-bold text-white text-left">25k+</span>
                <span className="text-slate-400 text-left block mt-1">{language === 'en' ? 'Patients Shielded' : 'নিরাপদ সেবাপ্রাপ্ত'}</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white text-left">100%</span>
                <span className="text-slate-400 text-left block mt-1">{language === 'en' ? 'Evidence Grade A' : 'ক্লিনিক্যাল নির্ভুলতা'}</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white text-left">15+</span>
                <span className="text-slate-400 text-left block mt-1">{language === 'en' ? 'Specialists Online' : 'মেডিসিন বিশেষজ্ঞ প্যানেল'}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column - Premium Human-centric Vector Graphic Mockups (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-sky-500/20 to-indigo-500/5 rounded-3xl border border-slate-800 p-6 flex flex-col gap-6 shadow-2xl justify-between">
              
              {/* Abstract Floating Pill capsule art directly styled in CSS (Extremely premium, lightweight) */}
              <div className="flex animate-pulse duration-4000 justify-between items-center bg-slate-900/60 backdrop-blur rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-6 bg-emerald-400 rounded-full relative flex items-center overflow-hidden border border-emerald-500">
                    <div className="absolute right-0 w-1/2 h-full bg-white"></div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Amlodipine 5mg</span>
                    <span className="block text-[10px] text-emerald-400 font-mono mt-0.5">Interaction Risk Raised</span>
                  </div>
                </div>
                <span className="text-[10px] bg-rose-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Warning</span>
              </div>

              {/* Graphic center layout representing clinical consultation */}
              <div className="flex flex-col gap-2 p-4 items-center justify-center text-center bg-slate-950/70 border border-slate-800/80 rounded-2xl">
                <HeartPulse className="w-12 h-12 text-sky-400 animate-bounce-slow shrink-0" />
                <span className="text-xs font-semibold text-white mt-1">Medicine Mentor Advisory</span>
                <span className="text-[10px] text-slate-400">Providing actionable, safe, registered graduate pharmacotherapy blueprints.</span>
              </div>

              {/* Quick child alert simulator popup for medical visualization */}
              <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur rounded-2xl p-3 border border-slate-800">
                <div className="p-2 h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Baby className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white">{language === 'en' ? 'Safe Kid Dosage Indicator' : 'শিশু ডোজ ক্যালকুলেটর'}</span>
                  <span className="block text-[10px] text-slate-300">{language === 'en' ? 'Based on accurate body weight' : 'শিশুর সঠিক ওজনের ভিত্তিতে পরিমাপ'}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 2: HEALTH TOPIC CATEGORIES ----------------- */}
      <section id="categories-section" className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{language === 'en' ? 'Structured Knowledge' : 'ওষুধ শিক্ষা গাইড'}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{language === 'en' ? 'Explore Redesigned Knowledge Hubs' : 'ক্লিনিক্যাল গাইড ক্যাটাগরি'}</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-sans mt-1">
                {language === 'en' ? 'Click any healthcare sector category to view relevant specialist publications or safe usage guidelines.' : 'রোগের প্রকার এবং ওটিসি ক্যাটাগরি নির্বাচন করুন।' }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categoriesData.map((cat, idx) => {
              const iconMap: Record<string, any> = { HeartPulse, Activity, Pill, Baby, ShieldAlert };
              const IconComp = iconMap[cat.icon] || Pill;
              
              return (
                <div
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setCurrentView('article'); }}
                  className="bg-white border border-slate-100 rounded-3xl p-6 shadow-tiny hover:shadow-md hover:border-sky-300 hover:-translate-y-1 transition-all cursor-pointer text-left flex flex-col justify-between group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="p-3 w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors leading-tight">
                        {language === 'en' ? cat.name : cat.nameBn}
                      </h3>
                      <p className="text-slate-500 text-xs leading-normal mt-2 line-clamp-3 leading-snug">
                        {language === 'en' ? cat.description : cat.descriptionBn}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-sky-500">
                    <span>{language === 'en' ? `${cat.count} Guides` : `${cat.countBn}টি নিবন্ধ`}</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 3: FEATURED ARTICLES OVERVIEW ----------------- */}
      <section id="articles-section" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{language === 'en' ? 'Featured Guidelines' : 'ফিচার্ড নতুন নির্দেশিকা'}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{language === 'en' ? 'Evidence-Led Medicine Spotlights' : 'রেজিস্টার্ড ফার্মাসিস্টদের সতর্কবার্তা'}</h2>
              <p className="text-sm text-slate-500 max-w-xl">
                {language === 'en' ? 'Read recently published educational highlights about paracetamol thresholds, cardiac CCB safety, and antibiotic stewardship.' : 'জ্বর, ঠাণ্ডা-কাশি ও রক্তচাপ নিয়ন্ত্রক ওষুধের অপব্যবহার ঠেকাতে সাম্প্রতিক নিবন্ধ ও বিশেষজ্ঞ মতামত।'}
              </p>
            </div>
            <button
              id="view-all-articles"
              onClick={() => setCurrentView('article')}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-105 text-slate-800 px-5 py-3 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>{language === 'en' ? 'View All Academic Guides' : 'সকল নির্দেশিকা পড়ুন'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid Layout of redesigned articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {featuredArticles.map((art) => (
              <article 
                key={art.id}
                onClick={() => setCurrentView('article')}
                className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-tiny hover:shadow-lg hover:border-sky-200 transition-all cursor-pointer"
              >
                {/* Image wrapper with subtle overlays */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-indigo-950/10 mix-blend-multiply transition-colors group-hover:bg-indigo-950/0 z-10"></div>
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-indigo-700 capitalize">
                    {language === 'en' ? art.category : art.categoryBn}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <User className="w-3.5 h-3.5" />
                    <span className="truncate">{language === 'en' ? art.author : art.authorBn}</span>
                    <span>•</span>
                    <span>{language === 'en' ? art.readTime : art.readTimeBn}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base md:text-lg group-hover:text-sky-500 transition-colors leading-snug line-clamp-2">
                    {language === 'en' ? art.title : art.titleBn}
                  </h3>

                  <p className="text-slate-500 text-xs md:text-sm line-clamp-3 leading-relaxed font-sans">
                    {language === 'en' ? art.summary : art.summaryBn}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-xs text-sky-500 font-bold gap-1 group-hover:text-indigo-600">
                    <span>{language === 'en' ? 'Open Reading Table' : 'নিবন্ধ পড়তে ক্লিক করুন'}</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 4: EDUCATIONAL CLINICAL ACTION BANNERS ----------------- */}
      <section className="py-12 px-4 md:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-8 flex flex-col gap-3">
            <span className="text-[10px] bg-sky-200 text-sky-800 font-bold px-2 py-0.5 rounded uppercase w-fit tracking-wider">WordPress Compatibility Deliverable</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Need Elementor or Gutenberg compatible Redesign Sections?</h3>
            <p className="text-xs md:text-sm text-slate-500 font-sans">
              All redesigned codes of this high-fidelity concept are prepared using clean, lightweight, inline markup style. You can immediately copy sections from the design system to standard HTML blocks!
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button 
              id="cta-open-style"
              onClick={() => setCurrentView('styleguide')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors text-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Inspect HTML & Style System</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 5: INTERACTIVE SAFETY CALCULATOR (CRITICAL USER HOVER REDEEM) ----------------- */}
      <section id="safety-calc-section" className="py-20 px-4 md:px-8 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 text-center">
          
          <div className="flex flex-col gap-2 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest leading-none block">Online Health Assistant Prototype</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Interactive Medication Dosage Advisory Check</h2>
            <p className="text-xs md:text-sm text-slate-500 font-sans leading-relaxed">
              Experience the power of customized pediatric / adult drug safety verification directly inside your premium redesign website concept. Select medicine and check limits.
            </p>
          </div>

          {/* Live Advisor Form Grid */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 flex flex-col gap-6 text-left shadow-sm">
            <form onSubmit={handleCalculateDose} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              
              {/* Parameter 1: Selection of Medication */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-600">
                  {language === 'en' ? '1. Select Medication' : '১. ওষুধ নির্বাচন করুন'}
                </label>
                <select 
                  id="calc-drug-select"
                  value={doseDrug}
                  onChange={(e) => { setDoseDrug(e.target.value); setCalculatedAdvice(null); }}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-sky-500"
                >
                  <option value="paracetamol">{language === 'en' ? 'Paracetamol / Acetaminophen' : 'প্যারাসিটামল (জ্বর ও ব্যথানাশক)'}</option>
                  <option value="amlodipine">{language === 'en' ? 'Amlodipine (Hypertension CCB)' : 'অ্যামলোডিপিন (উচ্চ রক্তচাপ ও হার্ট)'}</option>
                  <option value="antacid">{language === 'en' ? 'Aluminum/Magnesium Antacid' : 'অ্যান্টাসিড (হজমের ও অ্যাসিড প্রশমক)'}</option>
                </select>
              </div>

              {/* Parameter 2: Patient age criteria */}
              <div className="md:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-600">
                  {language === 'en' ? '2. Patient Group' : '২. বয়স গ্রুপ'}
                </label>
                <div className="flex bg-white p-0.5 rounded-xl border border-slate-200">
                  <button
                    id="calc-group-adult"
                    type="button"
                    onClick={() => { setDoseAge('adult'); setCalculatedAdvice(null); }}
                    className={`w-1/2 py-2 rounded-lg text-[11px] font-bold transition-all ${doseAge === 'adult' ? 'bg-sky-500 text-white' : 'text-slate-600'}`}
                  >
                    {language === 'en' ? 'Adult' : 'প্রাপ্তবয়স্ক'}
                  </button>
                  <button
                    id="calc-group-child"
                    type="button"
                    onClick={() => { setDoseAge('child'); setCalculatedAdvice(null); }}
                    className={`w-1/2 py-2 rounded-lg text-[11px] font-bold transition-all ${doseAge === 'child' ? 'bg-sky-500 text-white' : 'text-slate-600'}`}
                  >
                    {language === 'en' ? 'Child' : 'শিশু'}
                  </button>
                </div>
              </div>

              {/* Parameter 3: Child Weight Parameter */}
              <div className="md:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-600 inline-flex items-center gap-1">
                  <span>{language === 'en' ? '3. Body Weight (kg)' : '৩. শিশুর ওজন (কেজি)'}</span>
                  {doseAge === 'adult' && <span className="text-[10px] text-slate-400 font-sans italic">({language === 'en' ? 'N/A' : 'জরুরি নয়'})</span>}
                </label>
                <input 
                  id="calc-weight-input"
                  type="number" 
                  step="0.1"
                  placeholder="e.g. 12"
                  disabled={doseAge === 'adult'}
                  value={doseWeight}
                  onChange={(e) => { setDoseWeight(e.target.value); setCalculatedAdvice(null); }}
                  className="bg-white border border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-sky-500 w-full"
                />
              </div>

              {/* Step Action Submit Button */}
              <div className="md:col-span-2">
                <button
                  id="btn-dosage-calculate"
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center shadow-sm"
                >
                  {language === 'en' ? 'Evaluate Dose' : 'মাত্রা হিসাব'}
                </button>
              </div>

            </form>

            {/* Calculated Advice Clinical Panel */}
            {calculatedAdvice && (
              <div className="mt-4 p-5 rounded-2xl border bg-white border-slate-150 animate-fade-in flex flex-col gap-2 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-700 uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>{language === 'en' ? 'Medicine Mentor Advisory' : 'ওষুধ প্রুফ নিদের্শিকা'}</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider font-mono">Verified Limit Check</span>
                </div>
                
                <p className="text-sm text-slate-700 leading-relaxed mt-1 font-sans">
                  {calculatedAdvice}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100/80 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 italic">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                    <span>{language === 'en' ? 'Disclaimer: Dose calculations are strictly for health literacy education.' : 'সতর্কতা: এটি সম্পূর্ণ শিক্ষামূলক সাহায্যকারী মাত্রা।' }</span>
                  </span>
                  <button 
                    id="btn-dosage-contact"
                    onClick={() => {
                      const el = document.getElementById('consult-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sky-500 hover:underline font-bold"
                  >
                    {language === 'en' ? 'Get detailed human verification' : 'সরাসরি ডাক্তারের পরামর্শ নিন'}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 6: SERVICE / COURSE CARDS ----------------- */}
      <section id="courses-section" className="py-20 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-2 max-w-2xl text-left">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{language === 'en' ? 'Expert Led Educational Courses' : 'স্বাস্থ্য কর্মী ও শিক্ষার্থীদের কোর্সসমূহ'}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{language === 'en' ? 'Modern Training Services' : 'মেডিসিন মেন্টর প্রফেশনাল কোর্সসমূহ'}</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-sans mt-1">
              {language === 'en' ? 'Upgrade your clinical health literacy and pharmacy guidance protocols with direct expert training certifications.' : 'ওষুধের রেশনাল ব্যবহারের সঠিক ফর্মুলা এবং রোগ ও মেন্টর গাইড শিখে নিন ঘরে বসেই।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {coursesData.map((course) => (
              <div 
                key={course.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-tiny hover:shadow-lg hover:border-sky-300 transition-all group"
              >
                {/* Product Card Thumbnail */}
                <div className="w-full md:w-48 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-slate-150 relative">
                  <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-colors group-hover:bg-slate-900/0"></div>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {language === 'en' ? course.badge : course.badgeBn}
                  </span>
                </div>

                {/* Course parameters */}
                <div className="flex flex-col gap-3 justify-between flex-grow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <GraduationCap className="w-4 h-4 text-sky-500" />
                      <span className="font-semibold text-slate-600">{language === 'en' ? course.instructor : course.instructorBn}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug group-hover:text-sky-500 transition-colors">
                      {language === 'en' ? course.title : course.titleBn}
                    </h3>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{language === 'en' ? course.duration : course.durationBn}</span>
                      </span>
                      <span>•</span>
                      <span>{language === 'en' ? course.lessons : course.lessonsBn}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-slate-900">{language === 'en' ? course.price : course.priceBn}</span>
                      <span className="text-xs text-slate-400 line-through font-mono">{language === 'en' ? course.originalPrice : course.originalPriceBn}</span>
                    </div>

                    <button 
                      id={`btn-course-enroll-${course.id}`}
                      onClick={() => alert(language === 'en' ? 'Course enrollment mock workflow initiated successfully!' : 'ইন্টারেক্টিভ কোর্স লিংকটি সফলভাবে সক্রিয় হয়েছে!')}
                      className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
                    >
                      {language === 'en' ? 'Get Course' : 'শেখা শুরু করুন'}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 7: CLINICAL ADVISOR SCHEDULER (CONVERSION REBUILT) ----------------- */}
      <section id="consult-section" className="py-20 px-4 md:px-8 bg-sky-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-stretch">
          
          {/* Scheduler Left Copy Grid (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8 text-left">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">{language === 'en' ? 'Direct Guidance Protocol' : 'লাইভ ওয়ান-টু-ওয়ান পরামর্শ প্ল্যাটফর্ম'}</span>
              <h2 className="text-2xl md:text-3.5xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'en' ? 'Consult Certified Clinical Pharmacists' : 'মেডিসিন প্যানেলের প্রখ্যাত বিশেষজ্ঞ বেছে নিন'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans mt-1">
                {language === 'en' 
                  ? 'Avoid self-guessing your chronic drug regimes. Book a digital counseling session with registered clinical specialists to analyze multi-therapy hazards safely.'
                  : 'আপনি কি একই সাথে ডায়াবেটিস, প্রেশার বা বাতের ৪-৫টি জটিল ওষুধ খাচ্ছেন? এগুলোর মধ্যে কোনো ক্ষতিকর প্রতিক্রিয়া হচ্ছে কি না সরাসরি রেজিস্টার্ড ডক্টর অব ফার্মেসি বা শিশু বিশেষজ্ঞ প্যানেল থেকে বুঝে নিন।'}
              </p>
            </div>

            {/* List selector of available specialists */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase inline-block mb-1">{language === 'en' ? 'Available Panel Members' : 'অনলাইন মেন্টর প্যানেল'}</span>
              
              <div className="flex flex-col gap-3">
                {counselorsData.map((counselor) => (
                  <div 
                    key={counselor.id}
                    onClick={() => { setActiveCounselor(counselor.id); setScheduleSuccess(false); }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${activeCounselor === counselor.id ? 'bg-slate-900 border-sky-400 shadow-md shadow-sky-950/20' : 'bg-slate-900/45 border-slate-800 hover:border-slate-700'}`}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={counselor.avatar} 
                        alt={counselor.name} 
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-800"
                      />
                      <div>
                        <span className="block text-sm font-semibold text-white">{language === 'en' ? counselor.name : counselor.nameBn}</span>
                        <span className="block text-xs text-sky-300 mt-0.5">{language === 'en' ? counselor.role : counselor.roleBn}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end text-amber-400 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{counselor.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block mt-1">{language === 'en' ? 'Verifiable License' : 'রেজিস্টার্ড লাইসেন্স'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scheduler Right Interactive Form Column (6 cols) */}
          <div className="lg:col-span-6 flex items-center">
            <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 text-left shadow-2xl relative">
              
              <h3 className="text-lg font-bold text-white mb-1">
                {language === 'en' ? 'Instant Online Advisory Scheduler' : 'নিরাপদ অনলাইন পরামর্শ বুকিং'}
              </h3>
              <p className="text-xs text-slate-400 font-sans mb-6">
                {language === 'en' ? 'Confirm your session. Secure & completely evidence-graded.' : 'উইজেটের মাধ্যমে সময় নির্ধারণ করে আবেদন জমা দিন।'}
              </p>

              <form onSubmit={handleBookCounseling} className="flex flex-col gap-4">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    {language === 'en' ? 'Active Specialist Advisor Selected' : 'নির্বাচিত বিশেষজ্ঞ'}
                  </label>
                  <div className="bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800 text-xs font-semibold text-sky-300">
                    {counselorsData.find(c => c.id === activeCounselor)?.name || counselorsData[0].name}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-300">
                      {language === 'en' ? 'Full Patient Name' : 'রোগীর পুরো নাম'}
                    </label>
                    <input 
                      id="patient-name-input"
                      type="text" 
                      placeholder="e.g. Shakib Al Hasan"
                      required
                      value={scheduleName}
                      onChange={(e) => setScheduleName(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-300">
                      {language === 'en' ? 'Select Preferred Slot' : 'সময় নির্ধারণ করুন'}
                    </label>
                    <select 
                      id="slot-time-select"
                      required
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 font-sans shrink-0"
                    >
                      <option value="">{language === 'en' ? 'Choose time...' : 'সময় সিলেক্ট করুন...'}</option>
                      <option value="slot-1">07:00 PM - 07:30 PM (Mon)</option>
                      <option value="slot-2">08:00 PM - 08:30 PM (Mon)</option>
                      <option value="slot-3">06:00 PM - 06:30 PM (Tue)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/50 rounded-xl text-[10px] text-slate-400 font-sans leading-relaxed border border-slate-800/60">
                  <span className="font-bold text-sky-400 block mb-1">✓ Medicine Advisory Checklist:</span>
                  {language === 'en' 
                    ? 'Upon confirmation, please have all your physical syrup bottles, dosage sheets, and cardiologist/pediatric written prescriptions nearby to show your advisor.' 
                    : 'আবেদন নিশ্চিত হওয়ার পর আপনার রোগ নির্ণয় প্রেসক্রিপশন এবং বর্তমান ওষুধ ফাইল মেম্বারের সামনে উপস্থাপনের জন্য কাছে রাখুন।'}
                </div>

                <button
                  id="btn-confirm-booking"
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md shadow-sky-950/50 hover:shadow-sky-500/20 active:scale-98 cursor-pointer text-center block"
                >
                  {language === 'en' ? 'Confirm Medication Advisory Slip' : 'পরামর্শ স্লিপ নিশ্চিত করুন'}
                </button>

              </form>

              {/* Instant Scheduling Mock Booking Ticket feedback (High interactivity) */}
              {scheduleSuccess && (
                <div className="absolute inset-0 bg-slate-900/98 rounded-3xl p-6 flex flex-col items-center justify-center text-center animate-fade-in z-20">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {language === 'en' ? 'Advisory Scheduled Successfully!' : 'পরামর্শ বুকিং সফল হয়েছে!'}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
                    {language === 'en' 
                      ? `Congratulations ${scheduleName}, your safe dose advisory session is reserved on your slot. We have sent SMS with direct Google Meet Link.`
                      : `অভিনন্দন ${scheduleName}, আপনার মেন্টর স্লট টিকিট বুকড হয়েছে। আপনার ফোনে গুগল মিট যুক্ত এসএমএস পাঠানো হয়েছে।`}
                  </p>
                  <button 
                    id="btn-dismiss-success"
                    onClick={() => setScheduleSuccess(false)}
                    className="text-xs text-sky-400 hover:underline font-bold"
                  >
                    {language === 'en' ? 'Book Another Slot' : 'আরেকটি টিকিট বুক করুন'}
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
