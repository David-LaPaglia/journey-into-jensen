import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext';
import { nodes } from '../../data/jensenData';
import { getCitation, formatCitation } from '../../data/sourceCitations';
import Icon from '../ui/Icon';

const MindMap = () => {
  // Simple approach - just store the ID of the selected node
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const { visitedNodes, visitNode, nodeVisitCounts } = useProgress();
  
  // Grid settings
  const gridSize = { width: 7, height: 5 };
  const cellSize = 140;
  
  // Refs for interactive connections
  const svgRef = useRef(null);
  const nodeRefs = useRef({});
  
  // Controls for node animations
  const controls = useAnimation();
  
  // Node click handler - directly manages the selected node ID
  const handleNodeClick = (nodeId) => {
    console.log('Node clicked:', nodeId);
    visitNode(nodeId);
    
    // Simply toggle node selection or select new node
    setSelectedNodeId(currentId => currentId === nodeId ? null : nodeId);
    
    // Pulse animation on the selected node
    const pulseEffect = (nodeVisitCounts[nodeId] || 0) >= 5 
      ? [1, 1.25, 0.9, 1.15, 1] // More elaborate animation for frequently visited nodes
      : [1, 1.15, 1];
      
    controls.start(nodeId, {
      scale: pulseEffect,
      transition: { duration: 0.8 }
    });
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
          height: (gridSize.height * cellSize) + 'px',
          maxWidth: (gridSize.width * cellSize) + 'px',
          margin: '0 auto'
        }}>
          {/* Background grid lines */}
          <div className="absolute inset-0">
            {Array.from({ length: gridSize.width }).map((_, x) => (
              <div 
                key={"vertical-" + x} 
                className="absolute top-0 bottom-0 border-l border-gray-800" 
                style={{ left: ((x / gridSize.width) * 100) + '%' }}
              />
            ))}
            {Array.from({ length: gridSize.height }).map((_, y) => (
              <div 
                key={"horizontal-" + y} 
                className="absolute left-0 right-0 border-t border-gray-800" 
                style={{ top: ((y / gridSize.height) * 100) + '%' }}
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
            
            {/* Connection pairs */}
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
                <g key={"connection-" + index}>
                  {/* Base connection line */}
                  <line 
                    x1={fromX} 
                    y1={fromY} 
                    x2={toX} 
                    y2={toY} 
                    className={visited ? 'stroke-gray-600 stroke-2' : 'stroke-gray-800 stroke-2'}
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
                  left: (x * cellSize - cellSize/2) + 'px',
                  top: (y * cellSize - cellSize/2) + 'px',
                  width: cellSize + 'px',
                  height: cellSize + 'px'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: x * 0.1 + y * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <motion.button
                    ref={el => nodeRefs.current[node.id] = el}
                    onClick={() => handleNodeClick(node.id)}
                    onKeyDown={(e) => e.key === 'Enter' && handleNodeClick(node.id)}
                    className={isVisited 
                      ? 'w-16 h-16 rounded-full bg-neon-green text-midnight hover:shadow-glow-sm cursor-pointer flex items-center justify-center shadow-md transition-all duration-200' 
                      : 'w-16 h-16 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer flex items-center justify-center shadow-md transition-all duration-200'}
                    custom={node.id}
                    animate={controls}
                    tabIndex={0}
                  >
                    <div className="text-xl">
                      <Icon name={node.icon} className={isVisited ? 'w-7 h-7 text-midnight' : 'w-7 h-7 text-gray-200'} />
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
      
      {/* Custom modal implementation using a direct approach */}
      {selectedNodeId && (() => {
        const node = nodes.find(n => n.id === selectedNodeId);
        if (!node) return null;
        
        return (
          <div 
            className="fixed inset-0 z-50 overflow-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedNodeId(null)}
          >
            <div 
              className="bg-midnight max-w-lg w-full rounded-lg shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-dark-slate">
                <h2 className="text-xl font-bold text-white">{node.title}</h2>
                <button 
                  onClick={() => setSelectedNodeId(null)}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                  aria-label="Close"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              
              <div className="p-4">
                {/* Visit counter */}
                <div className="flex justify-end mb-2">
                  <div className="bg-midnight px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="text-neon-green mr-1">
                      <Icon name="eye" className="w-4 h-4 inline" />
                    </span>
                    <span className="text-gray-300">
                      Visits: {nodeVisitCounts[node.id] || 1}
                    </span>
                  </div>
                </div>

                {node.content.type === 'story' ? (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-neon-green">{node.content.title}</h3>
                    
                    {/* Main content with paragraph formatting */}
                    <div className="mb-6 text-gray-300 leading-relaxed space-y-4">
                      {node.content.body.split('\\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                    
                    {/* Image if available */}
                    {node.content.image && (
                      <motion.div 
                        className="my-4 rounded-lg overflow-hidden shadow-lg border border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <img 
                          src={node.content.image} 
                          alt={node.content.title} 
                          className="w-full h-auto" 
                        />
                        <div className="bg-midnight p-2 text-sm">
                          {node.content.imageCaption && (
                            <div className="text-gray-400 text-center mb-1">
                              {node.content.imageCaption}
                            </div>
                          )}
                          {getCitation(node.id, 'image') && (
                            <div className="text-xs text-gray-500 italic text-center">
                              <div dangerouslySetInnerHTML={{ 
                                __html: formatCitation(getCitation(node.id, 'image')).replace(/\[Link\]\((.*?)\)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-neon-green hover:underline">Link</a>') 
                              }} />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Quote with animation */}
                    {node.content.quote && (
                      <motion.blockquote 
                        className="border-l-4 border-neon-green pl-4 my-6 italic"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-white">{node.content.quote}</p>
                        {getCitation(node.id, 'quote') && (
                          <div className="text-xs text-gray-500 mt-2">
                            <div dangerouslySetInnerHTML={{ 
                              __html: formatCitation(getCitation(node.id, 'quote')).replace(/\[Link\]\((.*?)\)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:underline">Link</a>') 
                            }} />
                          </div>
                        )}
                      </motion.blockquote>
                    )}
                    
                    {/* Hidden content after multiple visits */}
                    {(nodeVisitCounts[node.id] || 0) >= 3 && node.content.hiddenInsight && (
                      <motion.div 
                        className="mt-5 p-3 bg-gradient-to-r from-midnight to-gray-900 border-l-2 border-neon-green rounded-r-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className="text-neon-green text-sm font-bold mb-2 flex items-center">
                          <Icon name="lock-open" className="w-4 h-4 mr-1" />
                          UNLOCKED: DEEPER INSIGHT
                        </h4>
                        <p className="text-gray-300 text-sm">{node.content.hiddenInsight}</p>
                      </motion.div>
                    )}
                    
                    {/* "Master Explorer" badge for frequent visits */}
                    <div className="flex justify-between items-center text-sm text-gray-400 mt-6">
                      {node.content.year && (
                        <div>
                          <span className="font-bold">Circa {node.content.year}</span>
                        </div>
                      )}
                      {(nodeVisitCounts[node.id] || 0) >= 5 && (
                        <motion.div 
                          className="text-neon-green flex items-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: 1 }}
                        >
                          <Icon name="star" className="w-4 h-4 mr-1" />
                          Master Explorer
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Source citation */}
                    {getCitation(node.id) && (
                      <div className="mt-4 pt-3 border-t border-gray-700 text-xs text-gray-500 italic">
                        <div dangerouslySetInnerHTML={{ 
                          __html: formatCitation(getCitation(node.id)).replace(/\[Link\]\((.*?)\)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-neon-green hover:underline">Link</a>') 
                        }} />
                      </div>
                    )}
                    
                    {/* Related links to other nodes */}
                    {node.content.relatedLinks && (
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <h4 className="text-sm text-white font-bold mb-2">Related Discoveries:</h4>
                        <div className="flex flex-wrap gap-2">
                          {node.content.relatedLinks.map((linkId, idx) => {
                            const relatedNode = nodes.find(n => n.id === linkId);
                            const isVisited = visitedNodes.includes(linkId);
                            return (
                              <button
                                key={idx}
                                className={isVisited ? "px-3 py-1 rounded-full text-xs bg-neon-green/20 text-neon-green" : "px-3 py-1 rounded-full text-xs bg-midnight text-gray-400"}
                                onClick={() => {
                                  setSelectedNodeId(null);
                                  setTimeout(() => {
                                    handleNodeClick(linkId);
                                  }, 300);
                                }}
                              >
                                {relatedNode ? relatedNode.title : linkId}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{node.description}</p>
                    <Link 
                      to={"/challenge/" + node.content.challengeId}
                      className="block w-full bg-neon-green text-midnight font-bold py-3 px-4 rounded text-center hover:bg-opacity-90 transition-colors"
                    >
                      Take the Decision Challenge
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </motion.div>
  );
};

export default MindMap;
