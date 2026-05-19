/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import ArticleView from './components/ArticleView';
import StyleGuide from './components/StyleGuide';
import DeviceSimulator from './components/DeviceSimulator';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('homepage'); // homepage, article, styleguide
  const [language, setLanguage] = useState<'en' | 'bn'>('bn'); // default to Bengali to show local authenticity first, user can toggle!
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'tablet' | 'mobile' | 'full'>('full');

  const renderActiveView = () => {
    switch (currentView) {
      case 'homepage':
        return <Homepage language={language} setCurrentView={setCurrentView} />;
      case 'article':
        return <ArticleView language={language} setCurrentView={setCurrentView} />;
      case 'styleguide':
        return <StyleGuide language={language} />;
      default:
        return <Homepage language={language} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div id="medicine_mentor_app" className="min-h-screen bg-slate-50 flex flex-col font-sans select-text text-slate-800 antialiased overflow-x-hidden">
      
      {/* Primary Redesign Navigation Controller */}
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        language={language}
        setLanguage={setLanguage}
        deviceFrame={deviceFrame}
        setDeviceFrame={setDeviceFrame}
      />

      {/* Embedded High Fidelity Device Simulation Wrapper */}
      <DeviceSimulator 
        deviceFrame={deviceFrame} 
        setDeviceFrame={setDeviceFrame}
        language={language}
      >
        <div className="flex flex-col min-h-screen selection-reset-div w-full">
          {/* Active Layout Core */}
          <main className="flex-grow w-full">
            {renderActiveView()}
          </main>

          {/* Clinical Authority Footer */}
          <Footer language={language} />
        </div>
      </DeviceSimulator>

    </div>
  );
}
