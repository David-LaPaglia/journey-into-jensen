import { motion } from 'framer-motion';
import { useSettings } from '../../context/SettingsContext';
import { useProgress } from '../../context/ProgressContext';

const Settings = () => {
  const { 
    soundEnabled, 
    toggleSound, 
    darkMode, 
    toggleDarkMode, 
    animationsEnabled, 
    toggleAnimations,
    playSoundEffect
  } = useSettings();
  
  const { xp } = useProgress();
  
  // Handle toggle button click with sound
  const handleToggle = (toggleFunction) => {
    toggleFunction();
    playSoundEffect('click');
  };
  
  // Reset progress confirmation
  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem('jensen-journey-progress');
      playSoundEffect('transition');
      window.location.reload();
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-dark-slate py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Customize your experience exploring Jensen Huang's journey</p>
        </div>
        
        {/* Settings panels */}
        <div className="space-y-6">
          {/* Display settings */}
          <div className="bg-midnight rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-white mb-4">Display Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-400">Enable the futuristic dark theme</p>
                </div>
                <button 
                  onClick={() => handleToggle(toggleDarkMode)}
                  className={`w-14 h-7 rounded-full relative transition-colors duration-300 focus:outline-none ${
                    darkMode ? 'bg-neon-green' : 'bg-gray-600'
                  }`}
                >
                  <span 
                    className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 transform ${
                      darkMode ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Animations</h3>
                  <p className="text-sm text-gray-400">Enable motion animations</p>
                </div>
                <button 
                  onClick={() => handleToggle(toggleAnimations)}
                  className={`w-14 h-7 rounded-full relative transition-colors duration-300 focus:outline-none ${
                    animationsEnabled ? 'bg-neon-green' : 'bg-gray-600'
                  }`}
                >
                  <span 
                    className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 transform ${
                      animationsEnabled ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          
          {/* Audio settings */}
          <div className="bg-midnight rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-white mb-4">Audio Settings</h2>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Sound Effects</h3>
                <p className="text-sm text-gray-400">Enable interactive sounds</p>
              </div>
              <button 
                onClick={() => handleToggle(toggleSound)}
                className={`w-14 h-7 rounded-full relative transition-colors duration-300 focus:outline-none ${
                  soundEnabled ? 'bg-neon-green' : 'bg-gray-600'
                }`}
              >
                <span 
                  className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 transform ${
                    soundEnabled ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
          
          {/* Game progress */}
          <div className="bg-midnight rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-white mb-4">Your Progress</h2>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Current XP</span>
                <span className="text-neon-green font-bold">{xp} XP</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-neon-green h-2 rounded-full" 
                  style={{ width: `${Math.min(100, (xp / 500) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">500 XP needed for all achievements</p>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h3 className="font-medium text-white mb-3">Reset Progress</h3>
              <p className="text-sm text-gray-400 mb-4">
                Reset all your progress, achievements, and unlocked content. This cannot be undone.
              </p>
              <button 
                onClick={handleResetProgress}
                className="px-4 py-2 bg-red-900 hover:bg-red-800 text-white rounded-md transition-colors"
              >
                Reset All Progress
              </button>
            </div>
          </div>
          
          {/* About */}
          <div className="bg-midnight rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-white mb-4">About</h2>
            <p className="text-gray-400 mb-3">
              Journey into Jensen is an interactive experience exploring the leadership style and career of Jensen Huang,
              co-founder and CEO of NVIDIA.
            </p>
            <p className="text-gray-400 mb-3">
              This application was created as an educational tool to understand the principles and decisions
              that transformed NVIDIA from a graphics card company into a global AI leader.
            </p>
            <p className="text-gray-500 text-sm">
              Version 1.0.0 • Created 2025
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
