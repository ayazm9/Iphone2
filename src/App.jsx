import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation for route tracking
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import Analytics from '@analytics/google-analytics';

// Initialize Google Analytics 4
const analytics = Analytics({

  app: 'my-app',
  plugins: [
    {
      name: 'google-analytics',
      trackingId: 'G-S3KCNCVQZF' // Replace with your GA4 Measurement ID
    }
  ]
});

const App = () => {
  
  const location = useLocation();

  React.useEffect(() => {
    analytics.page(); // Track page views
  }, [location]);

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
