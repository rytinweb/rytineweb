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

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introParagraph: string;
  longDescription: string;
  benefits: string[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDesc: string;
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
      { label: "Custom Website Development", href: "/services/custom-website-development" },
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Graphic Design", href: "/services/graphic-design" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Custom Website Development",
    description: "High-performance Next.js architectures, bespoke interfaces, and speed-optimized frontends.",
    href: "/services/custom-website-development",
    iconName: "Code",
    metaTitle: "Custom Website Development Delhi | Next.js Agency India",
    metaDescription: "Hire RYTINWEB for high-performance custom website development in Delhi, Noida & Gurugram. We build fast, mobile-responsive React & Next.js websites.",
    h1: "Custom Website Development Services in Delhi NCR",
    introParagraph: "In today's competitive landscape, a generic template is not enough. We engineer bespoke web solutions from the ground up, combining clean typography, blazing-fast Next.js performance, and conversion-optimized architectures to scale your digital presence.",
    longDescription: "We build tailored digital systems designed to align with your product objectives. From corporate websites to complex startup portals, our development focus is on developer velocity, minimal code overhead, and flawless responsive layouts. By developing with React and Next.js, we eliminate sluggish page loads, ensuring your site remains responsive across all modern mobile and desktop displays.",
    benefits: [
      "100% Mobile-Responsive Web Layouts",
      "Blazing-Fast Next.js & React Architectures",
      "Clean, Semantic & W3C Validated Markup",
      "Conversion-Focused Call-to-Actions (CTAs)"
    ],
    faqs: [
      {
        question: "Why should we choose custom Next.js development over WordPress?",
        answer: "Next.js offers superior loading speeds, robust security against SQL injections, and unlimited design flexibility compared to WordPress templates."
      },
      {
        question: "Do you design mobile-friendly responsive websites?",
        answer: "Yes, all our custom website development projects follow a mobile-first design strategy, ensuring flawless layout scaling on all devices."
      },
      {
        question: "What industries in India do you build websites for?",
        answer: "We build high-performance business websites for startups, local businesses, e-commerce brands, and personal brands across Delhi NCR."
      }
    ],
    ctaTitle: "Ready to Build a Custom Business Website?",
    ctaDesc: "Schedule a consultation with our web engineering team in Delhi NCR to get a clean development roadmap."
  },
  {
    title: "Website Maintenance",
    description: "Keep your website updated, secure, bug-free, and running with proactive technical updates.",
    href: "/services/website-maintenance",
    iconName: "ShieldCheck",
    metaTitle: "Website Maintenance Services Delhi | Proactive Support India",
    metaDescription: "Keep your site fast, secure, and bug-free with website maintenance services by RYTINWEB in Delhi, Noida, and Gurugram. Technical support and site audits.",
    h1: "Website Maintenance Services India & Delhi NCR",
    introParagraph: "Websites require regular upkeep to ensure security, high performance, and smooth customer experiences. Our proactive maintenance services keep your website updated, secure, and running without any technical glitches or sudden downtime.",
    longDescription: "We provide comprehensive web support, including core software updates, routine security audits, performance profiling, and prompt bug fixes. Whether your site is built on React, Next.js, or HTML/JS, we monitor its health to ensure high Core Web Vitals and protect against security vulnerabilities, keeping your online storefront completely operational.",
    benefits: [
      "Routine Security & Vulnerability Audits",
      "Regular Core & Package Updates",
      "Core Web Vitals Performance Tuning",
      "On-Demand Technical Support & Bug Fixes"
    ],
    faqs: [
      {
        question: "What does your website maintenance service include?",
        answer: "It includes core framework updates, security scanning, backup management, visual error fixes, and speed optimization audits."
      },
      {
        question: "How quickly do you resolve urgent website bugs?",
        answer: "Critical errors and downtime issues are prioritized immediately, with active communication and quick resolutions within 24 hours."
      },
      {
        question: "Do you support websites not built by RYTINWEB?",
        answer: "Yes, we maintain, audit, and optimize existing websites built on various frameworks for businesses across India."
      }
    ],
    ctaTitle: "Keep Your Website Safe and Running Smoothly",
    ctaDesc: "Let our technical team handle the security, updates, and optimization of your business website."
  },
  {
    title: "SEO Services",
    description: "Boost your organic search rankings, traffic, and local visibility with technical & on-page SEO.",
    href: "/services/seo",
    iconName: "TrendingUp",
    metaTitle: "SEO Services India | SEO Agency Delhi, Noida & Gurugram",
    metaDescription: "Accelerate your search visibility with professional SEO services in India by RYTINWEB. We specialize in Technical, On-Page, and Local SEO in Delhi NCR.",
    h1: "SEO Services India | Search Engine Optimization Delhi NCR",
    introParagraph: "Getting traffic is good, but getting high-intent organic search traffic is what drives business growth. Our search engine optimization services align search queries with your service pages to boost rankings and drive conversions.",
    longDescription: "We conduct technical SEO audits, optimize metadata, refine heading structures, and improve internal linking architecture. Focusing heavily on Local SEO, we optimize your Google Business Profile and target localized queries across Delhi NCR, Gurugram, and Noida to put your brand in front of ready-to-buy local prospects.",
    benefits: [
      "In-Depth Technical SEO Audits",
      "High-Intent Local SEO targeting Delhi NCR",
      "Google Search Console & Analytics Integration",
      "Schema Markup & Structured Microdata"
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO services?",
        answer: "Organic ranking improvements usually become visible within 3 to 6 months of applying clean on-page and technical optimizations."
      },
      {
        question: "What is the difference between On-Page and Technical SEO?",
        answer: "On-page SEO focuses on content quality and keyword mapping. Technical SEO deals with speed, crawlability, sitemaps, and indexing."
      },
      {
        question: "Do you optimize Google Business Profiles for local search?",
        answer: "Yes, local SEO optimization for Delhi, Noida, and Gurugram businesses is a central part of our search marketing strategies."
      }
    ],
    ctaTitle: "Claim the Top Spot on Google Search Results",
    ctaDesc: "Get a detailed organic search audit and mapping roadmap from our SEO strategists in Delhi."
  },
  {
    title: "Digital Marketing",
    description: "Generate qualified leads, build brand awareness, and accelerate online growth through marketing.",
    href: "/services/digital-marketing",
    iconName: "Share2",
    metaTitle: "Digital Marketing Agency Delhi NCR | Lead Generation India",
    metaDescription: "Partner with a growing digital marketing agency in Delhi, Noida & Gurugram. We build brand awareness, social media campaigns, and lead generation.",
    h1: "Digital Marketing Agency Delhi | Online Growth Services",
    introParagraph: "Modern marketing requires an integrated digital strategy to capture and convert attention. We design data-driven digital marketing campaigns that build brand authority, generate verified leads, and drive customer acquisition.",
    longDescription: "From planning social media calendars to structuring highly-targeted marketing campaigns, we align your brand stories with target user profiles. We focus on low acquisition costs and high conversion metrics to ensure your advertising budgets generate compounding business growth across India.",
    benefits: [
      "Targeted Social Media Marketing (SMM)",
      "Data-Driven Brand Positioning Strategy",
      "Conversion Rate Optimization (CRO)",
      "Clear Customer Acquisition Roadmaps"
    ],
    faqs: [
      {
        question: "Which digital marketing channels are best for my startup?",
        answer: "We analyze your target audience to recommend the highest converting channels, typically starting with search and targeted social media."
      },
      {
        question: "Do you manage social media accounts for businesses?",
        answer: "Yes, we design, write, and manage professional social media creative campaigns to foster community and brand awareness."
      },
      {
        question: "How do you measure digital marketing success?",
        answer: "We focus on primary business metrics such as cost-per-lead, conversion rates, and overall return on marketing spend."
      }
    ],
    ctaTitle: "Ready to Grow Your Brand Online?",
    ctaDesc: "Talk to our digital marketing specialists in Delhi NCR to plan a targeted growth strategy for your business."
  },
  {
    title: "Graphic Design",
    description: "Custom logo designs, visual identity systems, and high-impact digital branding creatives.",
    href: "/services/graphic-design",
    iconName: "Paintbrush",
    metaTitle: "Graphic Design Services Delhi NCR | Custom Brand Identity",
    metaDescription: "Hire RYTINWEB for creative graphic design services in Delhi, Noida & Gurugram. We design professional logos, social media creatives, and marketing assets.",
    h1: "Graphic Design Services Delhi | Creative Branding Agency",
    introParagraph: "Great design speaks for your brand before your customers read a single word of code. We create clean, cohesive visual identities, marketing assets, and digital graphics that communicate your brand values instantly.",
    longDescription: "We build tailored graphic assets including business branding kits, professional logo suites, high-conversion landing page layouts, and social media templates. By maintaining a clean design system and typography standards, we ensure your brand looks cohesive across all online and print platforms.",
    benefits: [
      "Bespoke Logo Design & Brand Identity",
      "Social Media Creative Designs & Templates",
      "High-Resolution Print-Ready Marketing Assets",
      "Consistent Design Systems & Visual Style"
    ],
    faqs: [
      {
        question: "What visual assets are included in a brand identity kit?",
        answer: "A typical kit includes custom logo files, typography guidelines, primary/secondary color schemes, and visual brand assets."
      },
      {
        question: "Can you design custom graphics for social media?",
        answer: "Yes, we create engaging templates and promotional graphics tailored to your brand style for platforms like LinkedIn and Instagram."
      },
      {
        question: "Do you provide editable source files for the designs?",
        answer: "Yes, we hand over fully organized, editable vector files and assets upon project completion."
      }
    ],
    ctaTitle: "Transform Your Visual Identity Today",
    ctaDesc: "Let's design premium graphics that represent your brand personality and stand out from the competition."
  }
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


