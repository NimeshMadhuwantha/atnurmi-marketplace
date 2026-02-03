export interface Service {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface Product {
  image: string;
  title: string;
  description: string;
  price: string | number;
  isPremium?: boolean;
  isFree?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
