import { NavLink, Stat, Benefit, Service, Testimonial, Industry } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'For Employers', href: '/employers' },
  { label: 'For Candidates', href: '/candidates' },
  { label: 'Recruitment Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export const STATS: Stat[] = [
  { value: '500+', label: 'Finance Placements' },
  { value: '150+', label: 'Hiring Partners' },
  { value: '15 Days', label: 'Avg. Hiring Time' },
  { value: '10,000+', label: 'Verified CAs & Finance Pros' },
];

export const WHY_GGC: Benefit[] = [
  {
    title: 'Finance-Only Focus',
    description: 'We don\'t do general hiring. We only hire CAs, Accountants, and Finance experts who know their numbers.',
    icon: 'target',
  },
  {
    title: 'Pre-Screened Talent',
    description: 'Every candidate is vetted by finance experts before they reach your desk.',
    icon: 'user-check',
  },
  {
    title: '3x Faster Hiring',
    description: 'Our specialized talent pool and automated filtering reduce your time-to-hire by 60%.',
    icon: 'zap',
  },
  {
    title: 'Expert Support',
    description: 'Our consultants are CA-led and understand the nuances of taxation, audit, and compliance roles.',
    icon: 'shield-check',
  },
];

export const RECRUITMENT_SERVICES: Service[] = [
  {
    title: 'End-to-End Hiring',
    description: 'We manage the entire recruitment lifecycle from sourcing to onboarding.',
    benefits: ['Dedicated Relationship Manager', 'Pre-interview screening', 'Onboarding support'],
  },
  {
    title: 'Bulk/Volume Hiring',
    description: 'Scalable solutions for growing finance teams, NBFCs, and global capability centers.',
    benefits: ['Parallel interview tracks', 'Standardized assessment', 'Rapid turnaround'],
  },
  {
    title: 'Campus Hiring',
    description: 'Direct access to fresh CA talent and finance graduates from top institutions.',
    benefits: ['Campus branding', 'Online testing portals', 'Logistics management'],
  },
  {
    title: 'Assisted Recruitment',
    description: 'Pay-per-hire models for specific high-level or niche finance roles.',
    benefits: ['Passive talent sourcing', 'Confidential hiring', 'Market benchmarking'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sameer Shah',
    role: 'Partner',
    company: 'SND & Associates (CA Firm)',
    quote: 'GGC Hire understands the specific skillsets required for audit and taxation better than any general agency we have worked with.',
    type: 'employer',
  },
  {
    name: 'Anjali Gupta',
    role: 'Finance Head',
    company: 'Growth Fintech',
    quote: 'We closed 5 critical accounting roles in flat 3 weeks. The quality of candidates was consistently high.',
    type: 'employer',
  },
  {
    name: 'Rahul Verma',
    role: 'Chartered Accountant',
    company: 'Big 4 Alumnus',
    quote: 'The matching process was seamless. I didn\'t have to sift through irrelevant roles. Found my current role at a top NBFC via GGC.',
    type: 'candidate',
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'CA Firms', icon: 'building' },
  { name: 'NBFCs & Fintech', icon: 'wallet' },
  { name: 'Tech Startups', icon: 'rocket' },
  { name: 'Manufacturing', icon: 'factory' },
  { name: 'Service Sector', icon: 'briefcase' },
  { name: 'Corporates', icon: 'landmark' },
];

export const LOGO_URLS = {
  colored: '/logo-colored.webp',
  white: '/logo-colored.webp',
};
