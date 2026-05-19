import { useState } from 'react';
import { Copy, CheckCircle, Code, Paintbrush, Type, Layers, ExternalLink } from 'lucide-react';
import { designTokens } from '../data';

interface StyleGuideProps {
  language: 'en' | 'bn';
}

export default function StyleGuide({ language }: StyleGuideProps) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'info-box' | 'disclaimer-box' | 'premium-button'>('info-box');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2500);
  };

  // Predefined code blocks that can be copied directly to WordPress (Elementor or Gutenberg)
  const codeSnippets = {
    'info-box': {
      title: 'Premium Highlight / Info Box',
      desc: 'Insert structured reminders, bullet guidelines or dosage schedules.',
      html: `<div style="background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px; margin: 20px 0; font-family: sans-serif; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
  <div style="display: flex; gap: 12px; align-items: start;">
    <span style="font-size: 18px; line-height: 1;">🟢</span>
    <div>
      <h4 style="margin: 0 0 4px 0; font-size: 15px; font-weight: 600; color: #065f46;">ঔষধ সেবনের সুনির্দিষ্ট তথ্য</h4>
      <p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: #047857;">দয়া করে ওষুধ সেবনের দিনগুলোতে বাতাবি লেবু বা জাম্বুরার জুস পরিহার করুন। এতে রক্তচাপ কমে মাথা ঘোরার উপক্রম হতে পারে।</p>
    </div>
  </div>
</div>`
    },
    'disclaimer-box': {
      title: 'Clinical Emergency Disclaimer Red',
      desc: 'Mandatory clinical footer block for educational medical articles.',
      html: `<div style="background-color: #fef2f2; border: 1px solid #fee2e2; border-radius: 12px; padding: 20px; margin: 25px 0; font-family: sans-serif;">
  <div style="display: flex; gap: 10px; align-items: flex-start;">
    <span style="font-size: 20px; color: #ef4444; line-height: 1;">⚠️</span>
    <div>
      <h5 style="margin: 0 0 6px 0; font-size: 13px; font-weight: bold; color: #991b1b; letter-spacing: 0.05em; text-transform: uppercase;">জরুরি ডেক্লারেশন ও দায়মুক্তি</h5>
      <p style="margin: 0; font-size: 12.5px; line-height: 1.6; color: #7f1d1d;">উপরোক্ত মতামত কেবল সাধারণ সচেতনতা প্রচারের উদ্দেশ্যে রচিত। কোনো মারাত্মক ব্যাধিতে আপনার কার্ডিওলজিস্ট বা চিকিৎসকের লিখিত অনুমোদন ব্যতিরেকে ওষুধ সেবন শুরু বা বন্ধ করবেন না।</p>
    </div>
  </div>
</div>`
    },
    'premium-button': {
      title: 'Conversion-Focused Medical CTC Action Button',
      desc: 'Elegant hover-ready flat button layout for service courses.',
      html: `<a href="#" style="display: inline-flex; align-items: center; justify-content: center; background-color: #0ea5e9; color: #ffffff; font-family: sans-serif; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 28px; border-radius: 12px; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2); transition: all 0.2s ease;">
  ক্লিনিক্যাল গাইড কোর্স শুরু করুন &rarr;
</a>`
    }
  };

  return (
    <div id="styleguide_panel" className="w-full bg-slate-50 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Style Guide Header */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-widest">
              <Layers className="w-4.5 h-4.5" />
              <span>Identity Design Kit</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Medicine Mentor Design Tokens & Gutenberg Blocks
            </h1>
            <p className="text-sm text-slate-500 max-w-xl">
              Our curated design system maintains medical authority, clarity and pixel-perfect consistent visual rhythm. Specially compatible with Elementor and Gutenberg.
            </p>
          </div>
          <button
            id="open-wp-docs"
            onClick={() => alert('WordPress Integration plugin files can be generated from these tokens using clean inline HTML/CSS markup!')}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-3 text-xs font-semibold shadow-sm transition-colors"
          >
            <span>WordPress Redesign Blueprint</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Color Palette Matrix */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sky-500 text-xs font-bold uppercase tracking-wider">
            <Paintbrush className="w-4 h-4" />
            <span>Harmonised color systems</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Consistent Brand Palette Redesign</h2>
            <p className="text-xs text-slate-400 mt-1">
              Click on any swatches to automatically grab the hex color code for Elementor custom styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            {designTokens.colors.map((color, index) => (
              <div 
                key={index}
                onClick={() => copyToClipboard(color.hex, `color-${index}`)}
                className="group border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:border-sky-300 hover:shadow-md transition-all cursor-pointer bg-slate-50/50"
              >
                <div className={`w-14 h-14 rounded-xl shrink-0 ${color.class} shadow-inner flex items-center justify-center`}>
                  <span className="text-white text-[10px] bg-black/20 px-1 inline-block rounded font-mono">{color.hex}</span>
                </div>
                <div className="flex flex-col gap-1 w-full overflow-hidden">
                  <span className="text-xs font-bold text-slate-800 truncate">{color.name}</span>
                  <span className="text-[11px] text-slate-500 antialiased line-clamp-2 leading-snug">{color.use}</span>
                  <span className="text-[9px] font-mono text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedToken === `color-${index}` ? '✓ Copied hex!' : 'Click to copy color'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography System */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sky-500 text-xs font-bold uppercase tracking-wider">
            <Type className="w-4 h-4" />
            <span>Optimal reading system</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Educational Typography Hierarchy</h2>
            <p className="text-xs text-slate-400 mt-1">
              Redesigned carefully to prevent fatigued eyes and support critical clinical scanability.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {designTokens.typography.map((text, idx) => (
              <div key={idx} className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-extrabold text-indigo-600 tracking-wider uppercase">{text.label}</span>
                  <span className="text-slate-400 text-xs font-sans">Font properties: <code className="bg-slate-100 p-0.5 rounded text-[11px] text-slate-800">{text.font}</code></span>
                </div>
                <div className="md:text-right">
                  <span className="block text-slate-900 font-bold text-lg">{text.example}</span>
                  <span className="text-xs text-slate-500 font-mono mt-1 block">{text.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WordPress Code Exporter Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sky-500 text-xs font-bold uppercase tracking-wider">
            <Code className="w-4 h-4" />
            <span>Elementor & Gutenberg Ready-Codes</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Redesign Component Code Exports</h2>
            <p className="text-xs text-slate-400 mt-1">
              Instantly reusable HTML codes to deploy gorgeous redesigned sections straight on your WordPress platform. Styled in pure medical teal & coral with beautiful typography inline layouts.
            </p>
          </div>

          {/* Interactive tabs for code selects */}
          <div className="flex gap-2.5 border-b border-slate-100 pb-0.5">
            {Object.keys(codeSnippets).map((key) => {
              const k = key as 'info-box' | 'disclaimer-box' | 'premium-button';
              return (
                <button
                  id={`code-tab-${k}`}
                  key={k}
                  onClick={() => setActiveCodeTab(k)}
                  className={`pb-3 text-sm font-medium transition-all border-b-2 px-1 ${activeCodeTab === k ? 'border-indigo-600 text-indigo-600 font-semibold' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                >
                  {codeSnippets[k].title}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Visual Preview */}
            <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50 flex flex-col gap-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Live Visual Redesign Preview</span>
              <div 
                className="w-full"
                dangerouslySetInnerHTML={{ __html: codeSnippets[activeCodeTab].html }}
              />
              <p className="text-xs text-slate-400 italic font-sans">
                {codeSnippets[activeCodeTab].desc}
              </p>
            </div>

            {/* Code Box */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center bg-slate-105 px-4 py-2 bg-slate-900 text-slate-300 rounded-t-xl text-xs font-mono">
                <span>REUSABLE_HTML_BLOCK.txt</span>
                <button
                  id="btn-copy-wp-code"
                  onClick={() => copyToClipboard(codeSnippets[activeCodeTab].html, `snippet-${activeCodeTab}`)}
                  className="flex items-center gap-1.5 text-[11px] text-sky-400 hover:text-sky-300 transition-colors font-semibold"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>
                    {copiedToken === `snippet-${activeCodeTab}` ? '✓ Copied' : 'Copy HTML'}
                  </span>
                </button>
              </div>
              <textarea
                id="text-wp-code"
                readOnly
                value={codeSnippets[activeCodeTab].html}
                className="bg-slate-950 text-emerald-400 font-mono text-[11px] p-4 h-64 border-none focus:ring-0 rounded-b-xl w-full select-all resize-none outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
