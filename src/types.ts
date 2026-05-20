export interface Article {
  id: string;
  title: string;
  titleBn: string;
  slug: string;
  category: string;
  categoryBn: string;
  readTime: string;
  readTimeBn: string;
  date: string;
  dateBn: string;
  author: string;
  authorBn: string;
  summary: string;
  summaryBn: string;
  content: string[];
  contentBn: string[];
  tags: string[];
  tagsBn: string[];
  image: string;
  disclaimer: string;
  disclaimerBn: string;
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  count: number;
  countBn: string;
  icon: string;
  color: string;
  description: string;
  descriptionBn: string;
}

export interface Course {
  id: string;
  title: string;
  titleBn: string;
  instructor: string;
  instructorBn: string;
  lessons: number;
  lessonsBn: string;
  duration: string;
  durationBn: string;
  price: string;
  priceBn: string;
  originalPrice: string;
  originalPriceBn: string;
  rating: number;
  enrolled: number;
  enrolledBn: string;
  image: string;
  badge: string;
  badgeBn: string;
}

export interface Counselor {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  qualifications: string[];
  qualificationsBn: string[];
  availability: string;
  availabilityBn: string;
  avatar: string;
  rating: number;
}

export interface Book {
  id: string;
  title: string;
  titleBn: string;
  author: string;
  authorBn: string;
  price: string;
  priceBn: string;
  originalPrice: string;
  originalPriceBn: string;
  pages: number;
  pagesBn: string;
  rating: number;
  image: string;
  badge: string;
  badgeBn: string;
  description?: string;
  descriptionBn?: string;
}

