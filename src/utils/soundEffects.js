// Simple utility for playing sound effects throughout the application

// Create and cache audio objects
const audioCache = {};

// Initialize sounds with lower volume for better user experience
const initSound = (key, url, volume = 0.3) => {
  if (!audioCache[key]) {
    const audio = new Audio(url);
    audio.volume = volume;
    audioCache[key] = audio;
  }
  return audioCache[key];
};

// Available sound effects
export const sounds = {
  click: '/sounds/click.mp3',
  unlock: '/sounds/unlock.mp3',
  success: '/sounds/success.mp3',
  transition: '/sounds/transition.mp3',
  achievementUnlocked: '/sounds/achievement.mp3'
};

// Play a sound effect
export const playSound = (key) => {
  try {
    if (!sounds[key]) return;
    
    // Initialize sound if not already in cache
    const audio = initSound(key, sounds[key]);
    
    // Reset and play
    audio.currentTime = 0;
    audio.play().catch(err => {
      // Ignore autoplay errors (common in browsers)
      console.log('Sound playback error:', err);
    });
  } catch (error) {
    console.log('Sound error:', error);
  }
};

// Create a muted placeholder function for development
export const playSoundMuted = () => {};
