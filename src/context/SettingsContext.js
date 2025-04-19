import { createContext, useContext, useState, useEffect } from 'react';
import { playSound, playSoundMuted } from '../utils/soundEffects';

// Create settings context
const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  // Settings state
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // True by default for our neon theme
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  
  // Load settings from localStorage if available
  useEffect(() => {
    const savedSettings = localStorage.getItem('jensen-journey-settings');
    if (savedSettings) {
      const { soundEnabled, darkMode, animationsEnabled } = JSON.parse(savedSettings);
      setSoundEnabled(soundEnabled !== undefined ? soundEnabled : true);
      setDarkMode(darkMode !== undefined ? darkMode : true);
      setAnimationsEnabled(animationsEnabled !== undefined ? animationsEnabled : true);
    }
  }, []);
  
  // Save settings whenever they change
  useEffect(() => {
    localStorage.setItem(
      'jensen-journey-settings',
      JSON.stringify({ soundEnabled, darkMode, animationsEnabled })
    );
  }, [soundEnabled, darkMode, animationsEnabled]);
  
  // Play sound function (respects user's sound preference)
  const playSoundEffect = (soundKey) => {
    if (soundEnabled) {
      playSound(soundKey);
    }
  };
  
  // Settings values and functions
  const value = {
    soundEnabled,
    toggleSound: () => setSoundEnabled(prev => !prev),
    darkMode,
    toggleDarkMode: () => setDarkMode(prev => !prev),
    animationsEnabled,
    toggleAnimations: () => setAnimationsEnabled(prev => !prev),
    playSoundEffect
  };
  
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
