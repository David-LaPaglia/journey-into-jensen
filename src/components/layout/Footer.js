import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  // Hide footer on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className="bg-midnight py-4 px-6 text-gray-400 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-3 md:mb-0">
          <p>Journey into Jensen — A gamified experience about NVIDIA's visionary CEO</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          className="flex space-x-4"
        >
          <a href="https://nvidia.com" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
            NVIDIA
          </a>
          <span>|</span>
          <a href="https://docs.google.com/document/d/1shQWAyDRHLspBOa9hcZIEoE7t0We4sFJchlynjifZHs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
            Project Proposal and Research Document
          </a>
          <span>|</span>
          <a href="https://github.com/David-LaPaglia/journey-into-jensen" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
            GitHub
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
