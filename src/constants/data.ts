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

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    author: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    date: "6 days ago",
    content: "RYTINWEB transformed our digital presence completely. The speed of delivery and the premium UI feel exceeded all expectations.",
    reviewsCount: 1,
  },
  {
    id: "rev2",
    author: "Priya Patel",
    initials: "PP",
    rating: 5,
    date: "1 week ago",
    content: "The team at RYTINWEB is incredibly professional. They delivered a highly responsive, clean Next.js architecture on budget and schedule.",
    reviewsCount: 1,
  },
  {
    id: "rev3",
    author: "Amit Mehta",
    initials: "AM",
    rating: 5,
    date: "4 weeks ago",
    content: "From pixel-perfect designs to lightning-fast performance, RYTINWEB is the best agency we have ever partnered with.",
    reviewsCount: 3,
  },
  {
    id: "rev4",
    author: "Ananya Iyer",
    initials: "AI",
    rating: 5,
    date: "2 months ago",
    content: "Outstanding communication and top-tier technical design. RYTINWEB is our go-to partner for front-end engineering and design systems.",
    reviewsCount: 2,
  },
];


