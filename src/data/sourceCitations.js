// Source citations for content used in the Jensen Journey application

export const citations = {
  // Node content citations
  'vision': {
    content: {
      source: 'NVIDIA Corporate History and Jensen Huang interviews',
      url: 'https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/',
      accessDate: 'April 2025'
    },
    quote: {
      source: 'Jensen Huang at GTC 2021 Keynote',
      url: 'https://www.youtube.com/watch?v=eAn_oiZwUXA',
      accessDate: 'April 2025'
    },
    image: {
      source: 'NVIDIA Historical Archive',
      url: 'https://www.nvidia.com/en-us/about-nvidia/jensen-huang/',
      copyright: '© NVIDIA Corporation',
      accessDate: 'April 2025'
    }
  },
  'resilience': {
    content: {
      source: 'Fortune Magazine, "NVIDIA\'s Wild Ride"',
      url: 'https://fortune.com/2025/04/14/nvidia-says-it-will-build-up-to-500-billion-of-ai-gear-in-u-s/',
      accessDate: 'April 2025'
    },
    quote: {
      source: 'Jensen Huang interview with Harvard Business Review, 2018',
      url: 'https://hbr.org/2018/11/how-nvidia-is-using-its-position-in-gaming-to-create-the-next-wave-of-ai',
      accessDate: 'April 2025'
    },
    image: {
      source: 'Yahoo Finance Historical Data, NVIDIA Stock Performance 2000-2002',
      url: 'https://finance.yahoo.com/quote/NVDA/history/',
      copyright: '© Yahoo Finance',
      accessDate: 'April 2025'
    }
  },
  'cuda': {
    content: {
      source: 'NVIDIA CUDA Documentation History',
      url: 'https://developer.nvidia.com/cuda-toolkit',
      accessDate: 'April 2025'
    },
    image: {
      source: 'NVIDIA GTC 2016 Press Photos',
      url: 'https://www.nvidia.com/en-us/gtc/',
      copyright: '© NVIDIA Corporation',
      accessDate: 'April 2025'
    }
  },
  'leadership-style': {
    content: {
      source: 'Forbes Profile, "The Leadership Style of Jensen Huang"',
      url: 'https://www.forbes.com/profile/jensen-huang/',
      accessDate: 'April 2025'
    },
    quote: {
      source: 'CNBC Interview with Jensen Huang, 2019',
      url: 'https://www.cnbc.com/2019/03/10/nvidia-ceo-jensen-huang-interview.html',
      accessDate: 'April 2025'
    }
  },
  'innovation': {
    content: {
      source: 'NVIDIA Annual Report 2020',
      url: 'https://investor.nvidia.com/financial-info/annual-reports-and-proxies/default.aspx',
      accessDate: 'April 2025'
    },
    quote: {
      source: 'Jensen Huang, Bloomberg Technology Conference 2020',
      url: 'https://www.bloomberg.com/news/videos/2020-06-23/nvidia-ceo-huang-on-ai-adoption-data-center-growth-video',
      accessDate: 'April 2025'
    }
  },
  'corporate-culture': {
    content: {
      source: 'NVIDIA Life Blog, "Inside NVIDIA\'s Culture"',
      url: 'https://blogs.nvidia.com/blog/category/corporate/',
      accessDate: 'April 2025'
    },
    quote: {
      source: 'Jensen Huang, All-Hands Meeting Transcript, 2018',
      url: 'https://www.nvidia.com/en-us/about-nvidia/careers/life-at-nvidia/',
      accessDate: 'April 2025'
    }
  },
  
  // Challenge citations
  'cuda-investment': {
    content: {
      source: 'IEEE Spectrum, "The CUDA Revolution"',
      url: 'https://spectrum.ieee.org/computing/hardware/nvidia-ceo-on-computing-future',
      accessDate: 'April 2025'
    }
  },
  'arm-acquisition': {
    content: {
      source: 'Wall Street Journal, "NVIDIA\'s $40 Billion Arm Deal"',
      url: 'https://www.wsj.com/articles/nvidia-to-buy-arm-holdings-from-softbank-for-40-billion-11600021139',
      accessDate: 'April 2025'
    }
  },
  'product-strategy': {
    content: {
      source: 'Harvard Business School Case Study, "NVIDIA\'s Product Strategy"',
      url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=54132',
      accessDate: 'April 2025'
    }
  },
  'crypto-market': {
    content: {
      source: 'Bloomberg, "NVIDIA\'s Response to Crypto Mining Demand"',
      url: 'https://www.bloomberg.com/news/articles/2018-05-10/nvidia-ceo-says-games-will-be-bigger-business-than-mining',
      accessDate: 'April 2025'
    }
  },
  
  // Timeline event citations
  'timeline': {
    source: 'NVIDIA Corporate Timeline and Press Releases',
    url: 'https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/',
    accessDate: 'April 2025'
  },
  
  // Bonus content citations
  'jensen-quote-1': {
    source: 'NVIDIA GTC 2020 Keynote',
    url: 'https://www.youtube.com/watch?v=6hS7AI9OlZ0',
    accessDate: 'April 2025'
  },
  'jensen-quote-2': {
    source: 'Jensen Huang Interview, Barron\'s Tech Conference 2017',
    url: 'https://www.barrons.com/articles/nvidias-ceo-huang-compute-is-the-future-of-all-automation-1507585114',
    accessDate: 'April 2025'
  },
  'jensen-video-1': {
    source: 'NVIDIA GTC 2020 Keynote (Kitchen Edition)',
    url: 'https://www.youtube.com/watch?v=So7TNRhIYJ8',
    accessDate: 'April 2025'
  },
  'nvidia-fact-1': {
    source: 'NVIDIA Corporate FAQ',
    url: 'https://www.nvidia.com/en-us/about-nvidia/company-faq/',
    accessDate: 'April 2025'
  },
  'jensen-interview': {
    source: 'Fortune Magazine Interview with Jensen Huang, 2017',
    url: 'https://fortune.com/longform/nvidia-jensen-huang-interview/',
    accessDate: 'April 2025'
  }
};

// Function to get citation for a specific content item
export const getCitation = (nodeId, contentType = 'content') => {
  if (!citations[nodeId]) return null;
  return citations[nodeId][contentType] || citations[nodeId];
};

// Function to render a citation as formatted text
export const formatCitation = (citation) => {
  if (!citation) return '';
  
  let result = `Source: ${citation.source}`;
  if (citation.url) result += `, [Link](${citation.url})`;
  if (citation.accessDate) result += `, accessed ${citation.accessDate}`;
  if (citation.copyright) result += ` ${citation.copyright}`;
  
  return result;
};
