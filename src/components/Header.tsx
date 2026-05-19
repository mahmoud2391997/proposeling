import { useState } from 'react';
import { 
  Search, Globe, Laptop, Tablet, Smartphone, Menu, X, Pill, HeartPulse, ChevronRight
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
  deviceFrame: 'desktop' | 'tablet' | 'mobile' | 'full';
  setDeviceFrame: (frame: 'desktop' | 'tablet' | 'mobile' | 'full') => void;
}

export default function Header({
  currentView,
  setCurrentView,
  language,
  setLanguage,
  deviceFrame,
  setDeviceFrame,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Suggested keywords based on real articles
  const searchSuggestions = [
    { label: 'Amlodipine (Hypertension)', labelBn: 'অ্যামলোডিপিন (উচ্চ রক্তচাপ)', view: 'article' },
    { label: 'Paracetamol Liver Limits', labelBn: 'প্যারাসিটামল ও লিভার', view: 'article' },
    { label: 'Antibiotic Superbugs Resistance', labelBn: 'অ্যান্টিবায়োটিক রেজিস্ট্যান্স', view: 'article' },
    { label: 'Online Medical Counseling', labelBn: 'অনলাইন প্রেসক্রিপশন কাউন্সিলিং', view: 'homepage' }
  ];

  const filteredSuggestions = searchQuery 
    ? searchSuggestions.filter(s => 
        (language === 'en' ? s.label : s.labelBn).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSuggestionClick = (view: string) => {
    setCurrentView(view);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="w-full flex flex-col z-50 bg-white border-b border-slate-100 sticky top-0">
      
      {/* Redesign Interactive Banner & Frame Toggler - Elite Agency Feature */}
      <div className="bg-slate-950 text-slate-300 py-2.5 px-4 font-sans text-xs flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-white tracking-wider uppercase text-[10px] bg-slate-800 px-2 py-0.5 rounded">
            Prototype Redesign Pitch
          </span>
          <span className="hidden sm:inline text-slate-400">
            {language === 'en' ? 'Interactive layout simulator for Medicine Mentor BD' : 'মেডিসিন মেন্টর বিডি ইন্টারেক্টিভ রিডিজাইন সংস্করণ'}
          </span>
        </div>
        
        {/* Device Viewport Toggles */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
          <button 
            id="toggle-desktop-frame"
            onClick={() => setDeviceFrame('full')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${deviceFrame === 'full' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Full Screen / Auto Responsive"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Responsive</span>
          </button>
          
          <div className="h-4 w-[1px] bg-slate-800 mx-1"></div>
          
          <button 
            id="toggle-mock-desktop"
            onClick={() => setDeviceFrame('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${deviceFrame === 'desktop' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Simulate 1200px Desktop"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>
          
          <button 
            id="toggle-mock-tablet"
            onClick={() => setDeviceFrame('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${deviceFrame === 'tablet' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Simulate 768px Tablet"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>
          
          <button 
            id="toggle-mock-mobile"
            onClick={() => setDeviceFrame('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${deviceFrame === 'mobile' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            title="Simulate 390px Mobile"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Main Premium Navbar */}
      <nav id="main_navbar" className="w-full bg-white px-4 md:px-8 py-3.5 flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <button 
          id="logo_button"
          onClick={() => setCurrentView('homepage')}
          className="flex items-center gap-3 group text-left transition-transform active:scale-98"
        >
          {/* Custom Crafted Vector Badge acting as Medicine Mentor Premium Logo Icon */}
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 p-[2px] shadow-sm flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative">
              {/* Semi-Circle Pill representation directly modeled matching user logo */}
              <div className="absolute inset-0 bg-sky-50 opacity-10"></div>
              <div className="flex items-center justify-center">
                <div className="w-7 h-4 bg-sky-400 rounded-full relative flex items-center overflow-hidden border border-sky-500">
                  <div className="absolute right-0 w-1/2 h-full bg-white"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[7px] font-bold text-slate-800 select-none">MM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="block text-lg font-bold text-slate-900 tracking-tight leading-none group-hover:text-sky-500 transition-colors">
              Medicine Mentor
            </span>
            <span className="block text-[10px] text-slate-500 tracking-normal mt-0.5">
              {language === 'en' ? 'The Proper Use of Medicine' : 'ঔষধের সঠিক ব্যবহার নির্দেশিকা'}
            </span>
          </div>
        </button>

        {/* Desktop View Navigation links */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-50/80 p-1.5 rounded-xl border border-slate-100">
          <button
            id="nav-homepage"
            onClick={() => setCurrentView('homepage')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              currentView === 'homepage' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            {language === 'en' ? 'Modern Home' : 'হোম'}
          </button>
          <button
            id="nav-article"
            onClick={() => setCurrentView('article')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              currentView === 'article' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            {language === 'en' ? 'Article Layout' : 'নিবন্ধ লেআউট'}
          </button>
          <button
            id="nav-services"
            onClick={() => {
              setCurrentView('homepage');
              setTimeout(() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all"
          >
            {language === 'en' ? 'Counseling Tools' : 'কাউন্সেলিং'}
          </button>
          <button
            id="nav-styleguide"
            onClick={() => setCurrentView('styleguide')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              currentView === 'styleguide' 
                ? 'bg-white text-slate-900 shadow-sm font-semibold border-indigo-100' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            {language === 'en' ? 'UI Style Guide' : 'ডিজাইন সিস্টেম'}
          </button>
        </div>

        {/* Global Toolbar Action Box */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Enhanced Search Input */}
          <div className="relative">
            <div className="w-64 flex items-center gap-2 bg-slate-50 border border-slate-100 hover:border-slate-200 focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-100 transition-all rounded-xl px-3 py-1.5 text-xs text-slate-600">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input 
                id="search_field_desktop"
                type="text" 
                placeholder={language === 'en' ? 'Search medication guides...' : 'ওষুধ বা রোগ লিখে খুঁজুন...'}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="bg-transparent border-0 outline-none w-full text-slate-800 placeholder-slate-400"
              />
            </div>
            
            {/* Search Suggestions Modal */}
            {showSuggestions && searchQuery && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-100 rounded-xl shadow-lg p-2 z-50 animate-fade-in">
                <span className="block px-3 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  {language === 'en' ? 'Articles & Solutions' : 'প্রস্তাবিত নিবন্ধ ও সমাধান'}
                </span>
                {filteredSuggestions.length > 0 ? (
                  <div className="mt-1 divide-y divide-slate-55 flex flex-col">
                    {filteredSuggestions.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(s.view)}
                        className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center justify-between group transition-colors"
                      >
                        <span>{language === 'en' ? s.label : s.labelBn}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-3 py-4 text-center text-xs text-slate-400">
                    {language === 'en' ? 'No exact match. Try "Amlodipine" or "Paracetamol"' : 'পাওয়া যায়নি। "Amlodipine" বা "Paracetamol" লিখুন'}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bengali / English Flag Toggle */}
          <button
            id="lang-toggle-desktop"
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 active:scale-95"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
          </button>

          {/* Launch Direct Redesign Banner CTA */}
          <button 
            id="cta-counseling-nav"
            onClick={() => {
              setCurrentView('homepage');
              setTimeout(() => {
                const el = document.getElementById('consult-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 text-xs font-semibold rounded-xl shadow-sm transition-all shadow-sky-100 hover:shadow-sky-200 active:scale-98 cursor-pointer flex items-center gap-1"
          >
            <span>{language === 'en' ? 'Get Advice' : 'কাউন্সেলিং নিন'}</span>
          </button>

        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="lang-toggle-mobile"
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="p-2 rounded-lg border border-slate-100 text-xs font-semibold text-slate-700"
          >
            <span className="text-xs uppercase">{language === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>
          
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 active:bg-slate-50 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 absolute top-full left-0 w-full shadow-lg z-40 transition-all flex flex-col gap-4 animate-fade-in-down">
          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 focus-within:bg-white rounded-xl px-3 py-2 text-sm text-slate-600">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              id="search_field_mobile"
              type="text" 
              placeholder={language === 'en' ? 'Search medicines & guidelines...' : 'ওষুধের তথ্য সার্চ করুন...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 outline-none w-full text-slate-800 placeholder-slate-400 text-xs text-left"
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              id="mob-nav-home"
              onClick={() => { setCurrentView('homepage'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${currentView === 'homepage' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              {language === 'en' ? 'Modern Home' : 'হোম'}
            </button>
            <button
              id="mob-nav-article"
              onClick={() => { setCurrentView('article'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${currentView === 'article' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              {language === 'en' ? 'Redesigned Article Reader' : 'নিবন্ধ লেআউট'}
            </button>
            <button
              id="mob-nav-style"
              onClick={() => { setCurrentView('styleguide'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${currentView === 'styleguide' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              {language === 'en' ? 'UI Style Guide' : 'ডিজাইন সিস্টেম'}
            </button>
            <button
              id="mob-nav-counseling"
              onClick={() => {
                setCurrentView('homepage');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('consult-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {language === 'en' ? 'Medication Intake Counseling' : 'জ্বর ও ব্যথানাশক ক্যালকুলেটর'}
            </button>
          </div>

          <button
            id="mob-nav-cta"
            onClick={() => {
              setCurrentView('homepage');
              setMobileMenuOpen(false);
              setTimeout(() => {
                const el = document.getElementById('consult-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 200);
            }}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-3 text-sm font-semibold rounded-xl"
          >
            {language === 'en' ? 'Book Medication Advisory' : 'ওষুধ ব্যবহারের নির্দেশিকা পরামর্শ'}
          </button>
        </div>
      )}

    </div>
  );
}
