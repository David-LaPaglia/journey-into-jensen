import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineEvents } from '../../data/jensenData';

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Update active event based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const eventElements = containerRef.current.querySelectorAll('.timeline-event');
      let closestEvent = null;
      let closestDistance = Infinity;
      
      eventElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestEvent = element.getAttribute('data-id');
        }
      });
      
      if (closestEvent !== activeEvent) {
        setActiveEvent(closestEvent);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeEvent]);
  
  // Timeline progress animation
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.05, 0.95]);

  return (
    <motion.div 
      className="min-h-screen bg-dark-slate py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">The NVIDIA Timeline</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three decades of vision, innovation, and relentless execution under Jensen Huang's leadership
          </p>
        </div>
        
        <div className="relative pb-20" ref={containerRef}>
          {/* Vertical timeline line with progress indicator */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-neon-green origin-top"
              style={{ scaleY }}
            />
          </div>
          
          {/* Timeline events */}
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeEvent === `event-${index}`;
            
            return (
              <div 
                key={index}
                data-id={`event-${index}`}
                className={`timeline-event relative mb-20 flex ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-dark-slate border-2 border-gray-700 z-10">
                  <motion.div 
                    className={`absolute inset-0.5 rounded-full bg-neon-green ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
                    transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
                  />
                </div>
                
                {/* Year indicator always visible in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 bg-midnight text-white font-bold py-1 px-4 rounded-full z-10">
                  {event.year}
                </div>
                
                {/* Content positioned on alternating sides */}
                <motion.div 
                  className={`w-5/12 ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div 
                    className={`p-6 rounded-lg shadow-lg ${isActive 
                      ? 'bg-gradient-to-br from-midnight to-gray-900 border border-neon-green/30' 
                      : 'bg-midnight'}`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </motion.div>
                
                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            );
          })}
          
          {/* Timeline end */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 rounded-full bg-neon-green"></div>
          </div>
        </div>
        
        {/* Current year */}
        <div className="text-center mt-10">
          <div className="inline-block bg-midnight text-white rounded-full px-6 py-2">
            <span className="text-gray-400 mr-2">Today:</span>
            <span className="font-bold">2025</span>
          </div>
          <p className="text-gray-500 mt-4">Jensen Huang continues to lead NVIDIA's technological revolution</p>
        </div>
        
        {/* Inspirational quote */}
        <div className="mt-16 mb-10 max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl font-medium text-gray-300 italic leading-relaxed">
            "The computing industry has only one company that's singular in its ability to advance 
            computing for this new era... we built our company for this moment."
          </blockquote>
          <cite className="block mt-4 text-neon-green">— Jensen Huang, NVIDIA CEO</cite>
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
