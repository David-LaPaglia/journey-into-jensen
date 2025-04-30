import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [xp, setXp] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [unlockedContent, setUnlockedContent] = useState([]);
  const [nodeVisitCounts, setNodeVisitCounts] = useState({});

  // Load progress from localStorage if available
  useEffect(() => {
    const savedProgress = localStorage.getItem('jensen-journey-progress');
    if (savedProgress) {
      const { visitedNodes, xp, achievements, unlockedContent, nodeVisitCounts } = JSON.parse(savedProgress);
      setVisitedNodes(visitedNodes || []);
      setXp(xp || 0);
      setAchievements(achievements || []);
      setUnlockedContent(unlockedContent || []);
      setNodeVisitCounts(nodeVisitCounts || {});
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      'jensen-journey-progress',
      JSON.stringify({ visitedNodes, xp, achievements, unlockedContent, nodeVisitCounts })
    );
  }, [visitedNodes, xp, achievements, unlockedContent, nodeVisitCounts]);

  // Mark a node as visited and add XP
  const visitNode = (nodeId) => {
    // Update visit count for this node
    setNodeVisitCounts(prev => ({
      ...prev,
      [nodeId]: (prev[nodeId] || 0) + 1
    }));
    
    // First-time visit
    if (!visitedNodes.includes(nodeId)) {
      setVisitedNodes(prev => [...prev, nodeId]);
      addXp(10); // Base XP for visiting a new node
    } else {
      // Reward for revisiting (less than first visit but still valuable)
      addXp(3); 
      
      // Trigger "depth explorer" achievements for revisits
      if (nodeVisitCounts[nodeId] === 5) {
        unlockAchievement('node_master', `Node Master: ${nodeId}`, 'Revisited the same node 5 times');
      }
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

  const unlockAchievement = (id, name, description) => {
    setAchievements(prev => [...prev, { id, name, description }]);
  };

  const unlockContent = (contentId) => {
    setUnlockedContent(prev => [...prev, contentId]);
  };

  const resetProgress = () => {
    setVisitedNodes([]);
    setXp(0);
    setAchievements([]);
    setUnlockedContent([]);
    setNodeVisitCounts({});
  };

  const value = {
    visitedNodes,
    xp,
    achievements,
    unlockedContent,
    nodeVisitCounts,
    visitNode,
    addXp,
    unlockAchievement,
    unlockContent,
    resetProgress,
    completeChallenge
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
