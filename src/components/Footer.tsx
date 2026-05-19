import React, { useState } from 'react';
import { Mail, Facebook, Twitter, Youtube, CheckCircle, Shield, Phone, AlertCircle } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
}

export default function Footer({ language }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="main_footer" className="bg-slate-900 text-slate-300 pt-16 pb-12 transition-colors duration-300 font-sans border-t-4 border-sky-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Brand Bio Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            {/* Split capsule logo - representing premium modern medical brand */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 p-[2px] flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <div className="w-6 h-3.5 bg-sky-400 rounded-full relative flex items-center overflow-hidden border border-sky-500">
                  <div className="absolute right-0 w-1/2 h-full bg-white"></div>
                </div>
              </div>
            </div>
            <div>
              <span className="block text-lg font-bold text-white tracking-tight leading-none">
                Medicine Mentor
              </span>
              <span className="block text-[9px] text-slate-400 tracking-wider mt-1 uppercase">
                {language === 'en' ? 'Healthcare Education Platform' : 'ডিজিটাল ওষুধ শিক্ষা প্লাটফর্ম'}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            {language === 'en' 
              ? 'Our mission is to combat drug misuse, eliminate self-prescription hazards, and guide patients on the rational usage of pharmaceuticals across Bangladesh.'
              : 'আমাদের মূল লক্ষ্য হলো ওষুধের অপব্যবহার রোধ করা, অযাচিত সেলফ-মেডিকেশন বা চিকিৎসকের পরামর্শ ছাড়া ওষুধ সেবনের প্রবণতা কমিয়ে আনা ও রোগীদের সচেতন করা।'}
          </p>

          <div className="flex items-center gap-3 text-xs bg-slate-800/80 p-3.5 rounded-xl border border-slate-800 text-slate-300">
            <Shield className="w-4.5 h-4.5 text-sky-400 shrink-0" />
            <span>
              {language === 'en' 
                ? 'Clinical Guidelines reviewed by Licensed Pharmacists.' 
                : 'সকল ক্লিনিক্যাল নিদের্শিকা নিবন্ধিত রেজিস্টার্ড গ্র্যাজুয়েট ফার্মাসিস্ট দ্বারা নিরীক্ষিত।'}
            </span>
          </div>
        </div>

        {/* Links Column 1: Categories (2.5 cols) */}
        <div className="lg:col-span-2.5 flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
            {language === 'en' ? 'Health Topics' : 'প্রধান বিভাগসমূহ'}
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Hypertension Control' : 'উচ্চ রক্তচাপ নিয়ন্ত্রণ'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Diabetes Management' : 'ডায়াবেটিস সচেতনতা'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Children Pediatric Dose' : 'শিশুর ওষুধের মাত্রা'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Antibiotic Resistance' : 'অ্যান্টিবায়োটিক সতর্কতা'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'OTC Pain Remedies' : 'সাধারণ ব্যথানাশক ওষুধ'}
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Medicine Mentor (2.5 cols) */}
        <div className="lg:col-span-2.5 flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
            {language === 'en' ? 'The Platform' : 'প্লাটফর্ম'}
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'About Our Specialists' : 'আমাদের প্যানেল মেম্বার'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Interactive Guide Tools' : 'ইন্টারেক্টিভ নির্দেশিকা টুলস'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Wordpress Integration' : 'ওয়ার্ডপ্রেস প্লাগিনস'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Terms & Legal Status' : 'শর্তাবলী ও আইনি নীতি'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition-colors">
                {language === 'en' ? 'Emergency Helpline' : 'জরুরী হেল্পলাইন'}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials Column (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
            {language === 'en' ? 'Direct Safety Alerts' : 'নিরাপত্তা অ্যালার্ট সাবস্ক্রিপশন'}
          </h4>
          <p className="text-xs text-slate-400 leading-normal">
            {language === 'en' 
              ? 'Receive bi-weekly verified safety and drug interaction notifications straight from pharmacologists.'
              : 'পাক্ষিক বা মাসিক ড্রাগ অ্যালার্ট ইমেলের মাধ্যমে সরাসরি প্রখ্যাত ফার্মাকোলজিস্টদের থেকে বুঝে নিন।'}
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex bg-slate-800 border border-slate-700 focus-within:border-sky-500 rounded-xl overflow-hidden p-1 transition-all">
              <input
                id="newsletter-email-input"
                type="email"
                placeholder="mentor@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 outline-none px-2.5 py-1.5 w-full text-xs text-white placeholder-slate-500"
                required
              />
              <button
                id="newsletter-submit-button"
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg px-3 py-1 text-xs font-semibold shrink-0 transition-colors"
              >
                {language === 'en' ? 'Join' : 'নিবন্ধন'}
              </button>
            </div>
          </form>

          {subscribed && (
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs mt-1 animate-pulse">
              <CheckCircle className="w-4 h-4" />
              <span>
                {language === 'en' ? 'Subscribed successfully!' : 'অ্যালার্ট সাবস্ক্রিপশন সফল হয়েছে!'}
              </span>
            </div>
          )}

          {/* Connected Socials */}
          <div className="flex items-center gap-3.5 mt-2">
            <a href="#" className="w-8 w-8 hover:text-white transition-colors bg-slate-800 hover:bg-sky-500 text-slate-400 rounded-lg flex items-center justify-center h-8">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 w-8 hover:text-white transition-colors bg-slate-800 hover:bg-sky-400 text-slate-400 rounded-lg flex items-center justify-center h-8">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 w-8 hover:text-white transition-colors bg-slate-800 hover:bg-rose-600 text-slate-400 rounded-lg flex items-center justify-center h-8">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Global Clinical Disclaimer Banner (Critical Health UI Requirement) */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col gap-4 text-xs font-sans text-slate-400">
        <div className="flex items-start gap-3 bg-slate-950/55 p-4 rounded-xl border border-slate-800/80">
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-300 uppercase tracking-widest text-[9px] text-rose-400">
              {language === 'en' ? 'CRITICAL CLINICAL DISCLAIMER' : 'জরুরি ক্লিনিক্যাল এবং চিকিৎসা বিষয়ক সতর্কতা'}
            </span>
            <p className="leading-relaxed">
              {language === 'en' 
                ? 'Information provided or displayed on Medicine Mentor BD is strictly designed for educational guidance and to enrich health literacy. Under no condition must it be substituted for actual, in-person clinical consultations, diagnoses, or written prescriptions by registered healthcare practitioners. If you suspect any medical emergency or sudden systemic disorder, please contact local emergency medical services instantly.'
                : 'মেডিসিন মেন্টর বিডি-তে উপস্থাপিত বা বর্ণিত চিকিৎসাবিষয়ক তথ্যসমূহ সম্পূর্ণ রোগ নির্দেশিকা এবং জনসচেতনতা বৃদ্ধির স্বার্থে লিখিত। কোনো অবস্থাতেই আমাদের তথ্যকে রেজিস্টার্ড চিকিৎসা পেশাজীবীদের লিখিত ড্রাগ প্রেসক্রিপশন বা স্বশরীরে রোগ নির্ণয় পরামর্শের বিকল্প হিসেবে গ্রহণ করবেন না। জরুরি শারীরিক অনিয়ম বা অনাকাঙ্ক্ষিত পার্শ্বপ্রতিক্রিয়ায় সরাসরি নিকটবর্তী হাসপাতালে যোগাযোগ করুন।'}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] mt-4 text-slate-500">
          <span>
            © 2026 Medicine Mentor BD. REDESIGN CONCEPT. Web Concept and Reusable Gutenberg Patterns.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policies</a>
            <a href="#" className="hover:text-slate-300 transition-colors">GCP & DC Verified</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
