import React from 'react';
import { 
  Facebook, Youtube, Linkedin, Instagram, Mail, Phone, MapPin 
} from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer id="main_footer" className="bg-[#0c1e35] text-slate-300 pt-16 pb-12 font-sans border-t border-slate-800">
      
      {/* Subtle Annotated Tag */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-4">
        <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">
          13. FOOTER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Brand Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2">
            {/* Split capsule logo - representing premium modern medical brand */}
            <div className="w-9 h-9 rounded-xl bg-sky-500 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0c1e35] rounded-[9px] flex items-center justify-center">
                <div className="w-5.5 h-3 bg-sky-400 rounded-full relative flex items-center overflow-hidden border border-sky-500">
                  <div className="absolute right-0 w-1/2 h-full bg-white"></div>
                </div>
              </div>
            </div>
            <span className="block text-lg font-bold text-white tracking-tight">
              Medicine Mentor
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed font-sans pr-4">
            {language === 'en' 
              ? 'Evidence-based medicine education, books, and expert guidelines - all in one platform.'
              : 'বাংলায় Evidence-based medicine education, বই এবং বিশেষজ্ঞ গাইডলাইন— সব এক প্ল্যাটফর্মে।'}
          </p>

          {/* Social Icons matching the image */}
          <div className="flex items-center gap-3 mt-4">
            <a 
              id="footer-social-fb"
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 hover:text-white transition-colors bg-slate-800/60 hover:bg-blue-600 text-slate-400 rounded-lg flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              id="footer-social-yt"
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 hover:text-white transition-colors bg-slate-800/60 hover:bg-rose-600 text-slate-400 rounded-lg flex items-center justify-center"
              aria-label="Youtube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              id="footer-social-li"
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 hover:text-white transition-colors bg-slate-800/60 hover:bg-sky-600 text-slate-400 rounded-lg flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              id="footer-social-ig"
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 hover:text-white transition-colors bg-slate-800/60 hover:bg-pink-600 text-slate-400 rounded-lg flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column (1.5 cols) */}
        <div className="lg:col-span-1.5 flex flex-col gap-3 text-left col-span-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-400">
            <li><a href="#hero-section" className="hover:text-sky-400 transition-colors">Home</a></li>
            <li><a href="#courses-section" className="hover:text-sky-400 transition-colors">Courses</a></li>
            <li><a href="#books-section" className="hover:text-sky-400 transition-colors">Books</a></li>
            <li><a href="#articles-section" className="hover:text-sky-400 transition-colors">Articles</a></li>
            <li><a href="#consult-section" className="hover:text-sky-400 transition-colors">Counseling</a></li>
            <li><a href="#team-section" className="hover:text-sky-400 transition-colors">About Us</a></li>
            <li><a href="#consult-section" className="hover:text-sky-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Courses Column (1.5 cols) */}
        <div className="lg:col-span-1.5 flex flex-col gap-3 text-left col-span-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Courses</h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-400">
            <li><a href="#courses-section" className="hover:text-sky-400 transition-colors">All Courses</a></li>
            <li><a href="#courses-section" className="hover:text-sky-400 transition-colors">Popular Courses</a></li>
            <li><a href="#courses-section" className="hover:text-sky-400 transition-colors">New Courses</a></li>
            <li><a href="#courses-section" className="hover:text-sky-400 transition-colors">Free Courses</a></li>
          </ul>
        </div>

        {/* Books Column (1.5 cols) */}
        <div className="lg:col-span-1.5 flex flex-col gap-3 text-left col-span-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Books</h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-400">
            <li><a href="#books-section" className="hover:text-sky-400 transition-colors">All Books</a></li>
            <li><a href="#books-section" className="hover:text-sky-400 transition-colors">Best Selling</a></li>
            <li><a href="#books-section" className="hover:text-sky-400 transition-colors">New Books</a></li>
          </ul>
        </div>

        {/* Articles Column (1.5 cols) */}
        <div className="lg:col-span-1.5 flex flex-col gap-3 text-left col-span-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Articles</h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-400">
            <li><a href="#articles-section" className="hover:text-sky-400 transition-colors">All Articles</a></li>
            <li><a href="#articles-section" className="hover:text-sky-400 transition-colors">Health Tips</a></li>
            <li><a href="#articles-section" className="hover:text-sky-400 transition-colors">Medicine Guide</a></li>
          </ul>
        </div>

        {/* Legal Column (1.5 cols) */}
        <div className="lg:col-span-1.5 flex flex-col gap-3 text-left col-span-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Legal</h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact Column (1.5 cols) */}
        <div className="lg:col-span-2.5 flex flex-col gap-3 text-left col-span-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="mailto:info@medicinementor.com" className="hover:text-sky-400 truncate">info@medicinementor.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="tel:+8801234567890" className="hover:text-sky-400">+880 1234-567890</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar with Copyright and Bangladesh compliance disclaimer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-400">
        <span>
          © 2024 Medicine Mentor. All rights reserved.
        </span>
        <span className="text-right text-[11px] leading-relaxed max-w-xl text-slate-500 font-sans">
          দ্রষ্টব্য: এটি কোনো ডাক্তারি পরামর্শ নয়। যেকোনো শারীরিক সমস্যার জন্য চিকিৎসকের পরামর্শ নিন।
        </span>
      </div>

    </footer>
  );
}
