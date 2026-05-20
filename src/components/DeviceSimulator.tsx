import { ReactNode } from 'react';
import { Laptop, Tablet, Smartphone, Globe, RefreshCcw, Wifi, BatteryCharging, Clock } from 'lucide-react';

interface DeviceSimulatorProps {
  deviceFrame: 'desktop' | 'tablet' | 'mobile' | 'full';
  setDeviceFrame: (frame: 'desktop' | 'tablet' | 'mobile' | 'full') => void;
  children: ReactNode;
  language: 'en' | 'bn';
}

export default function DeviceSimulator({
  deviceFrame,
  setDeviceFrame,
  children,
  language,
}: DeviceSimulatorProps) {
  
  // On real narrow screen systems (like actual phone/tablet browsers), we bypass simulations to show 100% pure responsive screen
  const isActualMobileViewport = typeof window !== 'undefined' && window.innerWidth < 1024;

  if (deviceFrame === 'full' || isActualMobileViewport) {
    return <div id="auto-responsive-layout" className="w-full min-h-screen bg-white">{children}</div>;
  }

  return (
    <div id="simulator_container" className="w-full bg-slate-900 py-12 px-4 flex flex-col items-center justify-start min-h-screen gap-6 select-none transition-all">
      
      {/* Simulation Info Ribbon metadata detail */}
      <div className="flex flex-wrap items-center justify-between gap-6 max-w-5xl w-full text-slate-400 text-xs px-2 font-sans">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
          <span>
            {language === 'en' 
              ? `Simulating dynamic ${deviceFrame} container frame.` 
              : `${deviceFrame} কন্টেইনার ফ্রেম সিমুলেশন সক্রিয় রয়েছে।`}
          </span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono uppercase">
            {deviceFrame === 'desktop' ? '1200x800 px' : deviceFrame === 'tablet' ? '768x1024 px' : '390x844 px'}
          </span>
        </div>

        {/* Action guidelines */}
        <div className="flex gap-4 items-center">
          <button
            id="sim-action-reset"
            onClick={() => setDeviceFrame('full')}
            className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 transition-colors"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Exit Simulator (Pure Responsive)' : 'সিমুলেটর বন্ধ করুন'}</span>
          </button>
        </div>
      </div>

      {/* Frame Renderer */}
      <div className="relative w-full flex justify-center transition-all duration-300">
        
        {/* DESKTOP FRAME (1200px widescreen) */}
        {deviceFrame === 'desktop' && (
          <div className="w-[1200px] max-w-full bg-white rounded-3xl border-12 border-slate-950 shadow-2xl overflow-hidden flex flex-col relative aspect-[14/9]">
            {/* Safari/Chrome Browser Top Bar Decorator */}
            <div className="w-full bg-slate-100/90 border-b border-slate-200 px-4 py-2 flex items-center gap-3">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="bg-white rounded-lg border border-slate-200/80 px-4 py-0.5 text-[10px] text-slate-500 font-mono w-72 text-left truncate flex items-center gap-1.5 select-none shrink-0">
                <span className="text-emerald-500">🔒</span>
                <span>https://www.medicinementorbd.com/redesign-concept/</span>
              </div>
            </div>
            
            {/* Viewport content area */}
            <div className="w-full flex-grow overflow-y-auto selection-reset-div bg-white text-slate-800 antialiased">
              {children}
            </div>
          </div>
        )}

        {/* TABLET FRAME (768px medium) */}
        {deviceFrame === 'tablet' && (
          <div className="w-[768px] max-w-full bg-white rounded-[32px] border-12 border-slate-950 shadow-2xl overflow-hidden flex flex-col relative aspect-[3/4]">
            {/* iPad Status indicators */}
            <div className="w-full bg-slate-100 flex justify-between items-center px-6 py-2 text-[10px] text-slate-500 font-semibold border-b border-slate-200">
              <span className="font-mono">03:47 PM</span>
              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-[9px]">GCP LTE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-mono">100%</span>
                <BatteryCharging className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            
            {/* Content area */}
            <div className="w-full flex-grow overflow-y-auto selection-reset-div bg-white">
              {children}
            </div>
          </div>
        )}

        {/* MOBILE FRAME (390px phone portrait, notch & indicators!) */}
        {deviceFrame === 'mobile' && (
          <div className="w-[390px] max-w-full bg-white rounded-[45px] border-[14px] border-slate-950 shadow-2xl overflow-hidden flex flex-col relative aspect-[9/19] h-[780px]">
            {/* Custom iPhone Island (Dynamic Notch!) */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-5.5 bg-slate-950 rounded-full z-50 flex items-center justify-between px-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-900"></span>
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            
            {/* Mobile Status Header bar */}
            <div className="w-full bg-white/95 backdrop-blur flex justify-between items-center px-6 pt-3.5 pb-2 text-[10px] text-slate-900 font-semibold border-b border-slate-50 relative z-40 select-none">
              <span className="font-mono">19:47</span>
              <div className="flex items-center gap-1.5 pr-2">
                <Wifi className="w-3.5 h-3.5" />
                <span className="font-mono text-[9px] bg-slate-100 px-1 rounded">5G</span>
                <BatteryCharging className="w-4 h-4 text-emerald-600" />
              </div>
            </div>

            {/* Content area */}
            <div className="w-full flex-grow overflow-y-auto selection-reset-div bg-white scrollbar-none mobile-touch-area">
              {children}
            </div>

            {/* iPhone Home Indicator bar decor */}
            <div className="w-full bg-white py-1 flex justify-center items-center border-t border-slate-50">
              <div className="w-32 h-1 bg-slate-900 rounded-full"></div>
            </div>
          </div>
        )}

      </div>
      
      {/* Simulation tips details */}
      <p className="text-[10px] text-slate-500 text-center font-sans tracking-tight max-w-md">
        {language === 'en'
          ? "The device boundaries above dynamically scale text-sizes, spacing layout systems, table of contents and mobile menus strictly following our Figma design tokens specifications."
          : "উপরের সিমুলেশনটি ফিগমার রেসপন্সিভ গ্রিড অনুসরণ করে স্বয়ংক্রিয়ভাবে মেনু সমূহ পরিবর্তন করে।"}
      </p>

    </div>
  );
}
