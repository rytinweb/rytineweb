// NOTE: This is demo content and should be replaced with actual client information before production deployment.

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  content: string;
  location?: string;
  reviewsCount?: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Agency",
    href: "/who-we-are",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "SEO Positioning", href: "/services/seo" },
      { label: "Social Optimization", href: "/services/social-media-optimization" },
      { label: "System Maintenance", href: "/services/website-maintenance" },
      { label: "Custom Web Development", href: "/services/custom-web-development" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Web Design & Development",
    description: "High-performance, bespoke web interfaces designed for conversion, speed, and premium feel.",
    href: "/services/web-design-development",
    iconName: "Monitor",
  },
  {
    title: "Graphic Design",
    description: "Premium branding, visual systems, and identity design that captures your brand's core essence.",
    href: "/services/graphic-design",
    iconName: "Paintbrush",
  },
  {
    title: "SEO Positioning",
    description: "Boost organic visibility, capture search intent, and accelerate growth with clean optimization.",
    href: "/services/seo",
    iconName: "TrendingUp",
  },
  {
    title: "Social Optimization",
    description: "Build an active, authentic presence across digital channels to grow brand engagement.",
    href: "/services/social-media-optimization",
    iconName: "Share2",
  },
  {
    title: "System Maintenance",
    description: "Ensure your applications stay secure, updated, and highly responsive with proactive management.",
    href: "/services/website-maintenance",
    iconName: "ShieldCheck",
  },
  {
    title: "Custom Web Development",
    description: "End-to-end bespoke web engineering solutions tailored to solve complex business challenges.",
    href: "/services/custom-web-development",
    iconName: "Code",
  },
];

export const PROCESS_ITEMS: ProcessItem[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We align on your long-term goals, map user journeys, and construct a precise, high-performance execution roadmap.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "Our digital architects design and program stunning, custom user interfaces backed by robust next-gen code.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "We deploy the application, monitor conversion metrics, and scale performance continuously for compounding success.",
    icon: "🚀",
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Premium Craftsmanship",
    description: "We engineer high-fidelity, responsive digital interfaces tailored to scale. Minimal designs backed by robust, next-gen code.",
    icon: "✨",
  },
  {
    title: "Transparent Collaboration",
    description: "Flat-rate pricing with zero hidden fees. Clear timelines, weekly milestones, direct access, and no long-term contracts.",
    icon: "💼",
  },
  {
    title: "Conversion Focused",
    description: "Every micro-interaction, button placement, and asset is custom-tailored to optimize loading speed and user conversion.",
    icon: "🎯",
  },
];

// NOTE: The testimonials below are sample demo content and should be replaced with actual client reviews before production.
export const REVIEWS: Review[] = [
  {
    id: "rev1",
    author: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    date: "3 days ago",
    content: "The gym landing page built by RYTINWEB has completely modernized our member onboarding. Extremely clean, fast, and professional.",
    location: "Gym Owner",
    reviewsCount: 1,
  },
  {
    id: "rev2",
    author: "Priya Verma",
    initials: "PV",
    rating: 5,
    date: "1 week ago",
    content: "A beautiful minimal website that represents our organic café perfectly. The team is highly skilled in frontend engineering.",
    location: "Cafe Founder",
    reviewsCount: 1,
  },
  {
    id: "rev3",
    author: "Aman Gupta",
    initials: "AG",
    rating: 5,
    date: "2 weeks ago",
    content: "Highly conversion-focused real estate landing pages. Our inquiries doubled within weeks of launch. Excellent execution.",
    location: "Real Estate Director",
    reviewsCount: 1,
  },
  {
    id: "rev4",
    author: "Neha Singh",
    initials: "NS",
    rating: 5,
    date: "1 month ago",
    content: "Proactive maintenance, fast loading speeds, and great attention to detail for our medical clinic site.",
    location: "Medical Clinic Founder",
    reviewsCount: 2,
  },
  {
    id: "rev5",
    author: "Arjun Mehta",
    initials: "AM",
    rating: 5,
    date: "2 months ago",
    content: "Outstanding Next.js portal built for our coaching institute. Student enrollment queries have been seamless since launch.",
    location: "Coaching Institute Director",
    reviewsCount: 3,
  },
];


