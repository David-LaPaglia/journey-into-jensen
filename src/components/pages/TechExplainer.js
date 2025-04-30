import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon';

const TechExplainer = () => {
  const [activeTab, setActiveTab] = useState('cuda');

  // Tabs for different tech concepts
  const tabs = [
    { id: 'cuda', title: 'CUDA', icon: 'bolt' },
    { id: 'cpu-vs-gpu', title: 'CPU vs GPU', icon: 'microchip' },
    { id: 'nvidia-business', title: 'NVIDIA Business', icon: 'building' }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-dark-slate p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Technology Explainer</h1>
          <p className="text-gray-400">Learn about CUDA, the differences between CPUs and GPUs, and how NVIDIA's technology works.</p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-700 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex items-center px-6 py-3 font-medium text-sm focus:outline-none transition-colors mr-2 ${
                activeTab === tab.id 
                  ? 'text-neon-green border-b-2 border-neon-green -mb-px'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon name={tab.icon} className="w-4 h-4 mr-2" />
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* CUDA Content */}
        {activeTab === 'cuda' && (
          <div className="space-y-8">
            <div className="bg-midnight rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">What is CUDA?</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="text-neon-green font-bold">CUDA</span> (Compute Unified Device Architecture) is a parallel computing platform and programming model developed by NVIDIA. Introduced in 2006, CUDA enables developers to use NVIDIA GPUs for general-purpose processing, not just graphics.
                </p>
                <p>
                  CUDA represents a pivotal moment in computing history when graphics cards transcended their original purpose of rendering images and became powerful general-purpose computing engines.
                </p>
                <div className="relative h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden my-6">
                  <img 
                    src="https://blogs.nvidia.com/wp-content/uploads/2012/09/cuda-apps-and-libraries.png" 
                    alt="CUDA Platform Visualization" 
                    className="w-full h-full object-cover"
                    title="CUDA Platform Architecture"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs text-gray-400 text-center">
                    Image: CUDA Platform Architecture (Source: NVIDIA Developer)
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-midnight rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Icon name="code" className="w-5 h-5 mr-2 text-neon-green" />
                  How CUDA Works
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    CUDA allows developers to write code that executes in parallel across hundreds or thousands of GPU cores. This parallelism makes GPUs ideal for computations where the same operation is performed on large amounts of data simultaneously.
                  </p>
                  <p>
                    Key components of the CUDA platform include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>CUDA C/C++ programming language extensions</li>
                    <li>CUDA libraries for common computing tasks</li>
                    <li>CUDA runtime for executing parallel code</li>
                    <li>CUDA compiler for generating GPU executable code</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-midnight rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Icon name="industry" className="w-5 h-5 mr-2 text-neon-green" />
                  Applications of CUDA
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    CUDA powers a wide range of applications across many industries:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Deep Learning & AI</span>: Training neural networks
                    </li>
                    <li>
                      <span className="font-semibold">Scientific Computing</span>: Physics simulations, molecular modeling
                    </li>
                    <li>
                      <span className="font-semibold">Data Science</span>: Processing and analyzing large datasets
                    </li>
                    <li>
                      <span className="font-semibold">Computational Finance</span>: Risk analysis and algorithmic trading
                    </li>
                    <li>
                      <span className="font-semibold">Medical Imaging</span>: Real-time 3D visualization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-midnight rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <Icon name="history" className="w-5 h-5 mr-2 text-neon-green" />
                CUDA Timeline
              </h3>
              <div className="pl-4 border-l-2 border-gray-700 space-y-6">
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-neon-green"></div>
                  <div>
                    <h4 className="text-white text-lg">2006: CUDA Introduced</h4>
                    <p className="text-gray-300">NVIDIA announced CUDA, opening GPUs for general-purpose computing for the first time.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-neon-green"></div>
                  <div>
                    <h4 className="text-white text-lg">2009: OpenCL Support</h4>
                    <p className="text-gray-300">NVIDIA added support for OpenCL, broadening the appeal of GPU computing.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-neon-green"></div>
                  <div>
                    <h4 className="text-white text-lg">2012: Kepler Architecture</h4>
                    <p className="text-gray-300">Kepler GPUs introduced Dynamic Parallelism, allowing GPU threads to spawn new threads.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-neon-green"></div>
                  <div>
                    <h4 className="text-white text-lg">2014-2016: Deep Learning Revolution</h4>
                    <p className="text-gray-300">CUDA becomes instrumental in the deep learning revolution with libraries like cuDNN.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-neon-green"></div>
                  <div>
                    <h4 className="text-white text-lg">2018-Present: AI and HPC Focus</h4>
                    <p className="text-gray-300">CUDA continues to evolve with a focus on AI and high-performance computing needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CPU vs GPU Content */}
        {activeTab === 'cpu-vs-gpu' && (
          <div className="space-y-8">
            <div className="bg-midnight rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">CPU vs GPU: Understanding the Difference</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  While Central Processing Units (CPUs) and Graphics Processing Units (GPUs) are both essential computing components, they're designed for fundamentally different tasks. Jensen Huang's vision for NVIDIA was built on understanding and leveraging these differences.
                </p>
                
                <div className="relative overflow-hidden rounded-lg my-6">
                  <img 
                    src="https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/a100/nvidia-a100-hgx-3qtr-front-left-2c50-d@2x.jpg" 
                    alt="NVIDIA A100 GPU" 
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs text-gray-400 text-center">
                    Image: NVIDIA A100 GPU (Source: NVIDIA)
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-midnight rounded-lg p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <Icon name="cpu" className="w-full h-full text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Central Processing Unit (CPU)</h3>
                <div className="text-gray-300 space-y-3 relative z-10">
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-900 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-300">4-32</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Cores</h4>
                      <p className="text-sm text-gray-400">A modern CPU typically has between 4-32 powerful cores</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-white mt-4">CPU Strengths:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Complex, sequential tasks</li>
                    <li>High frequency operation (3-5 GHz)</li>
                    <li>Large cache memory</li>
                    <li>Sophisticated branch prediction</li>
                    <li>Optimized for low latency</li>
                  </ul>
                  
                  <h4 className="font-semibold text-white mt-4">Best for:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Operating system functions</li>
                    <li>Web browsing</li>
                    <li>Office applications</li>
                    <li>Single-threaded tasks</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-midnight rounded-lg p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <Icon name="microchip" className="w-full h-full text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-neon-green mb-4">Graphics Processing Unit (GPU)</h3>
                <div className="text-gray-300 space-y-3 relative z-10">
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-green-900 flex items-center justify-center">
                      <span className="text-2xl font-bold text-neon-green">1000s</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Cores</h4>
                      <p className="text-sm text-gray-400">A modern GPU can have thousands of simpler cores</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-white mt-4">GPU Strengths:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Massive parallel processing</li>
                    <li>High throughput computing</li>
                    <li>Efficient at floating-point operations</li>
                    <li>Specialized for arithmetic calculations</li>
                    <li>High memory bandwidth</li>
                  </ul>
                  
                  <h4 className="font-semibold text-white mt-4">Best for:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Graphics rendering</li>
                    <li>Machine learning</li>
                    <li>Scientific simulations</li>
                    <li>Cryptocurrency mining</li>
                    <li>Video processing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-midnight rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Architectural Comparison</h3>
              
              <div className="relative overflow-x-auto rounded-lg">
                <div className="bg-gray-900 flex justify-between items-center p-6 mb-4 rounded-lg">
                  <div className="w-5/12 text-center">
                    <div className="border-2 border-blue-500 rounded-lg p-4 grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={`cpu-core-${i}`} className="bg-blue-800 rounded p-2 text-center text-xs text-white">
                          Core<br/>{i+1}
                        </div>
                      ))}
                    </div>
                    <p className="text-blue-400 mt-2 font-medium">CPU: Few Powerful Cores</p>
                  </div>
                  
                  <div className="text-neon-green text-3xl">vs</div>
                  
                  <div className="w-5/12 text-center">
                    <div className="border-2 border-green-500 rounded-lg p-4 grid grid-cols-10 gap-1">
                      {[...Array(100)].map((_, i) => (
                        <div key={`gpu-core-${i}`} className="bg-green-800 rounded aspect-square"></div>
                      ))}
                    </div>
                    <p className="text-neon-green mt-2 font-medium">GPU: Many Simple Cores</p>
                  </div>
                </div>
                
                <table className="w-full text-sm text-left text-gray-400">
                  <thead className="text-xs text-gray-200 uppercase bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">Feature</th>
                      <th scope="col" className="px-6 py-3">CPU</th>
                      <th scope="col" className="px-6 py-3">GPU</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Core Design</th>
                      <td className="px-6 py-4">Complex, powerful cores</td>
                      <td className="px-6 py-4">Simple, numerous cores</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Cache Memory</th>
                      <td className="px-6 py-4">Large (MB)</td>
                      <td className="px-6 py-4">Small (KB)</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Memory Access</th>
                      <td className="px-6 py-4">Low latency</td>
                      <td className="px-6 py-4">High bandwidth</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Instruction Set</th>
                      <td className="px-6 py-4">Complex, general purpose</td>
                      <td className="px-6 py-4">Optimized for compute</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Latency vs Throughput</th>
                      <td className="px-6 py-4">Optimized for latency</td>
                      <td className="px-6 py-4">Optimized for throughput</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* NVIDIA Business Content */}
        {activeTab === 'nvidia-business' && (
          <div className="space-y-8">
            <div className="bg-midnight rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">NVIDIA's Business: Beyond Gaming</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  When NVIDIA was founded in 1993, it focused primarily on computer graphics. Today, under Jensen Huang's leadership, NVIDIA has transformed into a diverse technology company with its GPU technology powering innovations across multiple industries.
                </p>
                <div className="relative h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden my-6">
                  <img 
                    src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20224/62756943b3aed35505d6503f_NVIDIA-logo-BL/NVIDIA-logo-BL_thmb.jpgremo" 
                    alt="NVIDIA Logo" 
                    className="w-full h-full object-contain bg-black"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-midnight rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-900 to-green-800 p-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Icon name="chart-pie" className="w-5 h-5 mr-2" />
                    NVIDIA Business Segments
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-12 bg-blue-500 mr-3"></div>
                      <div>
                        <h4 className="text-white font-medium">Gaming</h4>
                        <p className="text-sm text-gray-400">GeForce GPUs for gamers and creators</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-12 bg-green-500 mr-3"></div>
                      <div>
                        <h4 className="text-white font-medium">Data Center</h4>
                        <p className="text-sm text-gray-400">AI, high-performance computing solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-12 bg-yellow-500 mr-3"></div>
                      <div>
                        <h4 className="text-white font-medium">Professional Visualization</h4>
                        <p className="text-sm text-gray-400">Quadro GPUs for design professionals</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-12 bg-red-500 mr-3"></div>
                      <div>
                        <h4 className="text-white font-medium">Automotive</h4>
                        <p className="text-sm text-gray-400">Self-driving vehicle platforms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-midnight rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Icon name="lightbulb" className="w-5 h-5 mr-2 text-neon-green" />
                  Key Technology Areas
                </h3>
                <div className="text-gray-300 space-y-4">
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                    <h4 className="text-white font-medium flex items-center">
                      <Icon name="brain" className="w-4 h-4 mr-2 text-purple-400" />
                      Artificial Intelligence
                    </h4>
                    <p className="mt-2 text-sm">
                      GPUs power training and inference for AI models. NVIDIA's CUDA-accelerated frameworks like TensorRT, CUDA-X AI, and libraries have made NVIDIA the leading platform for AI development.
                    </p>
                  </div>
                  
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                    <h4 className="text-white font-medium flex items-center">
                      <Icon name="industry" className="w-4 h-4 mr-2 text-blue-400" />
                      High-Performance Computing
                    </h4>
                    <p className="mt-2 text-sm">
                      NVIDIA GPUs power many of the world's supercomputers, accelerating scientific research in fields like climate modeling, genomics, and physics simulations.
                    </p>
                  </div>
                  
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                    <h4 className="text-white font-medium flex items-center">
                      <Icon name="car" className="w-4 h-4 mr-2 text-green-400" />
                      Autonomous Vehicles
                    </h4>
                    <p className="mt-2 text-sm">
                      NVIDIA DRIVE platform provides end-to-end solutions for self-driving vehicles, from training AI models to deploying them in vehicles.
                    </p>
                  </div>
                  
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                    <h4 className="text-white font-medium flex items-center">
                      <Icon name="vr-cardboard" className="w-4 h-4 mr-2 text-orange-400" />
                      Graphics & Visualization
                    </h4>
                    <p className="mt-2 text-sm">
                      The original foundation of NVIDIA's business continues with RTX technology, ray tracing, and advanced rendering for gaming and professional applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-midnight rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">NVIDIA's Business Evolution</h3>
              
              <div className="relative pl-8 border-l-2 border-gray-700 space-y-8">
                <div className="relative">
                  <span className="absolute -left-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-neon-green">
                    <Icon name="gamepad" className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-white text-lg">1993-2006: Gaming Focus</h4>
                    <p className="text-gray-300 mt-2">NVIDIA focused on developing GPUs primarily for gaming and graphics applications, competing with ATI (later acquired by AMD).</p>
                  </div>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-neon-green">
                    <Icon name="code" className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-white text-lg">2006-2012: CUDA & Scientific Computing</h4>
                    <p className="text-gray-300 mt-2">The introduction of CUDA expanded NVIDIA's market to scientific computing, opening new revenue streams beyond graphics.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-neon-green">
                    <Icon name="brain" className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-white text-lg">2012-2018: AI Revolution</h4>
                    <p className="text-gray-300 mt-2">NVIDIA positioned its GPUs at the center of the deep learning revolution, with data center revenue growing rapidly.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-neon-green">
                    <Icon name="globe" className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-white text-lg">2018-Present: Platform Company</h4>
                    <p className="text-gray-300 mt-2">NVIDIA has transformed into a platform company with hardware, software, and services across gaming, enterprise, and specialized industries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TechExplainer;
