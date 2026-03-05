import type { Resume } from "../types/resume";

export const DEFAULT_RESUME: Resume = {
  template: "modern",
  personalInfo: {
    name: "Alexandra Chen",
    email: "alex.chen@designcraft.io",
    phone: "+1 (415) 867-5309",
    location: "San Francisco, CA",
    website: "alexchen.design",
  },
  summary:
    "Senior product designer with 7+ years crafting intuitive digital experiences for fintech and consumer apps. Passionate about the intersection of data-driven design and human-centered thinking. Led design systems that reduced engineering time by 40% and shipped products used by 2M+ users.",
  workExperience: [
    {
      position: "Senior Product Designer",
      company: "Stripe",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Lead design for Stripe's merchant dashboard, serving 500K+ businesses globally. Owned end-to-end design of the new analytics suite, increasing engagement by 32%. Established design system tokens adopted across 6 product teams.",
    },
    {
      position: "Product Designer",
      company: "Figma",
      startDate: "Mar 2019",
      endDate: "Dec 2021",
      description:
        "Designed core collaboration features including real-time commenting and branching workflows. Partnered with engineering to ship FigJam from 0 to 1M users in 8 months. Ran weekly design critiques for a 12-person design org.",
    },
    {
      position: "UX Designer",
      company: "IDEO",
      startDate: "Jun 2017",
      endDate: "Feb 2019",
      description:
        "Conducted user research and created prototypes for Fortune 500 clients across healthcare and retail. Facilitated design sprints and delivered final designs to development teams.",
    },
  ],
  education: [
    {
      degree: "Master of Design, Interaction Design",
      school: "Carnegie Mellon University",
      startDate: "Aug 2015",
      endDate: "May 2017",
      description:
        "Focus on human-computer interaction and design systems. Thesis on adaptive interfaces for accessibility.",
    },
    {
      degree: "B.S. Computer Science & Visual Arts",
      school: "UCLA",
      startDate: "Sep 2011",
      endDate: "Jun 2015",
      description: "Graduated magna cum laude. Minor in cognitive science.",
    },
  ],
  skills: [
    "Figma",
    "Prototyping",
    "Design Systems",
    "User Research",
    "Accessibility",
    "TypeScript",
    "React",
    "Data Visualization",
  ],
  lastUpdated: BigInt(Date.now()),
};
