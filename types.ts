
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type PageName = 'home' | 'about' | 'portfolio' | 'daily-life' | 'contact';

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
  };
  about: {
    title: string;
    bio: string;
    philosophy: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    linkedin: string;
  };
  theme: {
    primaryColor: string;
  };
}

export interface DailyLifeItem {
  id: string;
  type: 'image' | 'video' | 'blog';
  url?: string; // Optional for blogs
  title?: string; // Required for blogs
  caption: string; // Acts as body text for blogs
  date?: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface Experience {
  year: string;
  role: string;
  location: string;
  description: string;
  details?: string[];
}
