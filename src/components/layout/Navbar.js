import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext';
import { useSettings } from '../../context/SettingsContext';

const Navbar = () => {
  const location = useLocation();
  const { xp } = useProgress();
  const { playSoundEffect } = useSettings();
  
  // Only show navbar on pages other than landing
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="bg-midnight py-4 px-6 shadow-lg backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center text-midnight font-bold"
          >
            N
          </motion.div>
          <span className="text-neon-green font-bold text-xl">Jensen Journey</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <NavLink to="/mindmap" onClick={() => playSoundEffect('click')}>Mind Map</NavLink>
            </li>
            <li>
              <NavLink to="/achievements" onClick={() => playSoundEffect('click')}>Achievements</NavLink>
            </li>
            <li>
              <NavLink to="/timeline" onClick={() => playSoundEffect('click')}>Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/settings" onClick={() => playSoundEffect('click')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center bg-dark-slate px-3 py-1 rounded-full">
          <span className="text-neon-green mr-2 font-semibold">XP:</span>
          <span className="text-white">{xp}</span>
        </div>
      </div>
    </header>
  );
};

// Helper component for navigation links with active state
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative transition-colors hover:text-neon-green ${isActive ? 'text-neon-green' : 'text-gray-300'}`}
    >
      {children}
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
