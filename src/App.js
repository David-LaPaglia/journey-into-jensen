import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Page Components
import LandingPage from './components/pages/LandingPage';
import MindMap from './components/pages/MindMap';
import DecisionChallenge from './components/pages/DecisionChallenge';
import Achievements from './components/pages/Achievements';
import Timeline from './components/pages/Timeline';
import Settings from './components/pages/Settings';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Context providers
import { ProgressProvider } from './context/ProgressContext';
import { SettingsProvider } from './context/SettingsContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating initial data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-midnight">
        <div className="text-neon-green text-2xl font-semibold animate-pulse">
          Initializing Journey...
        </div>
      </div>
    );
  }

  return (
    <SettingsProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-dark-slate text-white">
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/mindmap" element={<MindMap />} />
                  <Route path="/challenge/:nodeId" element={<DecisionChallenge />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/timeline" element={<Timeline />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </Router>
      </ProgressProvider>
    </SettingsProvider>
  );
}

export default App;
