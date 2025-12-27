const ASSETS = {
  AIR_INDIA: "/images/air-india.png",
  INDIGO: "/images/indigo.png",
  AKASA: "/images/akasa.png",
  HAL: "/images/hal.png",
  LOGO: "/images/logo.png",
  COG: "/images/cog.png",
  SETTING: "/images/settings.png",
  MONITOR: "/images/monitor.png",
  CHARTS: "/images/charts.png",
  BSFLOGO: "/images/BSFLogo.png",
  PARTS: "/images/parts.jpg",
  TYRES: "/images/tyres.jpg",
  OIL: "/images/oil.jpg",
  GREASE: "/images/grease.jpg",
  FLUID: "/images/fluid.jpg",
  SEALANT: "/images/sealent.jpg",
  CLEANER: "/images/cleaner.jpg",
  TAPE: "/images/tape.jpg",
  TOOLS: "/images/tools.jpg",
  SUPPORT: "/images/support.jpg",
  PPARTS: "/images/Pparts.jpg",
  HERO: "/images/hero.jpg",
};

import {
  Bot,
  Settings2,
  CodeXml,
  CreditCardIcon,
  LucideIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  SquarePowerIcon,
  PlaneTakeoff,
} from "lucide-react";

//Navigation bar Desktop Menu Items
const NavServices: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Sourcing & Procurement",
    href: "/services",
    description:
      "We deliver end-to-end sourcing and procurement of critical aircraft components with speed, reliability, and compliance.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "OEM Parts Supply",
    href: "/services#oem",
    description:
      "We provide genuine OEM-certified aircraft spares ensuring safety, compliance, reliability, and superior aviation performance",
    icon: SquarePowerIcon,
  },
  {
    title: "Engineering Support",
    href: "/services#engineering-support",
    description:
      "Expert engineering support for part identification, compatibility checks, and technical documentation in aviation sourcing.",
    icon: CreditCardIcon,
  },
  {
    title: "Logistics & Asset Management",
    href: "/services#logistics-asset-management",
    description:
      "Seamless logistics and asset management ensuring efficient inventory, reduced downtime, and reliable aircraft part availability.",
    icon: SquareCheckIcon,
  },
  {
    title: "Charter Flight Services",
    href: "https://chartered.sgtbsourcing.com",
    description:
      "Dedicated charter flight solutions for Char Dham helicopter and air ambulance operations.",
    icon: PlaneTakeoff,
  },
];

const industries: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Defence",
    href: "/industries#defence",
    description:
      "Trusted sourcing partner delivering certified spares and equipment to defense organizations, ensuring readiness and reliability.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Aviation",
    href: "/industries#aviation",
    description:
      "Comprehensive aviation solutions delivering genuine OEM spares, efficient logistics, and engineering support for airlines.",
    icon: SquarePowerIcon,
  },
  {
    title: "Institutional Clients",
    href: "/industries#institutional-clients",
    description:
      "Providing specialized aviation and technical spares to institutions, training academies, and large organizations reliably.",
    icon: CreditCardIcon,
  },
];

const about: {
  title: string;
  href: string;
  target?: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Company Profile",
    href: "/SGTBS.pdf",
    description:
      "SGTBS Sourcing delivers reliable OEM aircraft spares, defense solutions, and logistics with quality, speed, and compliance.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Leadership",
    href: "/about#leadership",
    description:
      "Experienced leadership team driving procurement excellence, strategic sourcing, and customer-focused solutions in aviation and defense.",
    icon: SquarePowerIcon,
  },
  {
    title: "Certifications",
    href: "/iso.pdf",
    target: "_blank",
    description:
      "Compliant with international aviation standards, maintaining rigorous vendor evaluations to ensure quality, safety, and reliability.",
    icon: CreditCardIcon,
  },
  {
    title: "Presence",
    href: "/about#presence",
    description:
      "Strategically present across India, serving private airlines, defense organizations, and institutional clients with trusted solutions.",
    icon: SquareCheckIcon,
  },
];

const quality: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Standards Met",
    href: "/quality",
    description:
      "We adhere to international aviation standards, ensuring all sourced parts meet quality, safety, and compliance requirements.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Safety Protocols",
    href: "/quality#safety",
    description:
      "Strict safety protocols ensure secure handling, compliance, and reliability of all sourced aircraft components.",
    icon: SquarePowerIcon,
  },
];

const media: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "News",
    href: "/media#news",
    description:
      "Stay updated with the latest company achievements, industry developments, and aviation sourcing innovations from SGTBS.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Case Studies",
    href: "/media#case-studies",
    description:
      "Showcasing successful sourcing, procurement, and logistics projects, highlighting our expertise and value to clients.",
    icon: SquarePowerIcon,
  },
  {
    title: "Brochures",
    href: "/SGTBS.pdf",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Testimonials",
    href: "/media#testimonials",
    description:
      "Client testimonials reflecting trust, satisfaction, and the quality of our sourcing, logistics, and OEM solutions.",
    icon: SquareCheckIcon,
  },
];

// Navigation Const Mobile Menu

const Mservices: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Sourcing & Procurement",
    href: "/services#sourcing-procurement",
    description:
      "We deliver end-to-end sourcing and procurement of critical aircraft components with speed, reliability, and compliance.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "OEM Parts Supply",
    href: "/services#oem-parts-supply",
    description:
      "We provide genuine OEM-certified aircraft spares ensuring safety, compliance, reliability, and superior aviation performance",
    icon: SquarePowerIcon,
  },
  {
    title: "Engineering Support",
    href: "/services#engineering-support",
    description:
      "Expert engineering support for part identification, compatibility checks, and technical documentation in aviation sourcing.",
    icon: CreditCardIcon,
  },
  {
    title: "Logistics & Asset Management",
    href: "/services#logistics-asset-management",
    description:
      "Seamless logistics and asset management ensuring efficient inventory, reduced downtime, and reliable aircraft part availability.",
    icon: SquareCheckIcon,
  },
  {
    title: "Charter Flight Services",
    href: "https://chartered.sgtbsourcing.com",
    description:
      "Dedicated charter flight solutions for Char Dham helicopter and air ambulance operations.",
    icon: PlaneTakeoff,
  },
];

const Mindustries: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Defence",
    href: "/industries#defence",
    description:
      "Trusted sourcing partner delivering certified spares and equipment to defense organizations, ensuring readiness and reliability.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Aviation",
    href: "/industries#aviation",
    description:
      "Comprehensive aviation solutions delivering genuine OEM spares, efficient logistics, and engineering support for airlines.",
    icon: SquarePowerIcon,
  },
  {
    title: "Institutional Clients",
    href: "/industries#institutional-clients",
    description:
      "Providing specialized aviation and technical spares to institutions, training academies, and large organizations reliably.",
    icon: CreditCardIcon,
  },
];

const Mabout: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Company Profile",
    href: "/SGTBS.pdf",
    description:
      "SGTBS Sourcing delivers reliable OEM aircraft spares, defense solutions, and logistics with quality, speed, and compliance.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Leadership",
    href: "/about#leadership",
    description:
      "Experienced leadership team driving procurement excellence, strategic sourcing, and customer-focused solutions in aviation and defense.",
    icon: SquarePowerIcon,
  },
  {
    title: "Certifications",
    href: "/iso.pdf",
    description:
      "Compliant with international aviation standards, maintaining rigorous vendor evaluations to ensure quality, safety, and reliability.",
    icon: CreditCardIcon,
  },
  {
    title: "Presence",
    href: "/about#presence",
    description:
      "Strategically present across India, serving private airlines, defense organizations, and institutional clients with trusted solutions.",
    icon: SquareCheckIcon,
  },
];

const Mquality: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Standards Met",
    href: "/quality#standards-met",
    description:
      "We adhere to international aviation standards, ensuring all sourced parts meet quality, safety, and compliance requirements.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Safety Protocols",
    href: "/quality#safety-protocols",
    description:
      "Strict safety protocols ensure secure handling, compliance, and reliability of all sourced aircraft components.",
    icon: SquarePowerIcon,
  },
];

const Mmedia: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "News",
    href: "/media#news",
    description:
      "Stay updated with the latest company achievements, industry developments, and aviation sourcing innovations from SGTBS.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Case Studies",
    href: "/media#case-studies",
    description:
      "Showcasing successful sourcing, procurement, and logistics projects, highlighting our expertise and value to clients.",
    icon: SquarePowerIcon,
  },
  {
    title: "Brochures",
    href: "/SGTBS.pdf",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Testimonials",
    href: "/media#testimonials",
    description:
      "Client testimonials reflecting trust, satisfaction, and the quality of our sourcing, logistics, and OEM solutions.",
    icon: SquareCheckIcon,
  },
];

// Our Services
const Services = [
  {
    icon: CodeXml,
    title: "Sourcing & Procurement",
    description:
      "We deliver end-to-end sourcing and procurement of critical aircraft components with speed, reliability, and compliance.",
  },
  {
    icon: Settings2,
    title: "OEM Parts Supply",
    description:
      "We provide genuine OEM-certified aircraft spares ensuring safety, compliance, reliability, and superior aviation performance",
  },
  {
    icon: Bot,
    title: "Engineering Support",
    description:
      "Expert engineering support for part identification, compatibility checks, and technical documentation in aviation sourcing.",
  },
];

const ServiceData = [
  {
    id: "#sourcing-procurement",
    category: "",
    title: "Sourcing & Procurement",
    details:
      "End-to-end sourcing of critical aircraft components from globally trusted suppliers. We identify, procure, and deliver the right parts with speed and reliability.",
    tutorialLink: "#",
    image: "/parts.jpg",
  },
  {
    id: "services#oem",
    category: "",
    title: "OEM Parts Supply",
    details:
      "Direct supply of genuine OEM-certified aircraft spares ensuring safety, compliance, and performance in aviation operations.",
    tutorialLink: "#",
    image: "/pparts.jpg",
  },
  {
    id: "#engineering-support",
    category: "",
    title: "Engineering Support",
    details:
      "Technical expertise and advisory for part identification, compatibility, and engineering documentation support.",
    tutorialLink: "#",
    image: "/support.jpg",
  },
  {
    category: "",
    title: "Logistics & Asset Management",
    details:
      "Efficient logistics management, inventory solutions, and asset tracking to ensure seamless part availability and reduced downtime.",
    tutorialLink: "#",
    id: "#logistics-asset-management",
    image: "/hero.jpg",
  },
];

const IndustriesData = [
  {
    id: "#defence",
    category: "",
    title: "Defence",
    details:
      "Trusted partner in supplying spares and equipment to defense establishments, supporting operational readiness.",
    tutorialLink: "#",
    image: "/defence.jpg",
  },
  {
    id: "#aviation",
    category: "",
    title: "Aviation",
    details:
      "Comprehensive solutions for airlines including OEM spares, logistics, and engineering support.",
    tutorialLink: "#",
    image: "/aviation.jpg",
  },
  {
    id: "#institutional-clients",
    category: "",
    title: "Institutional Clients",
    details:
      "Specialized aviation and technical spares for institutions, training academies, and large organizations.",
    tutorialLink: "#",
    image: "/ins.jpg",
  },
];
const QualityData = [
  {
    id: "#standards-met",
    category: "",
    title: "Standards Met",
    details:
      "We adhere to international aviation standards, ensuring all sourced parts meet quality, safety, and compliance requirements.",
    tutorialLink: "#",
    image: "/standard.jpg",
  },
  {
    id: "#safety-protocols",
    category: "",
    title: "Safety Protocols",
    details:
      "Strict safety protocols ensure secure handling, compliance, and reliability of all sourced aircraft components.",
    tutorialLink: "#",
    image: "/safety.jpg",
  },
];
const MediaData = [
  {
    id: "#news",
    category: "",
    title: "News",
    details:
      "Stay updated with the latest company achievements, industry developments, and aviation sourcing innovations from SGTBS.",
    tutorialLink: "#",
    image: "/news.jpg",
  },
  {
    id: "#case-studies",
    category: "",
    title: "Case Studies",
    details:
      "Showcasing successful sourcing, procurement, and logistics projects, highlighting our expertise and value to clients.",
    tutorialLink: "#",
    image: "/case.jpg",
  },
];
const AboutData = [
  {
    id: "#leadership",
    category: "",
    title: "Leadership",
    details:
      "Experienced leadership team driving procurement excellence, strategic sourcing, and customer-focused solutions in aviation and defense.",
    tutorialLink: "#",
    image: "/leader.jpg",
  },
  {
    id: "#presence",
    category: "",
    title: "Presence",
    details:
      "Strategically present across India, serving private airlines, defense organizations, and institutional clients with trusted solutions.",
    tutorialLink: "#",
    image: "/presence.jpg",
  },
];

export {
  ASSETS,
  Services,
  NavServices,
  industries,
  about,
  quality,
  media,
  Mservices,
  Mindustries,
  Mabout,
  Mquality,
  Mmedia,
  CreditCardIcon,
  ServiceData,
  IndustriesData,
  QualityData,
  MediaData,
  AboutData,
};

export type { LucideIcon };
