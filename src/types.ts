export interface NavigationItem {
  id: string;
  label: string;
  badge?: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'cricket' | 'coaching' | 'batting' | 'player' | 'ebook';
  type: 'Course' | 'eBook' | 'Masterclass';
  price: number;
  originalPrice?: number;
  duration?: string;
  pages?: number;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  syllabus?: string[];
}

export interface Webinar {
  id: string;
  title: string;
  date: string;
  time: string;
  topic: string;
  description: string;
  targetAudience: string;
  isUpcoming: boolean;
  speaker: string;
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  duration: string;
  publishDate: string;
  audioUrl?: string;
  description: string;
  spotifyUrl: string;
  youtubeUrl: string;
  appleUrl: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface PartnershipCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}
