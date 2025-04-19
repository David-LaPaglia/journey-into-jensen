// Mock data for the Journey into Jensen experience

export const nodes = [
  {
    id: 'vision',
    title: 'Visionary Leadership',
    description: 'Jensen Huang has been known for his incredible foresight in the technology sector.',
    icon: 'eye',
    position: { x: 3, y: 1 },
    content: {
      type: 'story',
      title: 'The NVIDIA Vision',
      body: `When Jensen Huang co-founded NVIDIA in 1993, he had a clear vision: to elevate computer graphics 
      to new heights. He saw that general-purpose CPUs weren't optimized for the complex calculations 
      needed for advanced graphics. This led to the creation of the Graphics Processing Unit (GPU), 
      revolutionizing gaming, design, and eventually AI.`,
      quote: `"We're all living in a science fiction dream right now."`,
      year: 1993
    }
  },
  {
    id: 'resilience',
    title: 'Resilience',
    description: 'A key trait of Jensen Huang has been his ability to persevere through challenges.',
    icon: 'shield',
    position: { x: 2, y: 2 },
    content: {
      type: 'story',
      title: 'Surviving Market Crashes',
      body: `During the dot-com crash of the early 2000s, NVIDIA faced serious challenges. Many tech 
      companies didn't survive, but under Jensen's leadership, NVIDIA adapted and persevered. 
      Instead of cutting research, Jensen doubled down on innovation, setting the stage for future success.`,
      quote: `"We're always a heartbeat away from failure. That's why we work so hard."`,
      year: 2002
    }
  },
  {
    id: 'cuda',
    title: 'CUDA Platform',
    description: 'The creation of CUDA was a pivotal moment in NVIDIAs history.',
    icon: 'bolt',
    position: { x: 4, y: 2 },
    content: {
      type: 'challenge',
      challengeId: 'cuda-investment'
    }
  },
  {
    id: 'ai-pivot',
    title: 'AI Revolution',
    description: 'Jensen recognized the potential of AI early and positioned NVIDIA at its center.',
    icon: 'brain',
    position: { x: 3, y: 3 },
    content: {
      type: 'story',
      title: 'Betting on AI',
      body: `When deep learning began showing promise, Jensen saw the potential for GPUs beyond gaming and 
      graphics. He pivoted significant resources toward optimizing NVIDIA technology for AI workloads. 
      This decision transformed NVIDIA from a gaming company to an AI powerhouse.`,
      quote: `"AI is the most powerful technology force of our time."`,
      year: 2012
    }
  },
  {
    id: 'leadership-style',
    title: 'Leadership Style',
    description: 'Jensen is known for his distinctive approach to leading NVIDIA.',
    icon: 'crown',
    position: { x: 1, y: 3 },
    content: {
      type: 'story',
      title: 'Direct and Passionate',
      body: `Jensen is known for his passionate, direct communication style. He focuses on clear vision, 
      encourages risk-taking, and pushes his team to think beyond conventional boundaries. His famous 
      leather jacket has become a symbol of his hands-on, distinctive leadership.`,
      quote: `"I say what I think, and I do what I say."`,
      year: 2016
    }
  },
  {
    id: 'risk-taking',
    title: 'Calculated Risks',
    description: 'Taking bold but calculated risks has defined Jensen\'s career.',
    icon: 'dice',
    position: { x: 5, y: 3 },
    content: {
      type: 'challenge',
      challengeId: 'arm-acquisition'
    }
  },
  {
    id: 'innovation',
    title: 'Innovation Focus',
    description: 'Jensen has maintained a relentless focus on innovation throughout his career.',
    icon: 'lightbulb',
    position: { x: 5, y: 1 },
    content: {
      type: 'story',
      title: 'The Innovation Mindset',
      body: `Under Jensen's leadership, NVIDIA has maintained a culture of continuous innovation. The company 
      consistently reinvests approximately 20% of revenue into R&D, much higher than industry averages. 
      This commitment has enabled NVIDIA to stay ahead of technological curves.`,
      quote: `"The reason we're valuable is because we're creating a company that's innovating."`,
      year: 2020
    }
  },
  {
    id: 'product-design',
    title: 'Product Philosophy',
    description: 'Jensens approach to product design has been integral to NVIDIAs success.',
    icon: 'cube',
    position: { x: 1, y: 1 },
    content: {
      type: 'challenge',
      challengeId: 'product-strategy'
    }
  },
  {
    id: 'corporate-culture',
    title: 'Company Culture',
    description: 'The unique corporate culture Jensen fostered at NVIDIA.',
    icon: 'users',
    position: { x: 2, y: 4 },
    content: {
      type: 'story',
      title: 'Building NVIDIAs Culture',
      body: `Jensen has fostered a culture that emphasizes intellectual honesty, willingness to challenge ideas, 
      and high performance expectations. NVIDIA's culture reflects his belief that revolutionary products 
      come from teams that are passionate and unafraid to pursue ambitious goals.`,
      quote: `"Our culture is based on a simple principle: we hire the world's best people and give them the freedom to do great work."`,
      year: 2018
    }
  },
  {
    id: 'market-perception',
    title: 'Market Strategy',
    description: 'How Jensen has navigated market perception and competition.',
    icon: 'chart-line',
    position: { x: 4, y: 4 },
    content: {
      type: 'challenge',
      challengeId: 'crypto-market'
    }
  }
];

export const challenges = [
  {
    id: 'cuda-investment',
    title: 'The CUDA Decision',
    description: `In 2006, Jensen had to decide whether to invest heavily in creating CUDA, a parallel 
    computing platform that would allow developers to use NVIDIA GPUs for general-purpose processing.`,
    question: 'Should NVIDIA invest significant resources in developing CUDA?',
    options: [
      {
        text: 'Focus only on graphics technology - our core business',
        isCorrect: false,
        feedback: `While focusing on graphics would have been the safe choice, Jensen chose to invest in CUDA. 
        This bold move opened GPUs to general-purpose computing and eventually positioned NVIDIA perfectly 
        for the AI revolution.`
      },
      {
        text: 'Invest heavily in CUDA as a new computing platform',
        isCorrect: true,
        feedback: `Jensen chose to invest heavily in CUDA, recognizing that GPUs had potential far beyond graphics. 
        This decision transformed NVIDIA and the computing industry, enabling GPU computing for science, AI, and more.`
      },
      {
        text: 'Partner with another company to develop general-purpose GPU computing',
        isCorrect: false,
        feedback: `Jensen decided that NVIDIA should develop CUDA independently, maintaining control over this 
        critical technology. This allowed NVIDIA to build a complete ecosystem around GPU computing.`
      }
    ],
    year: 2006,
    impact: `CUDA became the foundation for NVIDIA's expansion beyond graphics. It enabled researchers and 
    developers to harness GPU power for scientific computing, deep learning, and AI applications, 
    fundamentally changing NVIDIA's trajectory.`
  },
  {
    id: 'arm-acquisition',
    title: 'The Arm Acquisition',
    description: `In 2020, Jensen made the decision to acquire Arm Holdings for $40 billion, the largest 
    semiconductor deal in history at that time.`,
    question: 'Should NVIDIA pursue the acquisition of Arm Holdings?',
    options: [
      {
        text: 'Pursue the acquisition despite regulatory challenges',
        isCorrect: true,
        feedback: `Jensen decided to pursue the acquisition, seeing tremendous strategic value in combining 
        NVIDIA's AI capabilities with Arm's CPU ecosystem. While the deal ultimately faced regulatory obstacles 
        and didn't complete, it demonstrated Jensen's willingness to make bold moves.`
      },
      {
        text: 'Focus on partnerships instead of acquisition',
        isCorrect: false,
        feedback: `Rather than just partnering, Jensen chose to pursue full acquisition, believing that deeper 
        integration would create more value. Though the deal didn't succeed due to regulatory concerns, the vision 
        behind it influenced NVIDIA's subsequent CPU development efforts.`
      },
      {
        text: 'Develop competing CPU technology internally',
        isCorrect: false,
        feedback: `While NVIDIA has since pursued internal CPU development, Jensen saw acquiring Arm as a faster 
        and more effective strategy at the time. The attempted acquisition reflected Jensen's preference for 
        bold, transformative moves over incremental steps.`
      }
    ],
    year: 2020,
    impact: `Though the acquisition was eventually abandoned due to regulatory concerns, it highlighted 
    Jensen's ambitious vision for NVIDIA's future - creating an end-to-end computing platform spanning 
    CPUs, GPUs, and networking.`
  },
  {
    id: 'product-strategy',
    title: 'GeForce Product Strategy',
    description: `In the early 2000s, Jensen faced a decision about how to position NVIDIA's GeForce products 
    in an increasingly competitive GPU market.`,
    question: 'What product strategy should NVIDIA pursue for its GeForce line?',
    options: [
      {
        text: 'Compete primarily on price to gain market share',
        isCorrect: false,
        feedback: `Jensen rejected competing primarily on price, believing it would lead to a race to the bottom. 
        Instead, he positioned GeForce as a premium product with unique features and performance advantages.`
      },
      {
        text: 'Focus on high-end performance and innovative features',
        isCorrect: true,
        feedback: `Jensen chose to focus on high-end performance and innovation, positioning GeForce as the premium 
        choice for gamers and creators. This strategy established NVIDIA's technological leadership and built 
        strong brand loyalty.`
      },
      {
        text: 'Diversify into multiple market segments with various product lines',
        isCorrect: false,
        feedback: `While NVIDIA did eventually address multiple segments, Jensen first established dominance in 
        the high-end market, building NVIDIA's reputation for excellence before expanding to other segments.`
      }
    ],
    year: 2002,
    impact: `This product philosophy became central to NVIDIA's identity - create the best possible products 
    rather than the cheapest. The GeForce line became synonymous with cutting-edge gaming performance and 
    established NVIDIA as the leader in graphics technology.`
  },
  {
    id: 'crypto-market',
    title: 'The Cryptocurrency Challenge',
    description: `In 2017-2018, cryptocurrency mining created huge demand for GPUs, but Jensen had to decide 
    how NVIDIA should respond to this volatile market.`,
    question: 'How should NVIDIA approach the cryptocurrency mining demand for GPUs?',
    options: [
      {
        text: 'Optimize GeForce cards specifically for crypto mining',
        isCorrect: false,
        feedback: `Jensen avoided optimizing the main GeForce line for mining, recognizing that the crypto market 
        was volatile and could distract from NVIDIA's core gaming audience.`
      },
      {
        text: 'Create a separate product line for cryptocurrency miners',
        isCorrect: true,
        feedback: `Jensen eventually directed NVIDIA to create Cryptocurrency Mining Processors (CMPs) - specialized 
        products for miners that wouldn't impact the GeForce supply for gamers. This balanced approach addressed 
        the new market while protecting NVIDIA's core business.`
      },
      {
        text: 'Ignore the crypto trend and focus only on gaming and professional markets',
        isCorrect: false,
        feedback: `While Jensen maintained focus on core markets, he didn't ignore the crypto trend entirely. 
        NVIDIA found ways to serve this market while minimizing risk and protecting their primary customer base.`
      }
    ],
    year: 2018,
    impact: `This challenge demonstrated Jensen's ability to navigate market volatility. When cryptocurrency 
    demand later collapsed, NVIDIA was affected but not devastated because Jensen had maintained balance 
    and not over-committed to this volatile segment.`
  }
];

export const timelineEvents = [
  {
    year: 1993,
    title: "NVIDIA Founded",
    description: "Jensen Huang co-founds NVIDIA with Chris Malachowsky and Curtis Priem."
  },
  {
    year: 1999,
    title: "Introduction of GeForce 256",
    description: "NVIDIA releases the GeForce 256, marketed as the world's first GPU."
  },
  {
    year: 2006,
    title: "CUDA Platform Launched",
    description: "NVIDIA introduces CUDA, enabling general-purpose computing on GPUs."
  },
  {
    year: 2009,
    title: "Tegra Mobile Processors",
    description: "NVIDIA launches Tegra mobile processors, expanding into the mobile market."
  },
  {
    year: 2012,
    title: "AI Breakthrough with AlexNet",
    description: "AlexNet, trained on NVIDIA GPUs, wins the ImageNet competition, marking the beginning of the deep learning revolution."
  },
  {
    year: 2016,
    title: "Focus on Self-Driving Cars",
    description: "NVIDIA unveils the DRIVE PX platform for autonomous vehicles."
  },
  {
    year: 2018,
    title: "RTX Graphics Technology",
    description: "Introduction of RTX graphics cards with real-time ray tracing capabilities."
  },
  {
    year: 2020,
    title: "Arm Acquisition Attempt",
    description: "NVIDIA announces plan to acquire Arm Holdings for $40 billion (later abandoned in 2022)."
  },
  {
    year: 2022,
    title: "AI Computing Leadership",
    description: "NVIDIA's data center business becomes its largest segment, reflecting its AI dominance."
  },
  {
    year: 2023,
    title: "AI Boom Propels NVIDIA",
    description: "NVIDIA's market value surges past $1 trillion as AI adoption accelerates worldwide."
  },
  {
    year: 9999,
    title: "Did you like my little game I made? ",
    description: "I made this game to help you learn about Jensen's journey and the history of NVIDIA."
  }
];

export const bonusContent = {
  'jensen-quote-1': {
    type: 'quote',
    content: "The more you buy, the more you save.",
    context: "Jensen's famous tongue-in-cheek phrase when introducing new, expensive products."
  },
  'jensen-quote-2': {
    type: 'quote',
    content: "You don't have to sell more than iPhone and iPad. You just have to sell enough.",
    context: "Huang's insight on the importance of finding the right market fit rather than pure volume."
  },
  'jensen-video-1': {
    type: 'video',
    title: 'Cooking with Jensen',
    description: 'In March 2020, during the pandemic, Jensen revealed NVIDIA\'s new flagship GPU by pulling it out of an oven he was using at home.',
    link: 'https://www.youtube.com/watch?v=So7TNRhIYJ8'
  },
  'nvidia-fact-1': {
    type: 'fact',
    title: 'The NVIDIA Name',
    content: 'The name "NVIDIA" comes from the Latin word "invidia," meaning "envy." The company founders wanted to create graphics so realistic they would make others envious.'
  },
  'jensen-interview': {
    type: 'interview',
    title: 'On Ambition and Risk',
    excerpt: `"We're willing to push the envelope, take risks, maybe even get ahead of ourselves a little bit 
    in order to go after our dreams. We're not afraid to dream. And we're not afraid to fail."`,
    source: "Fortune Magazine Interview, 2017"
  }
};
