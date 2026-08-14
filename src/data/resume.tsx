import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Aws } from "@/components/ui/svgs/aws";
import { Gcp } from "@/components/ui/svgs/gcp";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { Vuejs } from "@/components/ui/svgs/vuejs";
import { Prisma } from "@/components/ui/svgs/prisma";
import { ReactNative } from "@/components/ui/svgs/reactNative";
import { Flutter } from "@/components/ui/svgs/flutter";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { SiClickup, SiNotion } from "react-icons/si";
import type { ReactNode } from "react";

type HackathonLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  win?: string;
  links: HackathonLink[];
};


export const DATA = {
  name: "Miguel Fosso",
  initials: "MF",
  url: "https://myportfolio-tan-zeta.vercel.app",
  location: "Cameroon",
  locationLink: "https://www.google.com/maps/place/Cameroon",
  description:
    "Co-Founder @Onixe & Tech Lead | Creator of Clairre & 3AXIS",
  summary:
    "I build software that ships and scales. Over the past **4+ years**, I've led development on a fintech platform used by **15,000+ people** across Africa, co-founded [Onixe](https://onixe.app), and delivered **20+ production apps** spanning web, mobile, and AI. My stack is deep: **Flutter**, **React / Next.js**, **Node.js / NestJS**, **.NET**, and I've integrated more payment gateways than most developers have heard of. I also built [3Axis](https://www.npmjs.com/package/3axis), my own npm package for 3D animations on the web. If you need someone who writes clean code, makes sharp architectural decisions, and actually delivers, **let's talk**.",
  avatarUrl: "/miguel-avatar.jpg",
  skills: [
    // Frontend
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vue.js", icon: Vuejs },
    { name: "TypeScript", icon: Typescript },
    // Mobile
    { name: "Flutter", icon: Flutter },
    { name: "React Native", icon: ReactNative },
    // Backend
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: Nestjs },
    { name: "C# / .NET", icon: Csharp },
    // Cloud & Infra
    { name: "AWS", icon: Aws },
    { name: "GCP", icon: Gcp },
    { name: "Docker", icon: Docker },
    // DB & ORM
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma", icon: Prisma },
    // Tools
    { name: "ClickUp", icon: SiClickup },
    { name: "Notion", icon: SiNotion },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "miguelfoosso237@gmail.com",
    tel: "+237000000000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/miguelFosso",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/miguel-fosso",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/miguelFosso",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:miguelfoosso237@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // Current positions
    {
      company: "Onixe",
      href: "https://onixe.app",
      badges: ["Co-Founder"],
      location: "Remote",
      title: "Co-Founder & Tech Lead",
      logoUrl: "",
      start: "June 2026",
      end: "Present",
      description:
        "Co-founded Onixe and lead the full technical vision. Architecting the product stack from the ground up, including Clairre, an AI-powered assistant, and overseeing all engineering decisions across the company's growing suite of tools.",
    },
    {
      company: "Mayo App",
      href: "https://mayooapp.com",
      badges: ["Current"],
      location: "Remote · Cameroon",
      title: "Lead Developer",
      logoUrl: "/mayo-logo.png",
      start: "June 2026",
      end: "Present",
      description:
        "Lead development of the Mayo financial ecosystem, a fintech platform empowering 15,000+ users to earn, save, and manage money across all mobile money operators in Africa. Architecting Flutter mobile apps, Node.js/NestJS backend services, and real-time payment integrations including FlexiPay and mobile money APIs, while delivering the Mayo Store and Mission Million sub-products.",
    },
    {
      company: "Klavis AI",
      href: "https://klavis.app",
      badges: ["Current", "Freelance"],
      location: "Remote",
      title: "Full-Stack Engineer",
      logoUrl: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fklavis-ai.png&w=256&q=75",
      start: "January 2026",
      end: "Present",
      description:
        "Building AI-powered case and legal analysis solutions at Klavis, developing robust backend services, AI pipeline integrations, and high-performance web interfaces.",
    },
    {
      company: "eScrutin",
      href: "#",
      badges: ["Current"],
      location: "Remote",
      title: "Lead Developer",
      logoUrl: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fescrutin.png&w=256&q=75",
      start: "August 2025",
      end: "Present",
      description:
        "Leading development of the eScrutin platform, a secure online voting solution that enables event organizers to create, monetize, and manage contests and elections at scale.",
    },
    {
      company: "Freelance",
      href: "https://myportfolio-tan-zeta.vercel.app",
      badges: ["Available"],
      location: "Remote",
      title: "Full-Stack & Mobile Engineer",
      logoUrl: "/miguel-avatar.jpg",
      start: "2020",
      end: "Present",
      description:
        "Designing and building web, mobile, and backend applications for clients across Africa and internationally. 20+ production projects delivered covering SaaS platforms, event management, health tech, e-commerce, and AI-powered tools.",
    },
    // Past positions
    {
      company: "SoSan Health",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fsosan.png&w=256&q=75",
      start: "January 2025",
      end: "August 2025",
      description:
        "Full-stack development and optimization of the SoSan Health connected health application, handling medical appointments, patient records, medication reminders, and teleconsultations with healthcare professionals.",
    },
    {
      company: "Niovar Jobs",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Mobile & Full-Stack Developer",
      logoUrl: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fniovar.jpg&w=256&q=75",
      start: "2021",
      end: "December 2024",
      description:
        "My foundational software engineering role where I developed the Niovar Jobs mobile and web platform, implementing intelligent matching algorithms, push notifications, and high-performance job application flows.",
    },
    {
      company: "KBSL Consulting",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Digital Strategy & Development Partner",
      logoUrl: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fkbsl.png&w=256&q=75",
      start: "2022",
      end: "2023",
      description:
        "Built the full web platform for KBSL Consulting, enabling clients to discover coaching and consulting services, explore the company's four-step innovation methodology, and book free strategy sessions. Improved internal operational efficiency by 40%.",
    },
  ],

  education: [
    {
      school: "Engineering Degree in Computer Science",
      href: "#",
      degree: "Major in Software Engineering",
      logoUrl: "",
      start: "2021",
      end: "2024",
    },
    {
      school: "High School Baccalaureate",
      href: "#",
      degree: "Mathematics & Physical Sciences",
      logoUrl: "",
      start: "2020",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "CAN Miss & Mister",
      href: "https://canmissmister.com/",
      dates: "2024",
      active: true,
      description:
        "Official digital voting and contest platform for CAN Miss & Mister, celebrating African elegance, cultural heritage, and youth talent. Built with real-time candidate leaderboards, automated voting verification, and seamless mobile money payment integrations across Africa.",
      technologies: ["React", "Next.js", "Node.js", "Mobile Money", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://canmissmister.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://img.youtube.com/vi/DJ_xSey6XEQ/maxresdefault.jpg",
      video: "https://youtu.be/DJ_xSey6XEQ",
    },
    {
      title: "NexusFlow",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Transform your workflow with next-generation collaboration. Optimize your team's productivity with powerful tools designed for modern businesses.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fnexusflow.png&w=3840&q=75",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "3AXIS",
      href: "https://www.npmjs.com/package/3axis",
      dates: "2024",
      active: true,
      description:
        "Create stunning 3D animations for the web in just a few lines of code. A lightweight and intuitive layer on top of Three.js that makes 3D accessible to every developer.",
      technologies: ["Three.js", "JavaScript", "npm", "WebGL"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/3axis",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2F3axis.png&w=3840&q=75",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "KLAVIS AI",
      href: "https://klavis.app",
      dates: "2024",
      active: true,
      description:
        "Intelligent AI-powered case analysis platform. Get instant insights and manage your files with efficiency through artificial intelligence.",
      technologies: ["Next.js", "TypeScript", "AI/ML", "Node.js"],
      links: [
        {
          type: "Website",
          href: "https://klavis.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fklavis-ai.png&w=3840&q=75",
      video: "",
    },
    {
      title: "eScrutin",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Online voting platform that turns your events into a success. Create, monetize, and manage your contests with ease. A complete solution for organizing secure votes.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fescrutin.png&w=3840&q=75",
      video: "",
    },
    {
      title: "House of Challenge",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Reality web-magazine for African youth aspiring to achieve their dreams. Follow 11 young talents from different countries taking on various challenges under one roof to make their mark on the international scene.",
      technologies: ["React", "Next.js", "Node.js", "Firebase"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fhoc.png&w=3840&q=75",
      video: "",
    },
    {
      title: "La Villa des Immatures",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A captivating event that brings a diverse group of participants together in a unique and playful setting. An immersive experience to support your favourite candidates.",
      technologies: ["React", "Node.js", "Real-time voting"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Flvi.png&w=3840&q=75",
      video: "",
    },
    {
      title: "Mannequin Top Model Senior",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Voting platform for the Mannequin Top Model Senior competition. Propel the next great fashion face by supporting your favourite candidate.",
      technologies: ["React", "Node.js", "Real-time voting"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fmtm-senior.png&w=3840&q=75",
      video: "",
    },
    {
      title: "Cerveau d'Afrique",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A unique sensory immersion where African culture meets modern boldness. Art, music, and exclusive vibes for an unforgettable experience.",
      technologies: ["React", "Node.js", "Firebase"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fcerveau-afrique.png&w=3840&q=75",
      video: "",
    },
    {
      title: "MPlayer",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Modern music player with playlists, advanced controls, and immersive visuals. Elegant interface, smooth experience, favourites, and sharing.",
      technologies: ["React", "TypeScript", "Web Audio API"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fmplayer.png&w=3840&q=75",
      video: "",
    },
    {
      title: "KBSL Consulting",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Web application to discover KBSL Consulting services in coaching, strategic consulting, and HR. Explore a four-step methodology for organisational innovation, read client testimonials, and book a free strategy session.",
      technologies: ["React", "Next.js", "Node.js"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fkbsl.png&w=3840&q=75",
      video: "",
    },
    {
      title: "Ongoo",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Modern event ticketing platform. Online ticket purchasing, event management, QR code system, and analytics for event organizers.",
      technologies: ["React", "Node.js", "Stripe", "QR Code"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fongoo.png&w=3840&q=75",
      video: "",
    },
    {
      title: "Randel Business",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Modern showcase website presenting Randel company's products and services. Responsive design, smooth animations, and optimised interface to convert visitors into customers.",
      technologies: ["React", "Next.js", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Frandel.png&w=3840&q=75",
      video: "",
    },
    {
      title: "Italia Travel Consulting",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Elegant website for a travel agency specialising in Italian destinations. Tour presentation, booking form, and immersive photo gallery to inspire travellers.",
      technologies: ["React", "Next.js", "Node.js"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fitalia.png&w=3840&q=75",
      video: "",
    },
    {
      title: "SoSan Health",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Connected health mobile application enabling medical appointment booking, medical record consultation, medication reminders, and teleconsultation with professionals.",
      technologies: ["Flutter", "Firebase", "Node.js"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fsosan.png&w=3840&q=75",
      video: "",
    },
    {
      title: "Meme Generator",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Interactive web app to create and share memes. Template library, integrated text editor, and instant sharing on social networks.",
      technologies: ["React", "Canvas API", "Node.js"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fmeme.png&w=3840&q=75",
      video: "",
    },
    {
      title: "PharmZone",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Mobile application for ordering and delivering medication to your door. Intuitive interface to search for pharmaceutical products and place orders securely.",
      technologies: ["Flutter", "Firebase", "Node.js"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fpharmzone.jpeg&w=3840&q=75",
      video: "",
    },
    {
      title: "Nutrika Web",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Complete web platform for poultry farm management. Stock tracking, employee management, production monitoring, and analytical dashboard to optimise operations.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fnutrika-web.jpeg&w=3840&q=75",
      video: "",
    },
    {
      title: "Nutrika Mobile",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Companion mobile app for Nutrika Web. Real-time statistics, daily task management, and notifications for mobile farm management.",
      technologies: ["Flutter", "Firebase", "REST API"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fnutrika-mobile.jpeg&w=3840&q=75",
      video: "",
    },
    {
      title: "Scolaris",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Complete school management solution: payment management, grade tracking, course scheduling, parent-teacher communication, and automated report card generation.",
      technologies: [".NET", "C#", "React", "SQL Server"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fscolaris.jpg&w=3840&q=75",
      video: "",
    },
    {
      title: "Niobar Jobs",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Intuitive mobile job search application. Intelligent matching system between candidates and offers, real-time notifications, and simplified application interface.",
      technologies: ["Flutter", "Node.js", "Firebase"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fniovar.jpg&w=3840&q=75",
      video: "",
    },
  ],

  testimonials: [
    {
      quote:
        "Miguel was an exceptional partner for KBSL Consulting. His expertise in digital strategy transformed our internal processes, increasing our efficiency by 40% and improving client satisfaction. I highly recommend him for any ambitious project!",
      name: "Jennifer Kabesele",
      title: "CEO, KBSL Consulting",
    },
    {
      quote:
        "Working with Miguel on the Niovar Jobs application was an excellent experience. He was able to turn our vision into a functional and modern platform. His professionalism and responsiveness greatly contributed to the project's success.",
      name: "Mr Aubin",
      title: "CTO, Niovar Jobs",
    },
    {
      quote:
        "Miguel is a talented and rigorous developer. His ability to quickly grasp technical challenges and propose tailored solutions makes him a partner of choice for any ambitious digital project.",
      name: "Mr Franck Imam",
      title: "General Director, eScrutin",
    },
    {
      quote:
        "Miguel supported us in optimising and improving our mobile application. His technical expertise and understanding of our needs in the digital health space were decisive. The app is intuitive, high-performing, and perfectly meets our users' expectations.",
      name: "Mr Chickson Stephane",
      title: "Project Lead, SoSan Health",
    },
  ],

  hackathons: [] as Hackathon[],
} as const;
