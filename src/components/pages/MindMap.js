import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext';
import { nodes } from '../../data/jensenData';
import Modal from '../ui/Modal';
import Icon from '../ui/Icon';

const MindMap = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { visitedNodes, visitNode } = useProgress();
  
  // Grid settings
  const gridSize = { width: 7, height: 5 };
  const cellSize = 140;
  
  // Refs for interactive connections
  const svgRef = useRef(null);
  const nodeRefs = useRef({});
  
  // Controls for node animations
  const controls = useAnimation();
  
  // Handle node click
  const handleNodeClick = (node) => {
    setSelectedNode(node);
    setShowModal(true);
    visitNode(node.id);
    
    // Pulse animation on the selected node
    controls.start(node.id, {
      scale: [1, 1.15, 1],
      transition: { duration: 0.5 }
    });
  };
  
  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <motion.div 
      className="min-h-screen bg-dark-slate p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Jensen's Mind Map</h1>
          <p className="text-gray-400">Explore the key principles, decisions, and milestones that shaped Jensen Huang's leadership journey.</p>
        </div>
        
        {/* Mind map grid */}
        <div className="relative mb-8 overflow-auto" style={{ 
          width: '100%',
          height: `${gridSize.height * cellSize}px`,
          maxWidth: `${gridSize.width * cellSize}px`,
          margin: '0 auto'
        }}>
          {/* Background grid lines */}
          <div className="absolute inset-0">
            {Array.from({ length: gridSize.width }).map((_, x) => (
              <div 
                key={`vertical-${x}`} 
                className="absolute top-0 bottom-0 border-l border-gray-800" 
                style={{ left: `${(x / gridSize.width) * 100}%` }}
              />
            ))}
            {Array.from({ length: gridSize.height }).map((_, y) => (
              <div 
                key={`horizontal-${y}`} 
                className="absolute left-0 right-0 border-t border-gray-800" 
                style={{ top: `${(y / gridSize.height) * 100}%` }}
              />
            ))}
          </div>
          
          {/* Connection lines between nodes with animated gradients */}
          <svg ref={svgRef} className="absolute inset-0 w-full h-full z-0">
            <defs>
              <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#121212" />
                <stop offset="50%" stopColor="#39FF14" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#121212" />
                <animate attributeName="x1" from="0%" to="100%" dur="3s" repeatCount="indefinite" />
                <animate attributeName="x2" from="100%" to="200%" dur="3s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
            
            {/* Connection pairs using data */}
            {[
              // Vision to connections
              { from: 'vision', to: 'resilience' },
              { from: 'vision', to: 'cuda' },
              { from: 'vision', to: 'innovation' },
              { from: 'vision', to: 'product-design' },
              
              // Second level connections
              { from: 'cuda', to: 'ai-pivot' },
              { from: 'resilience', to: 'leadership-style' },
              
              // Third level connections
              { from: 'leadership-style', to: 'corporate-culture' },
              { from: 'ai-pivot', to: 'market-perception' },
              { from: 'ai-pivot', to: 'risk-taking' },
            ].map((connection, index) => {
              const fromNode = nodes.find(n => n.id === connection.from);
              const toNode = nodes.find(n => n.id === connection.to);
              
              if (!fromNode || !toNode) return null;
              
              // Get positions from node data
              const fromX = fromNode.position.x * cellSize;
              const fromY = fromNode.position.y * cellSize;
              const toX = toNode.position.x * cellSize;
              const toY = toNode.position.y * cellSize;
              
              const visited = visitedNodes.includes(fromNode.id) && visitedNodes.includes(toNode.id);
              
              return (
                <g key={`connection-${index}`}>
                  {/* Base connection line */}
                  <line 
                    x1={fromX} 
                    y1={fromY} 
                    x2={toX} 
                    y2={toY} 
                    className={`${visited ? 'stroke-gray-600' : 'stroke-gray-800'} stroke-2`}
                    strokeDasharray={visited ? "0" : "5,5"}
                  />
                  
                  {/* Animated overlay for visited connections */}
                  {visited && (
                    <line 
                      x1={fromX} 
                      y1={fromY} 
                      x2={toX} 
                      y2={toY} 
                      stroke="url(#connection-gradient)" 
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  )}
                </g>
              );
            })}
          </svg>
          
          {/* Nodes */}
          {nodes.map((node) => {
            const isVisited = visitedNodes.includes(node.id);
            const { x, y } = node.position;
            
            return (
              <motion.div
                key={node.id}
                className="absolute flex flex-col items-center z-10"
                style={{
                  left: `${x * cellSize - cellSize/2}px`,
                  top: `${y * cellSize - cellSize/2}px`,
                  width: `${cellSize}px`,
                  height: `${cellSize}px`
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: x * 0.1 + y * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <motion.button
                    ref={el => nodeRefs.current[node.id] = el}
                    onClick={() => handleNodeClick(node)}
                    className={`w-16 h-16 rounded-full ${
                      isVisited 
                        ? 'bg-neon-green text-midnight hover:shadow-glow-sm' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    } flex items-center justify-center shadow-md transition-all duration-200`}
                    custom={node.id}
                    animate={controls}
                  >
                    <div className="text-xl">
                      <Icon name={node.icon} className={`w-7 h-7 ${isVisited ? 'text-midnight' : 'text-gray-200'}`} />
                    </div>
                  </motion.button>
                  
                  {isVisited && (
                    <motion.div
                      className="absolute -inset-1 rounded-full border-2 border-neon-green opacity-70"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
                <p className="mt-2 text-center text-sm font-medium text-white">{node.title}</p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Legend */}
        <div className="mb-8 p-4 bg-midnight rounded-lg shadow-md">
          <h3 className="text-white font-semibold mb-2">Map Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-neon-green mr-2"></div>
              <span className="text-gray-300 text-sm">Visited Node</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gray-800 mr-2"></div>
              <span className="text-gray-300 text-sm">Unexplored Node</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-1 bg-gray-700 mr-2"></div>
              <span className="text-gray-300 text-sm">Connection</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Node detail modal */}
      {selectedNode && (
        <Modal isOpen={showModal} onClose={handleCloseModal} title={selectedNode.title}>
          {selectedNode.content.type === 'story' ? (
            <div className="p-4">
              <h3 className="text-xl font-bold mb-3 text-neon-green">{selectedNode.content.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{selectedNode.content.body}</p>
              
              {selectedNode.content.quote && (
                <blockquote className="border-l-4 border-neon-green pl-4 my-4 italic">
                  <p className="text-white">{selectedNode.content.quote}</p>
                </blockquote>
              )}
              
              <div className="text-sm text-gray-400 mt-4">
                {selectedNode.content.year && `Circa ${selectedNode.content.year}`}
              </div>
            </div>
          ) : (
            <div className="p-4">
              <p className="text-gray-300 mb-6">{selectedNode.description}</p>
              <Link 
                to={`/challenge/${selectedNode.content.challengeId}`}
                className="block w-full bg-neon-green text-midnight font-bold py-3 px-4 rounded text-center hover:bg-opacity-90 transition-colors"
              >
                Take the Decision Challenge
              </Link>
            </div>
          )}
        </Modal>
      )}
    </motion.div>
  );
};

export default MindMap;
