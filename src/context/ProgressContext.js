import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [xp, setXp] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [unlockedContent, setUnlockedContent] = useState([]);

  // Load progress from localStorage if available
  useEffect(() => {
    const savedProgress = localStorage.getItem('jensen-journey-progress');
    if (savedProgress) {
      const { visitedNodes, xp, achievements, unlockedContent } = JSON.parse(savedProgress);
      setVisitedNodes(visitedNodes || []);
      setXp(xp || 0);
      setAchievements(achievements || []);
      setUnlockedContent(unlockedContent || []);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      'jensen-journey-progress',
      JSON.stringify({ visitedNodes, xp, achievements, unlockedContent })
    );
  }, [visitedNodes, xp, achievements, unlockedContent]);

  // Mark a node as visited and add XP
  const visitNode = (nodeId) => {
    if (!visitedNodes.includes(nodeId)) {
      setVisitedNodes(prev => [...prev, nodeId]);
      addXp(10); // Base XP for visiting a new node
    }
  };

  // Add XP points
  const addXp = (points) => {
    setXp(prev => prev + points);
    
    // Check for XP-based achievements
    checkXpAchievements(xp + points);
  };

  // Check if user has unlocked any achievements based on XP
  const checkXpAchievements = (currentXp) => {
    const xpMilestones = [
      { id: 'explorer', name: 'Explorer', xpRequired: 50, content: 'jensen-quote-1' },
      { id: 'visionary', name: 'Visionary', xpRequired: 100, content: 'jensen-quote-2' },
      { id: 'leader', name: 'Leader', xpRequired: 200, content: 'jensen-video-1' },
      { id: 'innovator', name: 'Innovator', xpRequired: 300, content: 'nvidia-fact-1' },
      { id: 'titan', name: 'Titan', xpRequired: 500, content: 'jensen-interview' }
    ];

    xpMilestones.forEach(milestone => {
      if (currentXp >= milestone.xpRequired && !achievements.some(a => a.id === milestone.id)) {
        // Unlock achievement
        setAchievements(prev => [...prev, milestone]);
        
        // Unlock related content
        setUnlockedContent(prev => [...prev, milestone.content]);
      }
    });
  };

  // Complete a decision challenge
  const completeChallenge = (challengeId, correctAnswer) => {
    const xpReward = correctAnswer ? 30 : 15; // More XP for correct answers
    addXp(xpReward);
    
    // Mark challenge as completed
    visitNode(`challenge-${challengeId}`);
  };

  const value = {
    visitedNodes,
    xp,
    achievements,
    unlockedContent,
    visitNode,
    addXp,
    completeChallenge
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
