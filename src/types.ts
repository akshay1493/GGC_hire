export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  type: 'employer' | 'candidate';
}

export interface Industry {
  name: string;
  icon: string;
}
