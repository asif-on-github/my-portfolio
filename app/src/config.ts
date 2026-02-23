// ============================================================================
// SITE CONFIGURATION
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "ASIF",
  logoAccent: ".",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Let's Connect",
};

// ----------------------------------------------------------------------------
// Hero Section - CLEAN & MINIMAL
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "MD ASIF",
  titleLine2: "KHAN",
  subtitle: "",
  ctaText: "View My Work",
  ctaHref: "#portfolio",
  backgroundImage: "/images/hero-bg.jpg",
  gridRows: 4,
  gridCols: 6,
  pinkCells: [
    { row: 0, col: 1 },
    { row: 1, col: 4 },
    { row: 2, col: 2 },
    { row: 3, col: 5 },
  ],
};

// ----------------------------------------------------------------------------
// About Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "ABOUT ME",
  headingMain: "Innovation",
  headingAccent: " & Strategy",
  productName: "Md Asif Khan",
  description: "Passionate entrepreneur and marketing enthusiast pursuing BBA in Marketing at University of Dhaka. Driven by innovation, strategy, and meaningful collaboration.",
  price: "",
  features: [
    { value: "💡", label: "Innovation" },
    { value: "🤝", label: "Collaboration" },
    { value: "🎯", label: "Strategy" },
  ],
  colorSwatches: ["#ff73c3", "#c41e3a", "#4a90d9"],
  colorSwatchesLabel: "Core Values",
  ctaText: "View My Experience",
  productImage: "/images/hero-portrait.png",
  productImageAlt: "Md Asif Khan",
  decorativeText: "ABOUT",
};

// ----------------------------------------------------------------------------
// Skills Section
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "SKILLS",
  headingMain: "Technical &",
  headingAccent: " Professional",
  colors: [
    {
      name: "Figma",
      nameSecondary: "85%",
      color: "#ff73c3",
      description: "UI/UX Design",
    },
    {
      name: "WordPress",
      nameSecondary: "80%",
      color: "#4a90d9",
      description: "Web Development",
    },
    {
      name: "Generative AI",
      nameSecondary: "75%",
      color: "#9b59b6",
      description: "AI Tools",
    },
    {
      name: "Digital Marketing",
      nameSecondary: "85%",
      color: "#e74c3c",
      description: "Social Media",
    },
    {
      name: "Leadership",
      nameSecondary: "90%",
      color: "#f39c12",
      description: "Team Management",
    },
    {
      name: "Communication",
      nameSecondary: "92%",
      color: "#2ecc71",
      description: "Public Speaking",
    },
  ],
  bottomText: "Click to learn more",
  decorativeText: "SKILLS",
};

// ----------------------------------------------------------------------------
// Portfolio Intro Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "PORTFOLIO",
  headingMain: "Creative",
  headingAccent: " Works",
  tagline: "A diverse collection of design works spanning brand identity, presentations, sports graphics, and creative campaigns.",
  features: [
    "Brand Design",
    "Logo Creation",
    "Sports Graphics",
    "Presentations",
    "Creative Campaigns",
  ],
  ctaText: "View All Projects",
  ctaHref: "#portfolio",
  image: "/images/brand-portrait.jpg",
  imageAlt: "Md Asif Khan",
  decorativeText: "WORKS",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "ASIF",
  logoAccent: ".",
  brandDescription: "Founder & Marketing Student passionate about innovation and creativity.",
  socialLinks: [
    { platform: "instagram", href: "#", label: "Instagram" },
    { platform: "twitter", href: "#", label: "Twitter" },
    { platform: "youtube", href: "#", label: "YouTube" },
  ],
  linkSections: [
    {
      title: "Quick Links",
      links: ["About", "Experience", "Skills", "Portfolio"],
    },
    {
      title: "Services",
      links: ["Brand Design", "Logo Design", "Presentations"],
    },
  ],
  contact: {
    address: "Dhaka, Bangladesh",
    phone: "",
    email: "mdasifkha.pers@gmail.com",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText: "Md Asif Khan. All rights reserved.",
  decorativeText: "CONNECT",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Md Asif Khan - Portfolio",
  description: "",
  language: "en",
};

// ----------------------------------------------------------------------------
// Experience Section
// ----------------------------------------------------------------------------

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  contributions: string[];
}

export interface ExperienceConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  experiences: ExperienceItem[];
}

export const experienceConfig: ExperienceConfig = {
  sectionLabel: "EXPERIENCE",
  headingMain: "Leadership &",
  headingAccent: " Involvement",
  experiences: [
    {
      role: "Campus Ambassador",
      organization: "Requin BD",
      period: "2025 – Present",
      location: "Dhaka, Bangladesh",
      description: "Representing Requin BD on campus and building strategic partnerships.",
      contributions: ["Campus outreach", "Partnerships", "Community engagement"],
    },
    {
      role: "General Member",
      organization: "Project WE",
      period: "2025 – Present",
      location: "University of Dhaka",
      description: "Contributing to women empowerment initiatives.",
      contributions: ["Social impact", "Community development"],
    },
    {
      role: "General Member",
      organization: "DUEDC",
      period: "2024 – Present",
      location: "University of Dhaka",
      description: "Participating in entrepreneurship development programs.",
      contributions: ["Startup ecosystem", "Business workshops"],
    },
    {
      role: "General Member",
      organization: "DUMARC",
      period: "2024 – Present",
      location: "University of Dhaka",
      description: "Engaging in marketing research and brand strategy.",
      contributions: ["Marketing strategy", "Digital campaigns"],
    },
  ],
};

// ----------------------------------------------------------------------------
// Portfolio Section - ALL NEW WORKS ORGANIZED BY CATEGORY
// ----------------------------------------------------------------------------

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface PortfolioConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  categories: string[];
  items: PortfolioItem[];
}

export const portfolioConfig: PortfolioConfig = {
  sectionLabel: "PORTFOLIO",
  headingMain: "Featured",
  headingAccent: " Works",
  categories: [
    "All",
    "Brand Design",
    "Logo Design",
    "Presentation Design",
    "Sports Design",
    "Art & Concept",
    "Political Design",
    "Creative Design",
  ],
  items: [
    // BRAND DESIGN
    {
      title: "Jibon Mood Profiles Campaign",
      category: "Brand Design",
      image: "/images/portfolio/jibon-mood-profiles.png",
      description: "Creative mood-based marketing campaign featuring distinct personality types.",
      tags: ["Campaign", "Branding"],
    },
    {
      title: "Jibon Market Analysis",
      category: "Brand Design",
      image: "/images/portfolio/jibon-market-analysis.png",
      description: "Professional market analysis presentation for bottled water brand.",
      tags: ["Market Research", "Data"],
    },
    {
      title: "Jibon Brand Positioning",
      category: "Brand Design",
      image: "/images/portfolio/jibon-brand-positioning.png",
      description: "Comprehensive brand positioning strategy presentation.",
      tags: ["Strategy", "Branding"],
    },

    // LOGO DESIGN
    {
      title: "The Foreshadow Logo",
      category: "Logo Design",
      image: "/images/portfolio/the-foreshadow-logo.jpg",
      description: "Bold logo design with dramatic typography.",
      tags: ["Logo", "Branding"],
    },
    {
      title: "Marketing Chess Club Logo",
      category: "Logo Design",
      image: "/images/portfolio/mcc-logo.jpg",
      description: "Professional chess club logo with modern rook design.",
      tags: ["Club Logo", "Identity"],
    },
    {
      title: "MCC AI Logo Design",
      category: "Logo Design",
      image: "/images/portfolio/mcc-ai-logo.png",
      description: "AI-themed chess club logo with futuristic design.",
      tags: ["Logo", "AI Design"],
    },
    {
      title: "Finish The Juice Logo",
      category: "Logo Design",
      image: "/images/portfolio/finish-the-juice-logo.jpg",
      description: "Minimalist team logo with reaper character.",
      tags: ["Team Logo", "Minimalist"],
    },

    // PRESENTATION DESIGN
    {
      title: "Target Analysis - Rafia",
      category: "Presentation Design",
      image: "/images/portfolio/target-rafia.png",
      description: "Target audience analysis for student demographic.",
      tags: ["Research", "Analysis"],
    },
    {
      title: "Target Analysis - Alam",
      category: "Presentation Design",
      image: "/images/portfolio/target-alam.png",
      description: "Professional target group analysis.",
      tags: ["Research", "Demographics"],
    },
    {
      title: "Green Management",
      category: "Presentation Design",
      image: "/images/portfolio/green-management.jpg",
      description: "Educational presentation on sustainable business.",
      tags: ["Education", "Sustainability"],
    },
    {
      title: "Excel Biz Presentation",
      category: "Presentation Design",
      image: "/images/portfolio/excel-biz.jpg",
      description: "Business presentation with professional layout.",
      tags: ["Business", "Corporate"],
    },

    // SPORTS DESIGN
    {
      title: "Cricket Tournament Final",
      category: "Sports Design",
      image: "/images/portfolio/cricket-final.jpg",
      description: "Dynamic sports poster for tournament final.",
      tags: ["Sports", "Tournament"],
    },
    {
      title: "FBS-30 Tournament",
      category: "Sports Design",
      image: "/images/portfolio/fbs-tournament.jpg",
      description: "Professional cricket tournament poster design.",
      tags: ["Cricket", "Poster"],
    },
    {
      title: "Marketing Squad Banner",
      category: "Sports Design",
      image: "/images/portfolio/marketing-squad.jpg",
      description: "Team roster banner for cricket squad.",
      tags: ["Team Banner", "Sports"],
    },
    {
      title: "Marketing Cruise Banner",
      category: "Sports Design",
      image: "/images/portfolio/marketing-cruise.png",
      description: "Event banner for marketing cruise program.",
      tags: ["Event", "Banner"],
    },

    // ART & CONCEPT
    {
      title: "Artistic Eye Vision",
      category: "Art & Concept",
      image: "/images/portfolio/artistic-eye.jpg",
      description: "Conceptual artwork with philosophical typography.",
      tags: ["Conceptual", "Art"],
    },
    {
      title: "Creation of Adam Tribute",
      category: "Art & Concept",
      image: "/images/portfolio/creation-of-adam.jpg",
      description: "Creative reinterpretation of classic artwork.",
      tags: ["Art", "Creative"],
    },
    {
      title: "Frank Caprio Tribute",
      category: "Art & Concept",
      image: "/images/portfolio/frank-caprio-tribute.jpg",
      description: "Elegant memorial design honoring Judge Frank Caprio.",
      tags: ["Memorial", "Tribute"],
    },
    {
      title: "When Sharif",
      category: "Art & Concept",
      image: "/images/portfolio/when-sharif.png",
      description: "Creative typography design with Bengali text.",
      tags: ["Typography", "Creative"],
    },

    // POLITICAL DESIGN
    {
      title: "Ballot Number 11",
      category: "Political Design",
      image: "/images/portfolio/ballot-11.jpg",
      description: "Powerful campaign poster with symbolic imagery.",
      tags: ["Campaign", "Political"],
    },
    {
      title: "Student Council Campaign",
      category: "Political Design",
      image: "/images/portfolio/student-council.jpg",
      description: "Bengali election poster for student council.",
      tags: ["Student Politics", "Bengali"],
    },
    {
      title: "DU Student Movement",
      category: "Political Design",
      image: "/images/portfolio/du-students.jpg",
      description: "Awareness poster for student rights movement.",
      tags: ["Awareness", "Movement"],
    },

    // CREATIVE DESIGN
    {
      title: "3 Idiots Poster",
      category: "Creative Design",
      image: "/images/portfolio/3-idiots.jpg",
      description: "Fun poster inspired by the famous movie.",
      tags: ["Movie", "Friends"],
    },
    {
      title: "FBS Directory",
      category: "Creative Design",
      image: "/images/portfolio/fbs-directory.jpg",
      description: "Adventure-themed directory poster design.",
      tags: ["Adventure", "Directory"],
    },
    {
      title: "MD Asif Khan Poster",
      category: "Creative Design",
      image: "/images/portfolio/md-asif-khan-poster.png",
      description: "Personal branding poster with professional photography.",
      tags: ["Personal Brand", "Portrait"],
    },
    {
      title: "Ullash BBQ Event",
      category: "Creative Design",
      image: "/images/portfolio/ullash-bbq.png",
      description: "Event poster for BBQ gathering.",
      tags: ["Event", "Social"],
    },
    {
      title: "DA Shawl Design",
      category: "Creative Design",
      image: "/images/portfolio/da-shawl.png",
      description: "Fashion design for traditional shawl.",
      tags: ["Fashion", "Traditional"],
    },
    {
      title: "Cruise Poster",
      category: "Creative Design",
      image: "/images/portfolio/cruise-poster.jpg",
      description: "Promotional poster for cruise event.",
      tags: ["Event", "Promotional"],
    },
  ],
};

// ----------------------------------------------------------------------------
// Contact Section
// ----------------------------------------------------------------------------

export interface ContactConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  email: string;
  linkedin: string;
  location: string;
  availability: string;
}

export const contactConfig: ContactConfig = {
  sectionLabel: "CONTACT",
  headingMain: "Get In",
  headingAccent: " Touch",
  description: "Ready to collaborate? Let's create something amazing together!",
  email: "mdasifkha.pers@gmail.com",
  linkedin: "md-asif-khan-b92767279",
  location: "Dhaka, Bangladesh",
  availability: "Open for Opportunities",
};

// ----------------------------------------------------------------------------
// Languages Section
// ----------------------------------------------------------------------------

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
  flag: string;
}

export interface LanguagesConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  languages: LanguageItem[];
}

export const languagesConfig: LanguagesConfig = {
  sectionLabel: "LANGUAGES",
  headingMain: "Multilingual",
  headingAccent: "",
  languages: [
    { name: "Bengali", level: "Native", percentage: 100, flag: "🇧🇩" },
    { name: "English", level: "Professional", percentage: 85, flag: "🇺🇸" },
    { name: "Hindi", level: "Limited", percentage: 60, flag: "🇮🇳" },
    { name: "Urdu", level: "Elementary", percentage: 40, flag: "🇵🇰" },
  ],
};
