import { motion } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext';

const Achievements = () => {
  const { xp, achievements, visitedNodes } = useProgress();
  
  // Calculate progress percentage
  const totalNodes = 10; // Total number of nodes in the mind map
  const completionPercentage = Math.round((visitedNodes.length / totalNodes) * 100);
  

  
  return (
    <motion.div 
      className="min-h-screen bg-dark-slate py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Journey Progress</h1>
          <p className="text-gray-400">Track your exploration and unlock exclusive content about Jensen Huang.</p>
        </div>
        
        {/* Progress stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-midnight rounded-lg p-6 shadow-lg">
            <h3 className="text-gray-400 text-sm uppercase mb-1">Total XP</h3>
            <div className="text-4xl font-bold text-neon-green mb-2">{xp}</div>
            <p className="text-sm text-gray-400">Earn more by exploring nodes and completing challenges</p>
          </div>
          
          <div className="bg-midnight rounded-lg p-6 shadow-lg">
            <h3 className="text-gray-400 text-sm uppercase mb-1">Exploration</h3>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-white mb-2">{visitedNodes.length}/{totalNodes}</div>
              <div className="text-xl font-medium text-gray-400 mb-2">nodes</div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
              <div 
                className="bg-neon-green h-2 rounded-full" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-400">{completionPercentage}% of Jensen's journey explored</p>
          </div>
          
          <div className="bg-midnight rounded-lg p-6 shadow-lg">
            <h3 className="text-gray-400 text-sm uppercase mb-1">Achievements</h3>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-white mb-2">{achievements.length}</div>
              <div className="text-xl font-medium text-gray-400 mb-2">unlocked</div>
            </div>
            <p className="text-sm text-gray-400">Continue exploring to unlock more achievements</p>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 'explorer', name: 'Explorer', description: 'Visit 5 different nodes', xpRequired: 50 },
              { id: 'visionary', name: 'Visionary', description: 'Learn about Jensen\'s vision', xpRequired: 100 },
              { id: 'leader', name: 'Leader', description: 'Complete a decision challenge', xpRequired: 200 },
              { id: 'innovator', name: 'Innovator', description: 'Discover NVIDIA\'s innovation secrets', xpRequired: 300 },
              { id: 'titan', name: 'Titan', description: 'Become a master of Jensen\'s journey', xpRequired: 500 }
            ].map(achievement => {
              const isUnlocked = achievements.some(a => a.id === achievement.id);
              
              return (
                <div 
                  key={achievement.id}
                  className={`p-4 rounded-lg border ${
                    isUnlocked 
                      ? 'bg-midnight border-neon-green/30' 
                      : 'bg-gray-900/50 border-gray-800 opacity-70'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        isUnlocked ? 'bg-neon-green text-midnight' : 'bg-gray-800 text-gray-600'
                      }`}
                    >
                      {isUnlocked ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </div>
                    <h3 className={`font-medium ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>
                      {achievement.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 ml-13">{achievement.description}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    {isUnlocked ? 'Unlocked' : `Requires ${achievement.xpRequired} XP`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        


      </div>

    </motion.div>
  );
};

export default Achievements;
