import { Course, Webinar, PodcastEpisode, Article, Testimonial, PartnershipCategory } from '../types';

export const HERO_STATS = [
  { label: 'Test Matches Played', value: '70' },
  { label: 'International Test Runs', value: '4,684' },
  { label: 'Test Centuries', value: '8' },
  { label: 'Test Career Avg', value: '44.21' },
  { label: 'Highest Test Score', value: '275*' },
  { label: 'ODI Matches', value: '138' },
];

export const CREDIBILITY_ITEMS = [
  { title: 'Former International Cricketer', desc: '70 Tests & 138 ODIs for South Africa with 4,684 Test runs' },
  { title: 'High-Performance Coach', desc: 'Decades of elite player development and international academy coaching' },
  { title: 'Cricket Analyst & Broadcaster', desc: 'Renowned expert media analyst for SuperSport, Cricinfo & global media' },
  { title: 'Performance Mentor', desc: '1-on-1 mental conditioning & technical mentorship for top-tier players' },
  { title: 'Founder & Entrepreneur', desc: 'Creator of CPI (Cullinan Performance Index) & Mighty Cricket Network' },
];

export const COURSES_DATA: Course[] = [
  {
    id: 'c1',
    title: 'Elite Batting Mechanics: From Foundation to Franchise T20',
    category: 'batting',
    type: 'Course',
    price: 149,
    originalPrice: 199,
    duration: '6 Modules • 24 Video Lessons',
    rating: 4.9,
    reviewsCount: 128,
    coverImage: '/images/action_batting.png',
    description: 'Master footwork, weight transfer, wrist control, and power hitting techniques refined over 70 Test matches.',
    fullDescription: 'Comprehensive video breakdown by Daryll Cullinan dissecting high-level biomechanics against fast bowling and world-class spin. Designed for professional players, academy athletes, and serious coaches.',
    highlights: [
      'Biomechanical breakdown of head position & balance',
      'Neutralizing 140km/h+ pace bowling with decisive footwork',
      'Spin play mastery: sweep, loft, and wrist manipulation',
      'T20 power options without compromising classical strokeplay',
      'Downloadable drills blueprint & practice routines'
    ],
    syllabus: [
      'Module 1: The Stance, Balance & Trigger Movements',
      'Module 2: Judgment of Line, Length & Defensive Precision',
      'Module 3: Attacking Stride & Driving Mechanics',
      'Module 4: Mastering World-Class Spin Bowling',
      'Module 5: Short Ball Management & Hook/Pull Control',
      'Module 6: Modern T20 Power Options & Range Hitting'
    ]
  },
  {
    id: 'c2',
    title: 'Mastering the Mental Game & Test Match Craft',
    category: 'player',
    type: 'Course',
    price: 129,
    originalPrice: 179,
    duration: '5 Modules • 18 Lessons',
    rating: 5.0,
    reviewsCount: 94,
    coverImage: '/images/daryll_hero.png',
    description: 'Build unshakeable focus, pressure management, and decision-making under intense competition.',
    fullDescription: 'Cricket is 80% mental at the elite level. Daryll shares exact cognitive frameworks, pre-ball routines, and emotional control techniques used in Test match pressure cookers.',
    highlights: [
      'Pre-ball breathing & focus anchoring techniques',
      'Handling high-pressure match situations & media focus',
      'Building resilience after low scores or errors',
      'Match tempo control & building long innings',
      'Visualisation & match-day routine optimization'
    ],
    syllabus: [
      'Module 1: Cognitive Clarity & Threat Response in Sport',
      'Module 2: The 5-Second Pre-Ball Reset Routine',
      'Module 3: Pacing an Innings Across Formats',
      'Module 4: Playing in Hostile Away Conditions',
      'Module 5: Post-Match Recovery & Reflection Discipline'
    ]
  },
  {
    id: 'e1',
    title: 'The Modern Coach\'s Playbook: CPI Methodology',
    category: 'coaching',
    type: 'eBook',
    price: 49,
    pages: 180,
    rating: 4.8,
    reviewsCount: 210,
    coverImage: '/images/cpi_dashboard.png',
    description: 'The definitive guide to implementing data-driven player diagnostics and performance evaluation.',
    fullDescription: 'Written by Daryll Cullinan, this guidebook outlines the complete Cullinan Performance Index framework, providing coaches with structured diagnostic rubrics for technique, tactics, and mental grit.',
    highlights: [
      'Complete CPI evaluation scoring matrices',
      '100+ diagnostic checkpoints for batting & match awareness',
      'Individual Player Development Plan (IPDP) templates',
      'Communication strategies for high-performance players',
      'Printable session plans & skill assessment sheets'
    ],
    syllabus: [
      'Chapter 1: The Evolution of High Performance Coaching',
      'Chapter 2: The 5 Pillars of the Cullinan Performance Index',
      'Chapter 3: Biomechanical Assessment Protocols',
      'Chapter 4: Tactical Intelligence & Game Sense',
      'Chapter 5: Designing High-Intensity Practice Environments'
    ]
  },
  {
    id: 'c3',
    title: 'Cricket Tactical Intelligence & Match Reading',
    category: 'cricket',
    type: 'Course',
    price: 99,
    duration: '4 Modules • 12 Video Seminars',
    rating: 4.9,
    reviewsCount: 76,
    coverImage: '/images/podcast_cover.png',
    description: 'Learn to read pitch conditions, field placements, bowling spells, and opponent strategies like a pro media analyst.',
    fullDescription: 'Daryll Cullinan brings decades of broadcast commentary and international playing experience to teach players and coaches how to dissect games in real time.',
    highlights: [
      'Pitch texture & wear pattern decoding',
      'Exploiting captaincy field setups & bowling changes',
      'Target setting & run-chase calculation formulas',
      'Opposition scouting & video analysis techniques'
    ],
    syllabus: [
      'Module 1: Environmental Analysis & Conditions',
      'Module 2: Bowler Setup & Tactical Trap Recognition',
      'Module 3: Run Chase Management Strategy',
      'Module 4: Advanced Opposition Scouting'
    ]
  },
  {
    id: 'e2',
    title: 'The Art of Playing Spin: Technique & Tactics',
    category: 'ebook',
    type: 'eBook',
    price: 39,
    pages: 120,
    rating: 4.9,
    reviewsCount: 165,
    coverImage: '/images/action_batting.png',
    description: 'Secrets to footwork, depth in crease, wrist rotation, and sweeping against world-class spinners.',
    fullDescription: 'A focused guide detailing how to conquer turning pitches, mystery spinners, and high-quality spin bowling attack variations.',
    highlights: [
      'Soft hands vs hard hands contact dynamics',
      'Reading revolutions off the hand vs off the pitch',
      'Conventional, reverse, and sweep shot mastery',
      'Using the full length of the crease effectively'
    ],
    syllabus: [
      'Part 1: Pitching Dynamics & Release Point Signals',
      'Part 2: Footwork Mechanics: Forward & Back',
      'Part 3: Shot Selection Matrix by Spin Type',
      'Part 4: Dominating Spin on Subcontinent Pitches'
    ]
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'p1',
    episodeNumber: 42,
    title: 'Decoding Modern Spin Dynamics & Subcontinent Play',
    duration: '48 mins',
    publishDate: 'September 24, 2026',
    description: 'Daryll breaks down how international batters adapt footwork against top-tier wrist spin and finger spin in modern multi-format cricket.',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    appleUrl: 'https://apple.com'
  },
  {
    id: 'p2',
    episodeNumber: 41,
    title: 'Mental Toughness Under Test Match Pressure',
    duration: '54 mins',
    publishDate: 'September 12, 2026',
    description: 'Special discussion on how elite athletes handle high-pressure environments, public scrutiny, and long-form match endurance.',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    appleUrl: 'https://apple.com'
  },
  {
    id: 'p3',
    episodeNumber: 40,
    title: 'Franchise T20 vs Test Batting Technique',
    duration: '42 mins',
    publishDate: 'August 28, 2026',
    description: 'Can a player maintain world-class Test match technique while developing 360-degree T20 hitting power? Daryll explores the balance.',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    appleUrl: 'https://apple.com'
  }
];

export const WEBINARS_DATA: Webinar[] = [
  {
    id: 'w1',
    title: 'CPI Performance Intelligence Masterclass for Head Coaches',
    date: 'October 15, 2026',
    time: '18:00 GMT / 20:00 SAST',
    topic: 'Coaching Analytics & CPI Implementation',
    description: 'An exclusive live 90-minute masterclass led by Daryll Cullinan demonstrating how head coaches and academy directors use the CPI index to fast-track player development.',
    targetAudience: 'Head Coaches, High Performance Directors, Academy Owners',
    isUpcoming: true,
    speaker: 'Daryll Cullinan'
  },
  {
    id: 'w2',
    title: 'Pre-Season Mental & Tactical Preparation for Elite Batters',
    date: 'November 05, 2026',
    time: '19:00 GMT / 21:00 SAST',
    topic: 'Batting Psychology & Match Readiness',
    description: 'Interactive workshop covering pre-ball routines, video preparation, and game plan execution for upcoming domestic and international seasons.',
    targetAudience: 'First-Class Players, Emerging Talent, Private Coaches',
    isUpcoming: true,
    speaker: 'Daryll Cullinan'
  },
  {
    id: 'w3',
    title: 'Dissecting Modern Franchise Bowling Attacks',
    date: 'August 14, 2026',
    time: 'Recorded Live',
    topic: 'Tactical Match Analysis',
    description: 'Recorded live masterclass analysing variation trends, seam position metrics, and death bowling tactics in franchise leagues.',
    targetAudience: 'Coaches, Analysts, Media Professionals',
    isUpcoming: false,
    speaker: 'Daryll Cullinan'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'a1',
    title: 'Why Biomechanical Balance is the Foundation of Long-Term Consistency',
    category: 'Coaching & Technique',
    readTime: '6 min read',
    publishDate: 'September 18, 2026',
    summary: 'Analyzing why slight alignment flaws in the stance multiply under high-velocity bowling and how to correct them.',
    imageUrl: '/images/action_batting.png'
  },
  {
    id: 'a2',
    title: 'The Evolution of Batting: From Test Match Solidity to T20 Innovation',
    category: 'Cricket Analysis',
    readTime: '8 min read',
    publishDate: 'August 30, 2026',
    summary: 'How classical strokeplay remains the ultimate anchor for modern multi-format players.',
    imageUrl: '/images/cpi_dashboard.png'
  },
  {
    id: 'a3',
    title: 'Introducing the Cullinan Performance Index (CPI): A New Era of Player Evaluation',
    category: 'Performance Tech',
    readTime: '5 min read',
    publishDate: 'August 10, 2026',
    summary: 'Moving beyond raw averages to measure tactical decision-making, pressure resilience, and technical execution.',
    imageUrl: '/images/daryll_hero.png'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Mark Richardson',
    role: 'Head of High Performance',
    organization: 'Apex Global Cricket Academy',
    quote: 'Daryll Cullinan’s depth of technical understanding and tactical insight transformed our elite coaching curriculum. The CPI platform has given us a scientific lens to evaluate player growth.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Graeme Thompson',
    role: 'Former First-Class Captain & Coach',
    organization: 'Highveld Cricket Institute',
    quote: 'Daryll is one of the purest thinkers on batting mechanics and mental fortitude in world cricket. His 1-on-1 mentoring provided immediate clarity for our top batters.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Sarah Jenkins',
    role: 'Senior Executive Producer',
    organization: 'International Sports Broadcast Network',
    quote: 'Daryll’s analysis on air is sharp, authoritative, and deeply engaging. He dissects complex game situations with supreme clarity for global audiences.',
    rating: 5
  }
];

export const PARTNERSHIP_CATEGORIES: PartnershipCategory[] = [
  {
    id: 'p1',
    title: 'Cricket Academies & Schools',
    description: 'Integrate Daryll Cullinan’s coaching philosophy, CPI evaluation systems, and staff development workshops into your academy curriculum.',
    iconName: 'GraduationCap',
    benefits: ['Curriculum licensing', 'Coach development masterclasses', 'Student CPI tracking portal']
  },
  {
    id: 'p2',
    title: 'Professional Teams & Franchises',
    description: 'High-performance consulting, opposition tactical audits, specialized batting mentorship, and squad diagnostic assessments.',
    iconName: 'Trophy',
    benefits: ['Tactical match preparation', '1-on-1 player mentoring', 'CPI squad diagnostics']
  },
  {
    id: 'p3',
    title: 'Brands & Sponsorships',
    description: 'Align your brand with world-class international cricket excellence, thought leadership, digital content creation, and executive ambassadorship.',
    iconName: 'Building2',
    benefits: ['Brand ambassador roles', 'Keynote speaking', 'Digital content collaboration']
  },
  {
    id: 'p4',
    title: 'Technology & Analytics Integrations',
    description: 'Partner with the Cullinan Performance Index (CPI) to integrate biomechanical sensors, AI video tracking, and performance metrics.',
    iconName: 'Cpu',
    benefits: ['CPI API integration', 'Co-developed sports tech modules', 'Data analytics research']
  }
];
