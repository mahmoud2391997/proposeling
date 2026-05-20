import React, { useState } from 'react';
import { 
  HeartPulse, Activity, Pill, Baby, ShieldAlert, ChevronRight, BookOpen, Star, 
  Clock, ArrowUpRight, GraduationCap, ThumbsUp, Calendar, User, Search, Award, CheckCircle, Smartphone,
  ShoppingBag, Bookmark, Check, Users, ShieldCheck, MapPin, Sparkles, Quote, Mail, Inbox, FileText
} from 'lucide-react';
import { categoriesData, articlesData, coursesData, counselorsData, booksData } from '../data';
import { Course, Book, Article } from '../types';

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
  const [scheduleName, setScheduleName] = useState<string>('');
  const [scheduleEmail, setScheduleEmail] = useState<string>('');
  const [scheduleDetail, setScheduleDetail] = useState<string>('');
  const [scheduleSuccess, setScheduleSuccess] = useState<boolean>(false);

  // Book purchase modal states
  const [selectedBookForPurchase, setSelectedBookForPurchase] = useState<Book | null>(null);
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(1);
  const [purchaseName, setPurchaseName] = useState<string>('');
  const [purchasePhone, setPurchasePhone] = useState<string>('');
  const [purchaseAddress, setPurchaseAddress] = useState<string>('');
  const [purchaseSuccess, setPurchaseSuccess] = useState<boolean>(false);

  // Course enrollment modal state (non-blocking, beautiful iframe friendly!)
  const [enrolledCourse, setEnrolledCourse] = useState<Course | null>(null);
  const [enrollName, setEnrollName] = useState<string>('');
  const [enrollPhone, setEnrollPhone] = useState<string>('');
  const [enrollSuccess, setEnrollSuccess] = useState<boolean>(false);

  // Dosage calculator logic (fully functional interactive educational tool)
  const handleCalculateDose = (e: React.FormEvent) => {
    e.preventDefault();
    if (doseDrug === 'paracetamol') {
      if (doseAge === 'adult') {
        const advice = language === 'en'
          ? "Standard Dose: 500mg to 1000mg (1-2 tablets) every 4-6 hours. Absolute maximum is 4000mg (8 tablets) in 24 hours. Do not combine with multi-symptom cold syrups as they may secretly contain Acetaminophen."
          : "স্বাভাবিক মাত্রা: ৫০০মিগ্রা থেকে ১০০০মিগ্রা (১-২টি ট্যাবলেট) প্রতি ৪-৬ ঘণ্টা পর পর। ২৪ ঘণ্টায় সর্বোচ্চ মাত্রা ৪০০০মিগ্রা (৮টি ট্যাবলেট)। ঠাণ্ডা-কাশির অন্যান্য সিরাপের সাথে খাবেন না কারণ সেগুলোতে প্যারাসিটামল লুকিয়ে থাকে।";
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
          ? `Calculated Dose: ${pediatricDose}mg per single dose. Give every 4-6 hours. Do not exceed 4 doses in 24 hours. Always use the milliliter syringe/spoon provided with the suspension.`
          : `হিসাবকৃত সঠিক মাত্রা: একক ডোজে প্রায় ${pediatricDose} মিলিগ্রাম (সিরাপের পিছনের মিলি হিসেব দেখুন)। প্রতি ৪-৬ ঘণ্টা অন্তর সেব্য। ২৪ ঘণ্টায় ৪ বারের বেশি দেবেন না। ওয়ান-টাইম সিরিঞ্জ নিয়ে খাওয়ান।`;
        setCalculatedAdvice(adviceChild);
      }
    } else if (doseDrug === 'amlodipine') {
      const adviceAmlodipine = language === 'en'
        ? "Cardiology Advisory: Standard dosage typically initiates at 5mg orally once daily, adjusting up to 10mg max per doctor directive. WARNING: Avoid Grapefruit juice or Simvastatin 20mg+ combinations."
        : "কার্ডিওলজি সতর্কতা: রক্তচাপ নিয়ন্ত্রণে সাধারণত প্রতিদিন ৫ মিলিগ্রাম দিয়ে শুরু হয়, চিকিৎসকের নির্দেশিকায় সর্বোচ্চ ১০ মিলিগ্রাম পর্যন্ত নেওয়া যেতে পারে। সতর্কতা: জাম্বুরা বা বাতাবি লেবু পরিহার করুন।";
      setCalculatedAdvice(adviceAmlodipine);
    } else {
      const adviceAntacid = language === 'en'
        ? "Antacid Guidelines: 1-2 chewable tablets or 10-20ml suspension taken 1 hour after meals and at bedtime. Warning: Antacids can bind other critical drugs. Consume other medicines 2 hours before or 4 hours after."
        : "অ্যান্টাসিড নির্দেশিকা: খাবারের ১ ঘণ্টা পর এবং ঘুমানোর আগে ১০-২০ মিলি অথবা ১-২টি চুষে খাওয়ার ট্যাবলেট। সতর্কতা: অ্যান্টাসিড অন্যান্য প্রয়োজনীয় ওষুধ শোষণ ব্যাহত করে (যেমন অ্যান্টিবায়োটিক)। তাই আগে পরে গ্যাপ রাখুন।";
      setCalculatedAdvice(adviceAntacid);
    }
  };

  const handleBookCounselingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (scheduleName && scheduleEmail && scheduleDetail) {
      setScheduleSuccess(true);
      setTimeout(() => {
        setScheduleSuccess(false);
        setScheduleName('');
        setScheduleEmail('');
        setScheduleDetail('');
      }, 5000);
    }
  };

  const handleBookPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (purchaseName && purchasePhone && purchaseAddress) {
      setPurchaseSuccess(true);
      setTimeout(() => {
        setPurchaseSuccess(false);
        setSelectedBookForPurchase(null);
        setPurchaseName('');
        setPurchasePhone('');
        setPurchaseAddress('');
        setPurchaseQuantity(1);
      }, 5000);
    }
  };

  const handleEnrollCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (enrollName && enrollPhone) {
      setEnrollSuccess(true);
      setTimeout(() => {
        setEnrollSuccess(false);
        setEnrolledCourse(null);
        setEnrollName('');
        setEnrollPhone('');
      }, 5000);
    }
  };

  return (
    <div id="homepage_root" className="w-full bg-white font-sans text-slate-800 antialiased">
      
      {/* 📢 Active Course Admission top ribbon alert */}
      <div id="admission-alert-ribbon" className="w-full bg-[#f0f5ff] border-b border-blue-100 py-3 px-4 text-center text-xs md:text-sm text-slate-700 font-sans flex items-center justify-center gap-2 flex-wrap shadow-inner">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#1153fc] text-white uppercase tracking-widest animate-pulse shrink-0">
          Admission Open
        </span>
        <span className="font-semibold text-xs md:text-sm text-slate-800">
          {language === 'en' 
            ? "Admission is active for Medicine Knowledge Course – 1st Batch!" 
            : "ভর্তির আবেদন চলমান আছে মেডিসিন নলেজ কোর্সের ১ম ব্যাচে!"}
        </span>
        <span className="text-slate-300 hidden md:inline">|</span>
        <button 
          id="btn-alert-ribbon-enroll"
          onClick={() => {
            const el = document.getElementById('courses-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[#1153fc] hover:text-[#0b3ec5] font-bold hover:underline inline-flex items-center gap-1 active:scale-95 text-xs md:text-sm"
        >
          <span>{language === 'en' ? "Secure Your Seat Now" : "আজই আপনার সিট বুক করুন"}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ----------------- SECTION 2: HERO SECTION ----------------- */}
      <section id="hero-section" className="relative bg-[#f5f8ff] pt-16 pb-20 px-6 sm:px-12 md:px-16 overflow-hidden border-b border-slate-100">
        
        {/* Subtle Annotated Tag */}
        <div className="absolute top-4 left-6 z-20">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            02. HERO SECTION
          </span>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 text-left items-center pt-4">
          
          {/* Hero Left Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-blue-100/60 rounded-full px-4 py-1.5 w-fit text-xs text-[#1153fc] font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span>{language === 'en' ? 'Evidence-Based Medicine Learning' : 'বাংলায় Evidence-Based Medicine Learning'}</span>
            </div>

            <h1 className="text-3xl sm:text-4.5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight text-[#0f172a] font-sans">
              {language === 'en' ? (
                <span>Stop Secret Self-Medicating. Learn <span className="text-[#1153fc]">Rational Drug Use</span> Today.</span>
              ) : (
                <span>ঔষধের সঠিক ব্যবহার শিখুন, বুঝুন এবং নিরাপদ থাকুন</span>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans max-w-2xl">
              {language === 'en'
                ? 'Medicine Mentor is a premium digital counseling and clinical health education platform. Read evidence-based drug reviews, schedule online consultations, and access children pediatric guide tools.'
                : 'Evidence-based medicine education, বই এবং বিশেষজ্ঞ গাইডলাইন— সব এক প্ল্যাটফর্মে। আপনাদের স্বাস্থ্য ও সঠিক ওষুধ ব্যবহার সচেতনতা নিশ্চিত করাই আমাদের মিশন।'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button 
                id="hero-read-courses"
                onClick={() => {
                  const el = document.getElementById('courses-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white font-bold px-7 py-3 rounded-xl shadow-sm transition-all text-sm cursor-pointer text-center inline-flex items-center justify-center gap-2 shadow-blue-200"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{language === 'en' ? 'View Courses' : 'কোর্স দেখুন'}</span>
              </button>
              
              <button 
                id="hero-consult-now"
                onClick={() => {
                  const el = document.getElementById('consult-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-teal-600 font-bold px-7 py-3 rounded-xl border-2 border-teal-500 transition-all text-sm cursor-pointer text-center inline-flex items-center justify-center gap-2"
              >
                <HeartPulse className="w-4 h-4" />
                <span>{language === 'en' ? 'Get Counseling' : 'কাউন্সেলিং নিন'}</span>
              </button>
            </div>
          </div>

          {/* Hero Right Image representation matching user image */}
          <div className="lg:col-span-5 flex justify-center items-center w-full relative">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" 
                alt="Doctor explaining prescription layout to female patient" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-md max-w-[200px] text-left">
                <span className="block text-xs font-bold text-[#1153fc] uppercase">Licensed Advice</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">By Qualified Clinical Pharmacists</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 3: TRUST BAR ----------------- */}
      <section id="trust-bar-section" className="bg-[#f8fafc] border-b border-slate-100 py-6 px-6 relative">
        <div className="absolute top-1 left-6 z-10">
          <span className="text-slate-400 text-[9px] font-mono uppercase tracking-wider">
            03. TRUST BAR
          </span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 pt-1 text-left">
          {/* Grid Card 1 */}
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
            <div className="p-2.5 bg-blue-50 text-[#1153fc] rounded-lg shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-extrabold text-[#0f172a] tracking-tight">১২০০+</span>
              <span className="text-xs text-slate-500 block leading-tight">শিক্ষার্থী</span>
            </div>
          </div>

          {/* Grid Card 2 */}
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
            <div className="p-2.5 bg-blue-50 text-[#1153fc] rounded-lg shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-extrabold text-[#0f172a] tracking-tight">৬০+</span>
              <span className="text-xs text-slate-500 block leading-tight">আর্টিকেল</span>
            </div>
          </div>

          {/* Grid Card 3 */}
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
            <div className="p-2.5 bg-blue-50 text-[#1153fc] rounded-lg shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-extrabold text-[#0f172a] tracking-tight">৩০০+</span>
              <span className="text-xs text-slate-500 block leading-tight">কাউন্সেলিং</span>
            </div>
          </div>

          {/* Grid Card 4 */}
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
            <div className="p-1 px-2 rounded bg-red-50 shrink-0">
              <div className="w-7 h-5 bg-[#006a4e] rounded relative border border-emerald-700 overflow-hidden flex items-center justify-center">
                <span className="absolute w-3.5 h-3.5 bg-[#f42a41] rounded-full left-1"></span>
              </div>
            </div>
            <div>
              <span className="block text-sm font-extrabold text-[#0f172a] leading-tight">বাংলাদেশভিত্তিক</span>
              <span className="text-xs text-slate-500 block leading-tight">প্ল্যাটফর্ম</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 4: WHAT WE DO ----------------- */}
      <section id="categories-section" className="py-16 px-6 bg-white relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            04. WHAT WE DO
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4">
          <div className="text-center flex flex-col items-center gap-1.5">
            <h2 className="text-2.5xl md:text-3.5xl font-extrabold text-[#0f172a] tracking-tight">আমাদের কাজ কী?</h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl leading-relaxed font-sans">
              Medicine Mentor আপনাকে শেখা, জানা এবং সঠিক গাইডলাইন পেতে সাহায্য করে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Learn */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-blue-50 text-[#1153fc] rounded-full">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">শিখুন (Courses)</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                  Structured medicine learning
                </p>
              </div>
              <button 
                onClick={() => {
                  const el = document.getElementById('courses-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-6 text-xs font-bold text-[#1153fc] flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0"
              >
                <span>কোর্স ঘুরে দেখুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Read */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-full">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">পড়ুন (Books & Articles)</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                  সহজ ভাষায় স্বাস্থ্য জ্ঞান
                </p>
              </div>
              <button 
                onClick={() => {
                  const el = document.getElementById('books-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-6 text-xs font-bold text-[#1153fc] flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0"
              >
                <span>বইসমূহ পড়ুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Counsel */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-full">
                  <HeartPulse className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">গাইডলাইন নিন (Counseling)</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                  রোগ ও ওষুধ বিষয়ে গাইডলাইন
                </p>
              </div>
              <button 
                onClick={() => {
                  const el = document.getElementById('consult-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-6 text-xs font-bold text-[#1153fc] flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0"
              >
                <span>পরামর্শ স্লট জানুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <div className="flex justify-center mt-4">
            <button 
              id="explore-all-services"
              onClick={() => {
                const el = document.getElementById('courses-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Explore All Services
            </button>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 5: FEATURED COURSES ----------------- */}
      <section id="courses-section" className="py-16 px-6 bg-[#f8fafc] border-y border-slate-100 relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            05. FEATURED COURSES
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4 text-left">
          
          <div className="flex justify-between items-end border-b border-slate-150 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">জনপ্রিয় কোর্স</h2>
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('courses-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#1153fc] flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0"
            >
              <span>সব কোর্স দেখুন</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {coursesData.map((course) => (
              <div 
                key={course.id}
                className="bg-white border border-slate-150/80 rounded-2xl p-4.5 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-slate-100 relative mb-4">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                      {language === 'en' ? course.badge : course.badgeBn}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] text-teal-600 font-semibold uppercase">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                      <span>{language === 'en' ? course.instructor : course.instructorBn}</span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug tracking-tight group-hover:text-[#1153fc] min-h-[36px] line-clamp-2">
                      {language === 'en' ? course.title : course.titleBn}
                    </h3>

                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono mt-0.5">
                      <span className="flex items-center gap-0.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{language === 'en' ? course.duration : course.durationBn}</span>
                      </span>
                      <span>•</span>
                      <span>{language === 'en' ? course.lessons + ' Lessons' : course.lessonsBn}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-extrabold text-slate-900">{language === 'en' ? course.price : course.priceBn}</span>
                    <span className="text-[10px] text-slate-400 line-through">{language === 'en' ? course.originalPrice : course.originalPriceBn}</span>
                  </div>

                  <button 
                    id={`btn-course-enroll-${course.id}`}
                    onClick={() => {
                      setEnrolledCourse(course);
                      setEnrollSuccess(false);
                    }}
                    className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white px-3.5 py-1.5 rounded-lg text-[11px] font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Get Course' : 'বিস্তারিত দেখুন'}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 6: OUR PUBLISHED BOOKS ----------------- */}
      <section id="books-section" className="py-16 px-6 bg-white relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            06. FEATURED BOOKS
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4 text-left">
          
          <div className="flex justify-between items-end border-b border-slate-150 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">আমাদের বই</h2>
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('books-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#1153fc] flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0"
            >
              <span>সব বই দেখুন</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {booksData.map((book) => (
              <div 
                key={book.id}
                className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shrink-0 bg-slate-50 relative mb-4 shadow-sm border border-slate-100">
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:-translate-y-1 transition-transform"
                    />
                    <span className="absolute top-2 left-2 bg-[#1153fc] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">
                      {language === 'en' ? book.badge : book.badgeBn}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 min-h-[36px]">
                      {language === 'en' ? book.title : book.titleBn}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-450 text-slate-500">
                      {language === 'en' ? book.author : book.authorBn}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-50 flex items-center justify-between mt-3.5">
                  <span className="text-sm font-extrabold text-[#0f172a]">
                    {language === 'en' ? book.price : book.priceBn}
                  </span>

                  <button
                    id={`btn-buy-book-${book.id}`}
                    onClick={() => {
                      setSelectedBookForPurchase(book);
                      setPurchaseQuantity(1);
                      setPurchaseSuccess(false);
                    }}
                    className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white px-3.5 py-1.5 rounded-lg text-[11px] font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Buy Book' : 'বই দেখুন'}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 7: ARTICLES / BLOG ----------------- */}
      <section id="articles-section" className="py-16 px-6 bg-[#f8fafc] border-y border-slate-100 relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            07. ARTICLES / BLOG
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4 text-left">
          
          <div className="flex justify-between items-end border-b border-slate-150 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">স্বাস্থ্য বিষয়ক গুরুত্বপূর্ণ লেখা</h2>
            </div>
            <button 
              onClick={() => setCurrentView('article')}
              className="text-xs font-bold text-[#1153fc] flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0"
            >
              <span>সব আর্টিকেল দেখুন</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* UTI Article Card */}
            <div 
              onClick={() => setCurrentView('article')}
              className="bg-white border border-slate-150 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&auto=format&fit=crop" 
                    alt="UTI treatment guidelines"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[9px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md w-fit font-mono uppercase">
                    UTI
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-[#1153fc] min-h-[36px]">
                    ইউটিআই কেন হয় এবং কিভাবে প্রতিরোধ করবেন
                  </h3>
                </div>
              </div>
              <div className="pt-2.5 mt-3 border-t border-slate-50 text-[10px] text-slate-400 font-mono text-left">
                3 min read
              </div>
            </div>

            {/* Antibiotics Card */}
            <div 
              onClick={() => setCurrentView('article')}
              className="bg-white border border-slate-150 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop" 
                    alt="Antibiotic guidance"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[9px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md w-fit font-mono uppercase">
                    Antibiotic
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-[#1153fc] min-h-[36px]">
                    অ্যান্টিবায়োটিক সেবনের সঠিক নিয়ম
                  </h3>
                </div>
              </div>
              <div className="pt-2.5 mt-3 border-t border-slate-50 text-[10px] text-slate-400 font-mono text-left">
                4 min read
              </div>
            </div>

            {/* Child Care Card */}
            <div 
              onClick={() => setCurrentView('article')}
              className="bg-white border border-slate-150 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1502740479091-6398b19d99f4?q=80&w=400&auto=format&fit=crop" 
                    alt="Child fever care guidance"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md w-fit font-mono uppercase">
                    Child Care
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-[#1153fc] min-h-[36px]">
                    শিশুর সর্দি-কাশি: কখন ডাক্তারের কাছে যাবেন
                  </h3>
                </div>
              </div>
              <div className="pt-2.5 mt-3 border-t border-slate-50 text-[10px] text-slate-400 font-mono text-left">
                3 min read
              </div>
            </div>

            {/* Medicine Safety Card */}
            <div 
              onClick={() => setCurrentView('article')}
              className="bg-white border border-slate-150 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop" 
                    alt="Pill warnings and interaction tracking"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[9px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md w-fit font-mono uppercase">
                    Medicine Safety
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-[#1153fc] min-h-[36px]">
                    ওষুধের পার্শ্বপ্রতিক্রিয়া চিনবেন যেভাবে
                  </h3>
                </div>
              </div>
              <div className="pt-2.5 mt-3 border-t border-slate-50 text-[10px] text-slate-400 font-mono text-left">
                5 min read
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- SECTION 8: WHY TRUST MEDICINE MENTOR ----------------- */}
      <section id="trust-factors-section" className="py-16 px-6 bg-white relative border-b border-rose-50/20">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            08. WHY TRUST MEDICINE MENTOR
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4 items-center">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">কেন Medicine Mentor-কে বিশ্বাস করবেন?</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl">
            
            {/* Trust 1 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col items-center gap-2.5 max-w-[180px] text-center shadow-tiny hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 font-sans tracking-tight leading-snug">Evidence-based information</span>
            </div>

            {/* Trust 2 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col items-center gap-2.5 max-w-[180px] text-center shadow-tiny hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 font-sans tracking-tight leading-snug">Registered Pharmacist guidance</span>
            </div>

            {/* Trust 3 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col items-center gap-2.5 max-w-[180px] text-center shadow-tiny hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 font-sans tracking-tight leading-snug">বাংলা সহজ ভাষা</span>
            </div>

            {/* Trust 4 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col items-center gap-2.5 max-w-[180px] text-center shadow-tiny hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 font-sans tracking-tight leading-snug">Patient safety focused</span>
            </div>

            {/* Trust 5 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col items-center gap-2.5 max-w-[180px] text-center shadow-tiny hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 font-sans tracking-tight leading-snug">Updated medical content</span>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 8-B: DOSAGE SAFETY REGULATORY CALCULATOR (INTEGRATED EXCLUSIVE TOOL) ----------------- */}
      <section id="dosage-calc-integrated-section" className="py-12 px-6 bg-slate-50 border-y border-slate-100 relative">
        <div className="absolute top-1.5 left-6 z-10">
          <span className="text-slate-400 text-[9px] font-mono uppercase tracking-wider">
            08-B. DOSAGE SAFETY TOOL
          </span>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            
            {/* Explainer Left */}
            <div className="md:w-1/2 flex flex-col justify-between text-left">
              <div className="flex flex-col gap-2">
                <span className="text-[#1153fc] font-bold text-xs uppercase font-mono tracking-wide">{language === 'en' ? 'Clinical Safety Widget' : 'ক্লিনিক্যাল ডোজ ক্যালকুলেটর'}</span>
                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">শিশুর সঠিক ওজনের ও প্যারাসিটামল মাত্রা নির্ণয়</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  আন্দাজে ওষুধের সিরাপ না খাইয়ে বিশ্ব স্বাস্থ্য সংস্থা এবং শিশুর বয়স ও ওজনের ভিত্তিতে সঠিক প্যারাসিটামলের মাত্রা সেকেন্ডে জেনে নিন।
                </p>
              </div>
              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-[10.5px] text-slate-600 font-sans mt-4">
                বি.দ্র: ডোজ শেষ হওয়ার পর অন্তত ৪ ঘণ্টা বিরতি রাখুন। ওটিসি ব্যথানাশক অতি সেবনে শিশুর ক্রনিক লিভারের জটিলতা হতে পারে।
              </div>
            </div>

            {/* Form Right */}
            <div className="md:w-1/2 flex flex-col gap-4 text-left border-t md:border-t-0 md:border-l border-slate-150 pt-5 md:pt-0 md:pl-5">
              <form onSubmit={handleCalculateDose} className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-705">{language === 'en' ? 'Select Drug' : 'মেডিসিন সিলেক্ট করুন'}</label>
                  <select 
                    value={doseDrug} 
                    onChange={(e) => { setDoseDrug(e.target.value); setCalculatedAdvice(null); }}
                    className="border border-slate-250 bg-slate-50 text-xs rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-blue-400 outline-none w-full"
                  >
                    <option value="paracetamol">Paracetamol Syrup / Suspension</option>
                    <option value="amlodipine">Amlodipine (Hypertension Guard)</option>
                    <option value="antacid">Antacid Liquid Suspension / Tab</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-705">{language === 'en' ? 'Age' : 'বয়স গ্রুপ'}</label>
                    <select
                      value={doseAge}
                      onChange={(e) => { setDoseAge(e.target.value as 'adult' | 'child'); setCalculatedAdvice(null); }}
                      className="border border-slate-250 bg-slate-50 text-xs rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-blue-400 outline-none w-full"
                    >
                      <option value="child">Child (শিশুর বয়স)</option>
                      <option value="adult">Adult (প্রাপ্তবয়স্ক)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-705">{language === 'en' ? 'Weight (KG)' : 'সঠিক ওজন (কেজি)'}</label>
                    <input 
                      type="number" 
                      placeholder="0"
                      disabled={doseAge === 'adult'}
                      value={doseAge === 'adult' ? '' : doseWeight}
                      onChange={(e) => { setDoseWeight(e.target.value); setCalculatedAdvice(null); }}
                      className="border border-slate-250 bg-slate-50 text-xs rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-blue-400 focus:bg-white outline-none w-full disabled:opacity-50"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white text-xs font-bold py-2.5 rounded-xl cursor-pointer"
                >
                  {language === 'en' ? 'Calculate Safe Dosage Limit' : 'নিরাপদ গাইডলাইন হিসাব করুন'}
                </button>
              </form>

              {calculatedAdvice && (
                <div className="mt-2 p-3 bg-blue-50/50 border border-blue-200 rounded-lg text-xs leading-relaxed text-slate-700 font-sans text-left animate-fade-in">
                  <span className="font-bold text-[#1153fc] block mb-0.5">✓ রেজাল্ট গাইডলাইন:</span>
                  {calculatedAdvice}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 09: COUNSELING SECTION ----------------- */}
      <section id="consult-section" className="py-16 px-6 bg-slate-50 relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            09. COUNSELING SECTION
          </span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 text-left flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                আপনার সমস্যা অনুযায়ী গাইডলাইন নিন
              </h2>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans max-w-lg mt-1">
                ঔষধ, রোগ, পার্শ্বপ্রতিক্রিয়া বা চিকিৎসা নিয়ে বিভ্রান্ত? আমাদের সাথে যোগাযোগ করুন।
              </p>
            </div>

            {/* Steps Vertical Timeline */}
            <div className="flex flex-col gap-4 max-w-md mt-2">
              
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1153fc] font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="text-left pt-1">
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">করণী পূরণ করুন</h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-sans">নিচের ফর্মে আপনার সঠিক নাম, সচল ইমেইল ও রোগের বিস্তারিত সমস্যার কথা লিখে সাবমিট দিন।</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1153fc] font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="text-left pt-1">
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">আমাদের টিম রিভিউ করবে</h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-sans">রেজিস্টার্ড ও অত্যন্ত দক্ষ গ্র্যাজুয়েট ফার্মাকোলজিস্টদের সমন্বয়ে গঠিত প্যানেল আপনার সমস্যা যাচাই করবে।</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1153fc] font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="text-left pt-1">
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">আপনাকে গাইডলাইন দেওয়া হবে</h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-sans">গুগল মিট বা ডিরেক্ট প্রেসক্রিপশন ক্লিনিং কলসহ ইমেইলের মাধ্যমে পূর্ণাঙ্গ বিজ্ঞানসম্মত গাইডলাইন পাঠানো হবে।</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Form (6 cols) */}
          <div className="lg:col-span-6 relative w-full">
            <div className="w-full bg-[#ecf3fe]/40 border-2 border-[#14b8a6]/40 rounded-2xl p-6 md:p-8 text-left relative z-10 bg-white">
              <h3 className="text-base font-extrabold text-[#0f172a] mb-5 border-b border-slate-150 pb-3 font-sans">
                পরামর্শ স্লট টিকিট স্লিপ আবেদন
              </h3>

              {scheduleSuccess ? (
                <div className="py-8 text-center flex flex-col items-center gap-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#14b8a6] flex items-center justify-center border border-[#14b8a6] shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-extrabold text-slate-905 text-[#0f172a] text-sm md:text-base">
                    আবেদনটি সফলভাবে জমা হয়েছে!
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-sans mx-auto text-center">
                    ধন্যবাদ {scheduleName}, আপনার বিস্তারিত বিবরণ প্যানেল বিশেষজ্ঞরা রিভিউ করছেন। খুব শীগ্রই ইমেলের মাধ্যমে প্রেসক্রিপশন ব্লু-প্রিন্ট পাঠানো হবে।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookCounselingSubmit} className="flex flex-col gap-4 font-sans text-left">
                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-bold text-slate-700">আপনার নাম</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Shakib Al Hasan"
                      value={scheduleName}
                      onChange={(e) => setScheduleName(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#14b8a6] outline-none w-full text-left"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-bold text-slate-700">আপনার ইমেইল</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. shakib@domain.com"
                      value={scheduleEmail}
                      onChange={(e) => setScheduleEmail(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#14b8a6] outline-none w-full text-left"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-bold text-slate-700">সমস্যার বিবরণ লিখুন...</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="আপনার বয়স, কি কি ওষুধ খাচ্ছেন বা কি কি পার্শ্বপ্রতিক্রিয়া হচ্ছে বিস্তারিত এখানে লিখুন..."
                      value={scheduleDetail}
                      onChange={(e) => setScheduleDetail(e.target.value)}
                      className="border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#14b8a6] outline-none resize-none w-full text-left"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#14b8a6] hover:bg-[#0d9488] text-white py-3 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-98 cursor-pointer mt-2 text-center"
                  >
                    এখনই কাউন্সেলিং নিন
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 10: TEAM SECTION ----------------- */}
      <section id="team-section" className="py-16 px-6 bg-white relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            10. TEAM SECTION
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4 text-center">
          
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-2.5xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">আমাদের টিম</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            {/* Team 1 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 flex flex-col items-center text-center shadow-tiny hover:shadow transition-shadow group">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3.5 bg-slate-100 border-2 border-slate-200 group-hover:border-blue-500 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop" 
                  alt="MD. NAYON KARIGOR" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-extrabold text-[#0f172a] text-sm sm:text-base leading-tight">MD. NAYON KARIGOR</h4>
              <span className="text-[11px] text-[#1153fc] font-bold mt-1 uppercase">Founder & CEO</span>
              
              {/* Social icons f & in */}
              <div className="flex items-center gap-3 mt-4 text-xs font-bold text-slate-400">
                <a href="#" className="hover:text-blue-600 font-mono transition-all">f</a>
                <span className="text-slate-200">|</span>
                <a href="#" className="hover:text-blue-500 font-mono transition-all">in</a>
              </div>
            </div>

            {/* Team 2 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 flex flex-col items-center text-center shadow-tiny hover:shadow transition-shadow group">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3.5 bg-slate-100 border-2 border-slate-200 group-hover:border-blue-500 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=200&auto=format&fit=crop" 
                  alt="SADIA RAHMAN" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-extrabold text-[#0f172a] text-sm sm:text-base leading-tight">SADIA RAHMAN</h4>
              <span className="text-[11px] text-[#1153fc] font-bold mt-1 uppercase">Pharmacist</span>
              
              <div className="flex items-center gap-3 mt-4 text-xs font-bold text-slate-400">
                <a href="#" className="hover:text-blue-600 font-mono transition-all">f</a>
                <span className="text-slate-200">|</span>
                <a href="#" className="hover:text-blue-500 font-mono transition-all">in</a>
              </div>
            </div>

            {/* Team 3 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 flex flex-col items-center text-center shadow-tiny hover:shadow transition-shadow group">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3.5 bg-slate-100 border-2 border-slate-200 group-hover:border-blue-500 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop" 
                  alt="RAKIB HASAN" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-extrabold text-[#0f172a] text-sm sm:text-base leading-tight">RAKIB HASAN</h4>
              <span className="text-[11px] text-[#1153fc] font-bold mt-1 uppercase">Content Manager</span>
              
              <div className="flex items-center gap-3 mt-4 text-xs font-bold text-slate-400">
                <a href="#" className="hover:text-blue-600 font-mono transition-all">f</a>
                <span className="text-slate-200">|</span>
                <a href="#" className="hover:text-blue-500 font-mono transition-all">in</a>
              </div>
            </div>

            {/* Team 4 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 flex flex-col items-center text-center shadow-tiny hover:shadow transition-shadow group">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3.5 bg-slate-100 border-2 border-slate-200 group-hover:border-blue-500 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" 
                  alt="MAHMUDUL HASAN" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-extrabold text-[#0f172a] text-sm sm:text-base leading-tight">MAHMUDUL HASAN</h4>
              <span className="text-[11px] text-[#1153fc] font-bold mt-1 uppercase">Junior Pharmacist</span>
              
              <div className="flex items-center gap-3 mt-4 text-xs font-bold text-slate-400">
                <a href="#" className="hover:text-blue-600 font-mono transition-all">f</a>
                <span className="text-slate-200">|</span>
                <a href="#" className="hover:text-blue-500 font-mono transition-all">in</a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- SECTION 11: TESTIMONIALS ----------------- */}
      <section id="testimonials-section" className="py-16 px-6 bg-[#f8fafc] border-y border-slate-100 relative">
        <div className="absolute top-4 left-6 z-10">
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            11. TESTIMONIALS
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-4 text-center items-center">
          
          <div className="flex flex-col items-center gap-1.5 text-center">
            <h2 className="text-2.5xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">যারা আমাদের সাথে ছিলেন</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            
            {/* Review 1 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative text-left">
              <div className="flex flex-col gap-3">
                <span className="text-xl text-blue-500 font-mono leading-none flex items-center shrink-0">“</span>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans mt-1">
                  সহজ ভাষায় medicine বুঝতে পেরেছি। কোর্সগুলো অনেক উপকারী।
                </p>
              </div>
              <div className="pt-3 border-t border-slate-50 flex items-center gap-3 mt-5">
                <div className="w-9 h-9 rounded-full bg-blue-50 shrink-0 flex items-center justify-center font-bold text-xs text-[#1153fc]">
                  মি
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-[#0f172a]">মাহফুজ ইসলাম</span>
                  <span className="block text-[10px] text-slate-400">Student</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative text-left">
              <div className="flex flex-col gap-3">
                <span className="text-xl text-blue-500 font-mono leading-none flex items-center shrink-0">“</span>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans mt-1">
                  কাউন্সেলিং সার্ভিস থেকে খুব তড়িৎ ও সঠিক গাইডলাইন পেয়েছি। ধন্যবাদ।
                </p>
              </div>
              <div className="pt-3 border-t border-slate-50 flex items-center gap-3 mt-5">
                <div className="w-9 h-9 rounded-full bg-blue-50 shrink-0 flex items-center justify-center font-bold text-xs text-[#1153fc]">
                  সা
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-[#0f172a]">সাবিনা ইয়াসমিন</span>
                  <span className="block text-[10px] text-slate-400">Housewife</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative text-left">
              <div className="flex flex-col gap-3">
                <span className="text-xl text-blue-500 font-mono leading-none flex items-center shrink-0">“</span>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans mt-1">
                  বাংলায় এত সুন্দর ও গুছানো তথ্য আগে কোথাও পাইনি।
                </p>
              </div>
              <div className="pt-3 border-t border-slate-50 flex items-center gap-3 mt-5">
                <div className="w-9 h-9 rounded-full bg-blue-50 shrink-0 flex items-center justify-center font-bold text-xs text-[#1153fc]">
                  রা
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-[#0f172a]">রকিব হোসেন</span>
                  <span className="block text-[10px] text-slate-400">Learner</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛍️ Dynamic Interactive Delivery / Buy Modal */}
      {selectedBookForPurchase && (
        <div id="book-order-modal" className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-slate-100 text-left animate-in fade-in zoom-in-95 duration-250 flex flex-col gap-5">
            
            <div className="flex justify-between items-start border-b border-slate-150 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-[#1153fc] tracking-wider font-mono">
                  {language === 'en' ? 'Direct Shipping Order' : 'সরাসরি কুরিয়ার হোম ডেলিভারি'}
                </span>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                  {language === 'en' ? 'Order Details' : 'বই অর্ডার নিশ্চিতকরণ'}
                </h3>
              </div>
              <button
                id="close-order-modal"
                onClick={() => setSelectedBookForPurchase(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm font-bold transition-all cursor-pointer border-0 outline-none"
              >
                ✕
              </button>
            </div>

            {purchaseSuccess ? (
              <div className="py-6 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="flex flex-col gap-1.5 text-center">
                  <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                    {language === 'en' ? 'Order Submitted Successfully!' : 'অর্ডারটি সফলভাবে জমা হয়েছে!'}
                  </h4>
                  <p className="text-xs text-slate-500 px-4 leading-relaxed font-sans text-center">
                    {language === 'en' 
                      ? 'We will contact you within 24 hours at your provided number to verify delivery details. Cash on Delivery is active.'
                      : 'আমাদের প্রতিনিধি আগামী ২৪ ঘণ্টার মধ্যে আপনার প্রদত্ত নাম্বারে কল করে অর্ডারটি নিশ্চিত করবেন। ধন্যবাদ!'}
                  </p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl w-full text-left border border-slate-100 font-mono text-xs flex flex-col gap-1.5 mt-2">
                  <div className="flex justify-between text-slate-500">
                    <span>Invoice:</span>
                    <span>#MMB-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-bold">
                    <span>Book Name:</span>
                    <span className="truncate max-w-[200px]">{language === 'en' ? selectedBookForPurchase.title : selectedBookForPurchase.titleBn}</span>
                  </div>
                  <div className="flex justify-between text-[#1153fc] font-bold border-t border-dashed border-slate-200 pt-1.5">
                    <span>Total Bill:</span>
                    <span>৳{ (350 * purchaseQuantity) + 50 } (COD Active)</span>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookPurchase} className="flex flex-col gap-4 font-sans text-left">
                
                <div className="flex gap-4 items-center bg-blue-50/50 p-3 rounded-2xl border border-blue-100">
                  <img 
                    src={selectedBookForPurchase.image} 
                    alt={selectedBookForPurchase.title}
                    className="w-10 h-14 object-cover rounded shadow-sm shrink-0"
                  />
                  <div className="flex-grow text-left">
                    <h5 className="font-extrabold text-xs text-slate-900 leading-tight">
                      {language === 'en' ? selectedBookForPurchase.title : selectedBookForPurchase.titleBn}
                    </h5>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {language === 'en' ? 'By ' + selectedBookForPurchase.author : selectedBookForPurchase.authorBn}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-[#1153fc]">{language === 'en' ? selectedBookForPurchase.price : selectedBookForPurchase.priceBn}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setPurchaseQuantity(Math.max(1, purchaseQuantity - 1))}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold flex items-center justify-center text-slate-600 border-0"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{purchaseQuantity}</span>
                    <button
                      type="button"
                      onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold flex items-center justify-center text-slate-600 border-0"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-bold text-slate-705">আপনার নাম</label>
                    <input
                      type="text"
                      required
                      value={purchaseName}
                      onChange={(e) => setPurchaseName(e.target.value)}
                      placeholder="যেমন: এমডি. হাসান আলী"
                      className="border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-blue-400 outline-none w-full text-left"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-bold text-slate-705">কন্টাক্ট মোবাইল নম্বর</label>
                    <input
                      type="tel"
                      required
                      value={purchasePhone}
                      onChange={(e) => setPurchasePhone(e.target.value)}
                      placeholder="যেমন: ০১৭১২XXXXXX"
                      className="border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-blue-400 outline-none w-full text-left"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-bold text-slate-705">কুরিয়ার ঠিকানা (ফুল এড্রেস)</label>
                    <textarea
                      required
                      rows={2}
                      value={purchaseAddress}
                      onChange={(e) => setPurchaseAddress(e.target.value)}
                      placeholder="আপনার বাসা নং, গ্রাম বা ইউনিয়ন, থানা এবং জেলা সুনির্দিষ্ট লিখুন"
                      className="border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-blue-400 outline-none resize-none w-full text-left"
                    />
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl text-[11px] flex flex-col gap-1 border border-slate-100 font-sans text-slate-600 mt-1">
                  <div className="flex justify-between">
                    <span>বইয়ের মূল্য:</span>
                    <span className="font-bold text-slate-800">৳{350 * purchaseQuantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>কুরিয়ার ডেলিভারি চার্জ:</span>
                    <span className="text-emerald-600 font-bold">৳৫০ (Fixed Promo)</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-900 font-extrabold border-t border-dashed border-slate-200 pt-2 selection-none">
                    <span>ডেলিভারিতে মোট প্রদেয় বিল:</span>
                    <span className="text-indigo-600">৳{ (350 * purchaseQuantity) + 50 }</span>
                  </div>
                </div>

                <div className="flex gap-2 justify-end mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedBookForPurchase(null)}
                    className="border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer border-0"
                  >
                    অর্ডার সম্পন্ন করুন
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* 🎓 Dynamic Interactive Course Enrollment Modal Instead of alert */}
      {enrolledCourse && (
        <div id="course-admission-modal" className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-150 text-left animate-in fade-in zoom-in-95 duration-205 flex flex-col gap-4">
            
            <div className="flex justify-between items-start border-b border-slate-150 pb-3">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[10px] uppercase font-bold text-[#1153fc] tracking-wider font-mono">
                  Online Training Portal
                </span>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                  মেডিসিন কোর্স এডমিশন ফরম
                </h3>
              </div>
              <button
                id="close-enroll-modal"
                onClick={() => setEnrolledCourse(null)}
                className="text-slate-400 hover:text-slate-600 p-1 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-bold transition-all cursor-pointer border-0 outline-none"
              >
                ✕
              </button>
            </div>

            {enrollSuccess ? (
              <div className="py-6 text-center flex flex-col items-center gap-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-400">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="flex flex-col gap-1.5 text-center">
                  <h4 className="font-extrabold text-[#0f172a] text-sm md:text-base">
                    ভর্তির আবেদন সফল হয়েছে!
                  </h4>
                  <p className="text-xs text-slate-500 px-3 leading-relaxed font-sans text-center">
                    প্রিয় {enrollName}, আপনার {enrolledCourse.titleBn} কোর্সে ভর্তি স্লট ফরম রেকর্ড হয়েছে। আগামী ২৪ ঘণ্টার মধ্যে মোবাইল নিশ্চিতকরণ কোডসহ পেমেন্ট কনফার্মেশন প্রসেস আপনার মোবাইলে এসএমেসের মাধ্যমে পাঠানো হবে।
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnrollCourse} className="flex flex-col gap-3 font-sans text-left">
                
                <div className="bg-emerald-50/55 p-3 rounded-xl border border-emerald-100 mb-1">
                  <h5 className="font-extrabold text-xs text-emerald-800 leading-tight">
                    কোর্স: {enrolledCourse.titleBn}
                  </h5>
                  <div className="flex items-center gap-3 text-[10.5px] text-slate-550 text-slate-600 mt-1.5">
                    <span>তত্ত্বাবধায়ক: <b>{enrolledCourse.instructorBn}</b></span>
                    <span>•</span>
                    <span className="text-teal-700 font-bold">মূল্য: {enrolledCourse.priceBn}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <label className="text-xs font-bold text-slate-700">আপনার নাম</label>
                  <input
                    type="text"
                    required
                    value={enrollName}
                    onChange={(e) => setEnrollName(e.target.value)}
                    placeholder="যেমন: সাকিব আল হাসান"
                    className="border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-400 outline-none w-full text-left"
                  />
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <label className="text-xs font-bold text-slate-700">সচল মোবাইল কন্টাক্ট</label>
                  <input
                    type="tel"
                    required
                    value={enrollPhone}
                    onChange={(e) => setEnrollPhone(e.target.value)}
                    placeholder="যেমন: ০১৭১২XXXXXX"
                    className="border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-400 outline-none w-full text-left"
                  />
                </div>

                <div className="flex gap-2 justify-end mt-4">
                  <button
                    type="button"
                    onClick={() => setEnrolledCourse(null)}
                    className="border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1153fc] hover:bg-[#0b3ec5] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer border-0"
                  >
                    ভর্তি স্লট বুক করুন
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
