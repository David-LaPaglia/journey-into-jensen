import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { challenges } from '../../data/jensenData';
import { useProgress } from '../../context/ProgressContext';

const DecisionChallenge = () => {
  const { nodeId } = useParams();
  const navigate = useNavigate();
  const { completeChallenge } = useProgress();
  
  const [challenge, setChallenge] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // Find the challenge data
  useEffect(() => {
    const foundChallenge = challenges.find(c => c.id === nodeId);
    if (foundChallenge) {
      setChallenge(foundChallenge);
    } else {
      // If challenge not found, go back to mind map
      navigate('/mindmap');
    }
  }, [nodeId, navigate]);
  
  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option.isCorrect);
    setShowFeedback(true);
    completeChallenge(nodeId, option.isCorrect);
  };
  
  // Return to mind map
  const handleContinue = () => {
    navigate('/mindmap');
  };
  
  if (!challenge) {
    return (
      <div className="min-h-screen bg-dark-slate flex items-center justify-center">
        <div className="text-neon-green text-2xl font-semibold animate-pulse">
          Loading challenge...
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-dark-slate py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Decision Challenge</h1>
          <p className="text-gray-400">
            What would you do in Jensen's position? Make your choice and see how it compares to his actual decision.
          </p>
        </div>
        
        <div className="bg-midnight rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-neon-green/20 text-neon-green rounded-full px-3 py-1 text-sm font-medium">
                {challenge.year}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">{challenge.title}</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">{challenge.description}</p>
            
            <div className="p-4 bg-dark-slate rounded-lg mb-6">
              <h3 className="text-xl font-bold text-white mb-3">The Decision</h3>
              <p className="text-neon-green font-medium">{challenge.question}</p>
            </div>
            
            {!showFeedback ? (
              <div className="space-y-4">
                {challenge.options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="block text-white font-medium">{option.text}</span>
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`p-6 rounded-lg mb-6 ${isCorrect ? 'bg-green-900/30' : 'bg-amber-900/30'}`}>
                  <h3 className={`text-xl font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-amber-400'}`}>
                    {isCorrect ? 'You made the same choice as Jensen!' : 'Jensen chose differently'}
                  </h3>
                  <p className="text-gray-300">
                    {selectedOption.feedback}
                  </p>
                </div>
                
                <div className="p-6 bg-gray-900 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
                  <p className="text-gray-300">{challenge.impact}</p>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={handleContinue}
                    className="bg-neon-green text-midnight font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Return to Mind Map
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DecisionChallenge;
