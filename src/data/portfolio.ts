export interface NavLink {
  label: string;
  href: string;
}

export interface Achievement {
  label: string;
  value: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status?: "in-progress" | "completed";
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface GrowthArea {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactMethod {
  type: "email" | "phone" | "linkedin" | "facebook";
  label: string;
  value: string;
  href: string;
}

export const personal = {
  name: "Nur Mohammad",
  title: "Sales Operations & SCM Specialist",
  subtitle: "Entrepreneur",
  tagline:
    "Ten years turning complex order-to-cash operations into measurable results, bringing the same operational discipline from managing supply chains to building his own venture and learning to code with AI.",
  email: "nur.mohammad.scm@gmail.com",
  phone: "+8801710789744",
  linkedin: "https://www.linkedin.com/in/nur-mohammad88",
  facebook: "https://www.facebook.com/profile.php?id=61593160953175",
  location: "Dhaka, Bangladesh",
};

export const contactMethods: ContactMethod[] = [
  {
    type: "email",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    type: "phone",
    label: "Phone / WhatsApp",
    value: "+880 1710-789744",
    href: "https://wa.me/8801710789744",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/nur-mohammad88",
    href: personal.linkedin,
  },
  {
    type: "facebook",
    label: "Facebook",
    value: "facebook.com/nur.international",
    href: personal.facebook,
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#certifications" },
  { label: "Ventures", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: Achievement[] = [
  { value: "10+", label: "Years in SCM & Sales Ops" },
  { value: "200+", label: "Dealers (80+ Active)" },
  { value: "90%", label: "OTIF Delivery" },
  { value: "৳2.8Cr", label: "Monthly Dispatch Volume" },
];

export const atAGlance: Achievement[] = [
  { value: "Sr. Executive", label: "Sales Ops & SCM, A-One Polymer Ltd. (Anwar Group)" },
  { value: "10-15", label: "Staff supervised (all types)" },
  { value: "200+ / 15", label: "Dealers managed (80+ active) / ASMs coordinated" },
  { value: "50+", label: "SKUs handled" },
];

export const aboutParagraphs: string[] = [
  "Nur Mohammad's career sits at the intersection of discipline and curiosity. Over a decade in sales operations and supply chain management, he's built a reputation for turning operational chaos into systems that run on time, every time. That means reconciling ledgers, coordinating dozens of dealers, and moving thousands of SKUs, day after day, without letting anything slip.",
  "Ten years of hands-on order-to-cash, inventory, and logistics experience now shapes how he approaches building digital tools, so the workflow and data logic in his projects come from real operational practice, not just theory.",
  "That same instinct for building shows up outside the corporate ladder too. As founder of Nur International, he's applying the same operational rigor he brings to A-One Polymer to a business of his own, handling sourcing, branding, and shipping under one roof, built from the ground up.",
  "He treats learning the way he treats a supply chain: never static. A background in Entomology and Zoology gave him an early habit of close observation and systems thinking, and he now points that same habit at Power BI dashboards, digital marketing, and most recently, AI-assisted web development. This site is the newest proof of that habit in action.",
];

export const experiences: ExperienceItem[] = [
  {
    role: "Sales Operations & SCM Specialist (Sr. Executive)",
    company: "A-One Polymer Ltd. (Anwar Group)",
    period: "March 2022 to Present",
    highlights: [
      "Own the Order-to-Cash bridge across Sales, Accounts, and Depot, supervising a team of 10-15 across 200+ dealers (80+ active), 15 ASMs, and 50+ SKUs",
      "Lead depot & inventory operations enforcing FIFO/FEFO compliance and route/freight optimization, cutting freight cost 15% while sustaining 90% OTIF delivery",
      "Automated ledger reconciliation and reporting with Power BI/Power Query, cutting reporting time 40% across a ~৳2.8 crore monthly dispatch volume",
    ],
  },
  {
    role: "Operations & Sourcing Lead",
    company: "Alo Enterprise",
    period: "June 2017 to March 2022",
    highlights: [
      "Led sourcing and vendor management across product categories, cutting procurement lead time by 20%",
      "Directed day-to-day operations, aligning supply with sales demand",
      "Streamlined procurement processes and vendor negotiations to shorten fulfillment cycles",
    ],
  },
  {
    role: "Sales & SCM Operations Specialist",
    company: "Computer World BD",
    period: "June 2014 to May 2017",
    highlights: [
      "Supported sales and SCM operations, building foundations in order processing and inventory coordination",
      "Coordinated between sales and stock teams to keep fulfillment on schedule",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "SCM & ERP Tools",
    skills: [
      "SAP SD",
      "Microsoft Dynamics 365",
      "Tally Prime",
      "Order-to-Cash (O2C)",
      "Depot & Inventory Management",
      "FIFO / FEFO Compliance",
      "Route & Freight Optimization",
      "Dealer & Distributor Management",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Power BI",
      "Power Query",
      "Advanced MS Excel",
      "XLOOKUP & Pivot Tables",
      "Reporting Automation",
      "Party Ledger Reconciliation",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "PGD in Supply Chain Management",
    issuer: "ISCEB",
    year: "In Progress",
    status: "in-progress",
  },
  {
    name: "SAP SD Professional Certification",
    issuer: "Alison",
    year: "2025",
  },
  {
    name: "Advanced Supply Chain Management",
    issuer: "Biddabari IT",
    year: "2025",
  },
  {
    name: "Power BI Masterclass",
    issuer: "Certification",
    year: "2026",
  },
];

export const education: EducationItem[] = [
  { degree: "M.Sc. in Entomology", institution: "Dhaka College (National University)" },
  { degree: "B.Sc. (Hon's) in Zoology", institution: "Dhaka College (National University)" },
];

export const entrepreneurship = {
  name: "Nur International",
  role: "Founder",
  status: "Currently Building",
  description:
    "An e-commerce venture built from the ground up (own domain, own brand), applying the same supply-chain and operations discipline from the corporate world to a business of his own.",
  workNote: "A side venture built and run alongside full-time corporate work",
  tags: ["E-Commerce", "Own Brand", "Founder-Led"],
  facebookUrl: "https://www.facebook.com/profile.php?id=61593160953175",
  websiteNote: "Dedicated website launching soon",
};

export const showcaseProject = {
  name: "cafe.nurintl.com",
  category: "Business Website Showcase",
  description:
    "A sample of the kind of business website I can build, restaurants, cafes, small businesses, and similar.",
  stack: ["Next.js", "Tailwind CSS"],
  liveUrl: "https://cafe.nurintl.com",
};

export const growthAreas: GrowthArea[] = [
  {
    title: "Digital Marketing",
    description:
      "Completed foundational training years ago and now actively re-engaging, applying it hands-on to grow Nur International and sharpen a modern, data-informed marketing lens.",
    tags: ["Re-engaging", "Applied Learning"],
  },
  {
    title: "AI-Powered Web Development",
    description:
      "Learning to build with AI coding tools, this very portfolio is proof, built hands-on with Claude Code as a first hands-on project in the craft.",
    tags: ["Learning By Building", "Claude Code"],
  },
];

export const leadership = {
  organization: "Dhaka College Debating Society",
  role: "Founder Member",
  description:
    "Helped found and build the society from the ground up, developing public speaking, structured argumentation, and team leadership skills that still shape how he leads and negotiates today.",
};
