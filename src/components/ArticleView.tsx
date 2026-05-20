import { useState, useEffect } from 'react';
import { 
  Heart, Share2, Printer, CheckCircle, Clock, Calendar, User, 
  ArrowLeft, ChevronRight, BookOpen, AlertTriangle, ShieldCheck, Award, ThumbsUp, HelpCircle
} from 'lucide-react';
import { articlesData } from '../data';
import { Article } from '../types';

interface ArticleViewProps {
  language: 'en' | 'bn';
  setCurrentView: (view: string) => void;
}

export default function ArticleView({ language, setCurrentView }: ArticleViewProps) {
  const [selectedArticleId, setSelectedArticleId] = useState<string>('ccb-hypertension');
  const [activeHeading, setActiveHeading] = useState<number>(0);
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [showDisclaimerPopup, setShowDisclaimerPopup] = useState<boolean>(true);

  const article = articlesData.find(a => a.id === selectedArticleId) || articlesData[0];

  // Simulated Reading Progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        setReadingProgress((window.scrollY / scrollTotal) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active section periodically to simulate scroll highlighting
  const headings = language === 'en' 
    ? article.content.map(p => p.startsWith('###') ? p.replace('###', '').trim() : '')
    : article.contentBn.map(p => p.startsWith('###') ? p.replace('###', '').trim() : '');

  const filteredHeadings = headings.filter(h => h !== '');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: language === 'en' ? article.title : article.titleBn,
        text: language === 'en' ? article.summary : article.summaryBn,
        url: window.location.href,
      }).catch(err => console.log(err));
    } else {
      alert(language === 'en' ? 'Link copied to clipboard!' : 'নিবন্ধ লিংক ক্লিপবোর্ডে কপি হয়েছে!');
    }
  };

  return (
    <div id="article_layout_root" className="w-full bg-slate-50 min-h-screen font-sans">
      
      {/* Real-time Reading Progress Indicator */}
      <div 
        id="reading-progress-bar"
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-emerald-500 to-sky-500 z-50 transition-all duration-100"
        style={{ width: `${Math.min(readingProgress + 10, 100)}%` }}
      />

      {/* Selector ribbon between mockup articles */}
      <div className="bg-sky-50 py-3 border-b border-sky-100 flex flex-col md:flex-row justify-center items-center gap-3.5 px-4">
        <span className="text-xs font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1 shrink-0">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Select Redesign Theme Mockup' : 'অন্যান্য রিডিজাইন নিবন্ধগুলি দেখুন'}</span>
        </span>
        <div className="flex bg-white p-1 rounded-xl border border-sky-100 overflow-x-auto scrollbar-none max-w-full">
          {articlesData.map(art => {
            const getShortTitle = (id: string, currentLang: 'en' | 'bn') => {
              const table: Record<string, { en: string; bn: string }> = {
                'diabetes-diet': { en: 'Diabetes Diet', bn: 'ডায়াবেটিস খাদ্যতালিকা' },
                'hypertension-guide': { en: 'Hypertension CCB', bn: 'রক্তচাপ ও অ্যামলোডিপিন' },
                'child-measles': { en: 'Child Measles', bn: 'শিশুর হামের সতর্কতা' },
                'zinc-height': { en: 'Zinc Supplement', bn: 'জিংক ও শিশুর উচ্চতা' },
              };
              return table[id]?.[currentLang] || id;
            };

            return (
              <button
                id={`select-art-${art.id}`}
                key={art.id}
                onClick={() => { setSelectedArticleId(art.id); setLiked(false); }}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 whitespace-nowrap ${selectedArticleId === art.id ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-950 bg-transparent'}`}
              >
                {getShortTitle(art.id, language)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Article Segment (8 Cols) */}
        <article className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
          
          {/* Breadcrumbs Category Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="bg-sky-50 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight inline-flex items-center gap-1.5 capitalize border border-sky-100 shadow-tiny">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
              {language === 'en' ? article.category : article.categoryBn}
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === 'en' ? article.readTime : article.readTimeBn}</span>
            </div>
          </div>

          {/* Premium High-impact H1 Title (Major Redeeming point over current layout) */}
          <h1 id="article-main-title" className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight text-left">
            {language === 'en' ? article.title : article.titleBn}
          </h1>

          {/* Modern Subtext Summary Box */}
          <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed border-l-4 border-slate-300 pl-4 antialiased text-left italic">
            {language === 'en' ? article.summary : article.summaryBn}
          </p>

          {/* Meta Information Bar with Author Photo */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-5 my-6 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={selectedArticleId === 'ccb-hypertension' ? 'https://picsum.photos/seed/doc1/100/100' : 'https://picsum.photos/seed/doc2/100/100'} 
                  alt="Author Avatar" 
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-indigo-100 shadow-tiny shrink-0"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-slate-900 leading-none">
                  {language === 'en' ? article.author : article.authorBn}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-indigo-600 font-semibold mt-1">
                  <Award className="w-3 h-3" />
                  <span>Licensed Clinical Mentor</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-sans text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{language === 'en' ? article.date : article.dateBn}</span>
              </span>
              <span className="text-slate-200">|</span>
              <span className="text-emerald-500 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>{language === 'en' ? 'Evidence-Based' : 'বিজ্ঞানসম্মত তথ্য'}</span>
              </span>
            </div>
          </div>

          {/* Featured Image Treatment with modern drop shadows & overlays */}
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9] shadow-md group">
            <div className="absolute inset-0 bg-indigo-950/15 mix-blend-multiply transition-colors group-hover:bg-indigo-950/5"></div>
            <img 
              src={article.image} 
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
              {language === 'en' ? 'Redesign Preview Only' : 'রিডিজাইন প্রোটোটাইপ'}
            </div>
          </div>

          {/* Premium Dynamic Alert/Caution Info Box (WordPress reusable item) */}
          <div className="bg-rose-50 border-l-4 border-rose-500 rounded-xl p-4 md:p-5 my-6 flex gap-3 text-left">
            <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5 animate-bounce-slow" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold text-rose-700 tracking-wider uppercase font-mono">
                {language === 'en' ? 'Critical Education Warning' : 'ওষুধের রাসায়নিক ব্যবহারের সুনির্দিষ্ট সতর্কতা'}
              </span>
              <p className="text-rose-800 text-xs md:text-sm leading-relaxed antialiased">
                {language === 'en' ? article.disclaimer : article.disclaimerBn}
              </p>
            </div>
          </div>

          {/* Interactive Table of Contents for Mobile View (Hidden on large desktops) */}
          {filteredHeadings.length > 0 && (
            <div className="lg:hidden bg-slate-50 border border-slate-100 rounded-xl p-4 my-6 text-left">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                {language === 'en' ? 'Quick Jump' : 'দ্রুত পড়ুন'}
              </span>
              <div className="flex flex-col gap-2">
                {filteredHeadings.map((h, idx) => (
                  <button
                    id={`toc-mob-heading-${idx}`}
                    key={idx}
                    onClick={() => {
                      setActiveHeading(idx);
                      const el = document.getElementById(`heading-${idx}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`text-xs text-left py-1.5 border-b border-dashed border-slate-200 text-slate-700 hover:text-sky-500 font-semibold flex items-center justify-between`}
                  >
                    <span>{h}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Raw Rendered Article Body with refined leading, line-height, spacings */}
          <div id="article-content" className="prose max-w-none text-slate-800 font-sans leading-relaxed text-sm md:text-base text-left flex flex-col gap-6">
            {(language === 'en' ? article.content : article.contentBn).map((p, index) => {
              if (p.startsWith('###')) {
                const headingText = p.replace('###', '').trim();
                const headingIndex = headings.slice(0, index + 1).filter(h => h !== '').length - 1;
                return (
                  <h3 
                    id={`heading-${headingIndex}`}
                    key={index} 
                    className="text-lg md:text-xl font-extrabold text-slate-900 mt-6 pb-2 border-b border-indigo-50 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1.5 h-4 bg-sky-500 rounded-full inline-block group-hover:bg-indigo-600 transition-colors"></span>
                    <span>{headingText}</span>
                  </h3>
                );
              }
              
              if (p.startsWith('*') || p.match(/^\d+\./)) {
                // Return formatted list items
                const isOrdered = p.match(/^\d+\./);
                const items = p.split('\n').map((li, liIdx) => (
                  <li key={liIdx} className="mb-2 last:mb-0 pl-1">
                    {li.replace(/^\*|\d+\.\s+/, '').trim()}
                  </li>
                ));
                return isOrdered ? (
                  <ol key={index} className="list-decimal pl-6 my-2 flex flex-col gap-1 text-slate-700 font-sans">
                    {items}
                  </ol>
                ) : (
                  <ul key={index} className="list-disc pl-6 my-2 flex flex-col gap-1 text-slate-700 font-sans">
                    {items}
                  </ul>
                );
              }

              // Normal text element, highlight specific bold directives
              return (
                <p key={index} className="text-slate-750 font-sans leading-relaxed">
                  {p.split('**').map((part, partIdx) => 
                    partIdx % 2 === 1 
                      ? <strong key={partIdx} className="font-extrabold text-slate-900 bg-sky-50 px-1 py-0.5 rounded shadow-tiny">{part}</strong> 
                      : part
                  )}
                </p>
              );
            })}
          </div>

          {/* Social Feedback Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-slate-100 bg-slate-50/50 p-4 rounded-2xl">
            <button
              id="like_button"
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${liked ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
            >
              <ThumbsUp className={`w-4 h-4 ${liked ? 'fill-rose-600 animate-bounce-slow' : 'text-slate-400'}`} />
              <span>{liked ? (language === 'en' ? 'Liked (345)' : 'পছন্দ হয়েছে (৩৪৫)') : (language === 'en' ? 'Helpful? (344)' : 'তথ্যবহুল? (৩৪৪)')}</span>
            </button>

            <div className="flex items-center gap-2">
              <button 
                id="btn-article-share"
                onClick={handleShare}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl text-xs font-medium"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Share Guide' : 'শেয়ার করুন'}</span>
              </button>
            </div>
          </div>

        </article>

        {/* Sidebar Space - Desktop Only (4 Cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Section 1: Dynamic Interactive Table of Contents */}
          {filteredHeadings.length > 0 && (
            <div className="sticky top-28 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest block font-sans">
                  {language === 'en' ? 'Table of Contents' : 'সুচিপত্র সূচি'}
                </span>
                <span className="text-[10px] bg-sky-50 px-2 py-0.5 text-sky-700 rounded font-semibold text-right">
                  {language === 'en' ? 'Interactive' : 'ইন্টারেক্টিভ'}
                </span>
              </div>
              <div className="flex flex-col gap-1 font-sans">
                {filteredHeadings.map((h, idx) => (
                  <button
                    id={`sidebar-toc-heading-${idx}`}
                    key={idx}
                    onClick={() => {
                      setActiveHeading(idx);
                      const el = document.getElementById(`heading-${idx}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2.5 font-medium ${
                      activeHeading === idx 
                        ? 'bg-sky-500 text-white font-bold shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${activeHeading === idx ? 'bg-white text-sky-500' : 'bg-slate-100 text-slate-400'}`}>
                      {idx + 1}
                    </span>
                    <span className="truncate">{h}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Patient Health Resource - Advisory Card */}
          <div className="bg-gradient-to-tr from-sky-600 to-indigo-700 text-white rounded-3xl p-6 shadow-md shadow-sky-100 relative overflow-hidden text-left flex flex-col gap-4">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
            <div className="flex items-center gap-2.5">
              <span className="bg-white/20 p-2 rounded-xl inline-block">
                <ShieldCheck className="w-5 h-5 text-sky-200" />
              </span>
              <span className="text-[10px] font-extrabold text-sky-200 uppercase tracking-widest leading-none block">
                {language === 'en' ? 'Active Advocacy' : 'নিরাপদ হেল্পলাইন'}
              </span>
            </div>

            <h4 className="text-lg font-bold leading-tight">
              {language === 'en' ? 'Confused about your prescriptions?' : 'প্রেসক্রিপশন বুঝতে সমস্যা হচ্ছে?'}
            </h4>
            <p className="text-xs text-sky-100/90 leading-relaxed font-sans">
              {language === 'en' 
                ? 'Consult our specialist clinical pharmacist online today to double check interactions and dosage protocols.'
                : 'ওষুধের সঠিক ডোজ ও ক্ষতিকর ড্রাগ মিথস্ক্রিয়া এড়াতে সরাসরি গ্র্যাজুয়েট ফার্মাসিস্টদের পরামর্শ নিন।'}
            </p>

            <button
              id="sidebar-advice-cta"
              onClick={() => {
                setCurrentView('homepage');
                setTimeout(() => {
                  const el = document.getElementById('consult-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="bg-white hover:bg-sky-50 text-indigo-700 text-center py-2.5 text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer block"
            >
              {language === 'en' ? 'Consult Certified Mentor' : 'মেন্টর পরামর্শ শুরু করুন'}
            </button>
          </div>

          {/* Section 3: Verified Status Check */}
          <div className="border border-slate-100 rounded-3xl p-6 bg-white text-left flex flex-col gap-3">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
              {language === 'en' ? 'Clinical Advisory Status' : 'ক্লিনিক্যাল নির্ভুলতার প্রমাণ'}
            </span>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  {language === 'en' ? 'Evidence Grade A Verified' : 'মেডিক্যাল প্রুফ গ্রেইড-এ'}
                </span>
                <span className="block text-[10px] text-slate-400">
                  {language === 'en' ? 'Validated by the Medicine Mentor Board' : 'মৌখিক ও বৈজ্ঞানিক প্রুফ সমর্থিত'}
                </span>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
