import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-midnight flex items-center justify-center p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl text-center relative z-10">
        <motion.div 
          className="absolute -z-10 w-96 h-96 rounded-full bg-neon-green/20 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-teal-300"
          variants={itemVariants}
        >
          Step into the Mind of a Visionary
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Explore the leadership style, key decisions, and visionary thinking that transformed Jensen Huang 
          from semiconductor startup founder to AI industry titan.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link 
            to="/mindmap" 
            className="inline-flex items-center bg-neon-green text-midnight font-bold px-8 py-4 rounded-lg text-lg transition-transform hover:scale-105 hover:shadow-glow"
          >
            <span>Start Journey</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>From co-founding NVIDIA in 1993 to leading the AI revolution</p>
          <p className="mt-2">A gamified exploration of leadership & innovation</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
