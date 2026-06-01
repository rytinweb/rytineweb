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
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    label: "What We Do",
    href: "/services",
    children: [
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "SEO", href: "/services/seo" },
      { label: "Social Media Optimization", href: "/services/social-media-optimization" },
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "AI Consultation", href: "/services/ai-consultation" },
      { label: "Google Ads Management", href: "/services/google-ads-management" },
    ],
  },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Web Design & Development",
    description: "Custom, high-converting websites that look stunning on every device and drive real business growth.",
    href: "/services/web-design-development",
    iconName: "Monitor",
  },
  {
    title: "Graphic Design",
    description: "Professional branding, logos, and marketing materials that make your business impossible to ignore.",
    href: "/services/graphic-design",
    iconName: "Paintbrush",
  },
  {
    title: "SEO",
    description: "Dominate search results and drive a flood of organic traffic to your business — sustainably.",
    href: "/services/seo",
    iconName: "TrendingUp",
  },
  {
    title: "Social Media Optimization",
    description: "Build a powerful brand presence and engaged community across every major social platform.",
    href: "/services/social-media-optimization",
    iconName: "Share2",
  },
  {
    title: "Website Maintenance",
    description: "Keep your website secure, fast, and perfectly tuned — so you never miss a beat or a lead.",
    href: "/services/website-maintenance",
    iconName: "ShieldCheck",
  },
  {
    title: "AI Consultation",
    description: "Leverage the power of artificial intelligence to streamline operations and outpace competitors.",
    href: "/services/ai-consultation",
    iconName: "Sparkles",
  },
];

export const PROCESS_ITEMS: ProcessItem[] = [
  {
    step: "01",
    title: "Discovery",
    description: "We deep-dive into your business, goals, and competition to craft a winning digital strategy tailored to you.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "Our team creates a stunning, custom solution — pixel-perfect design meets rock-solid development.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Launch & Grow",
    description: "We go live, then keep optimizing — tracking performance and driving continuous, compounding growth.",
    icon: "🚀",
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Canadian-Owned & Operated",
    description: "We're proudly Canadian. Our team understands the Canadian market, bilingual considerations, and local SEO — giving your business an edge over international agencies.",
    icon: "🍁",
  },
  {
    title: "Flat-Rate & Transparent Pricing",
    description: "No hidden fees, no long-term contracts. We offer affordable, flat-rate packages tailored to small and medium businesses across Canada.",
    icon: "💰",
  },
  {
    title: "Results-Driven Design Process",
    description: "We don't just build pretty layouts; we design conversion funnels. Every button placement and image is chosen to convert visitors into paying clients.",
    icon: "🎯",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    author: "Amass Market Today",
    initials: "AM",
    rating: 5,
    date: "6 days ago",
    content: "Working with Zam was a great experience from start to finish. Communication was clear, responsive, and professional throughout the entire website project. They were cooperative, easy to work with, and helped make the process smooth and efficient.",
    reviewsCount: 1,
  },
  {
    id: "rev2",
    author: "K. R.",
    initials: "KR",
    rating: 5,
    date: "1 week ago",
    content: "We chose to use Canadian Web Designs because they were easily contactable via phone and email. Ahmed was assigned to our project and he contacted us immediately, kept us up to date almost every day, and asked all the right questions. The website not only met our needs fully, it actually blew me away.",
    reviewsCount: 1,
  },
  {
    id: "rev3",
    author: "Mohamad Harb",
    initials: "MH",
    rating: 5,
    date: "4 weeks ago",
    content: "I had a great experience working with this company. Zam, the website developer, was patient, attentive, and delivered exactly what I needed for both of my websites.",
    reviewsCount: 7,
  },
  {
    id: "rev4",
    author: "Cristina Carpio",
    initials: "CC",
    rating: 5,
    date: "7 months ago",
    content: "I've really enjoyed working with Canadian Web Designs. Zam is an absolute professional. She's always prompt in answering questions, and any requests are handled quickly and efficiently. I highly recommend them to anyone looking for responsive and top-quality work.",
    reviewsCount: 1,
  },
  {
    id: "rev5",
    author: "Sean Samura",
    initials: "SS",
    rating: 5,
    date: "7 months ago",
    content: "I recently had the pleasure of using Zam of Canadian Web Designs for my websites, and I must say, she exceeded my expectations! The user interface is incredibly intuitive. Customer support is also top-notch. I highly recommend them!",
    reviewsCount: 4,
  },
  {
    id: "rev6",
    author: "Mai Abu-Taleb",
    initials: "MA",
    rating: 5,
    date: "4 months ago",
    content: "Zam did an excellent job building my website in a short period of time. Everything was completed exactly as requested, with great attention to detail and clear communication throughout. I'm very happy with the result!",
    reviewsCount: 27,
  },
];

export const SERVICE_AREAS = [
  { name: "Toronto", slug: "toronto", highlight: true },
  { name: "Calgary", slug: "calgary" },
  { name: "Vancouver", slug: "vancouver" },
  { name: "Montreal", slug: "montreal" },
  { name: "Edmonton", slug: "edmonton" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Ottawa", slug: "ottawa" },
  { name: "North York", slug: "north-york" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Brampton", slug: "brampton" },
  { name: "Kitchener", slug: "kitchener" },
  { name: "Halifax", slug: "halifax" },
  { name: "Surrey", slug: "surrey" },
  { name: "London", slug: "london" },
  { name: "Victoria", slug: "victoria" },
  { name: "Windsor", slug: "windsor" },
  { name: "Oshawa", slug: "oshawa" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Burnaby", slug: "burnaby" },
  { name: "Ladner", slug: "ladner" },
  { name: "Saskatoon", slug: "saskatoon" },
  { name: "Barrie", slug: "barrie" },
  { name: "Winnipeg", slug: "winnipeg" },
  { name: "Hamilton", slug: "hamilton" },
];
