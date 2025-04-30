import { useState } from 'react';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    'top': 'bottom-full mb-2',
    'bottom': 'top-full mt-2',
    'left': 'right-full mr-2',
    'right': 'left-full ml-2'
  };
  
  const arrowClasses = {
    'top': 'bottom-[-6px] left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-neon-green border-b-0',
    'bottom': 'top-[-6px] left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-neon-green border-t-0',
    'left': 'right-[-6px] top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-neon-green border-r-0',
    'right': 'left-[-6px] top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-neon-green border-l-0'
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className={`absolute z-50 ${positionClasses[position]} w-max max-w-xs`}>
          <div className="bg-midnight text-white text-sm px-3 py-2 rounded shadow-lg border border-neon-green/30 animate-fadeIn">
            {content}
            <span className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
