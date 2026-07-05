// Project data. Replace `image` paths with real screenshots in src/assets/images.
import TopperDaju from "../assets/images/Projects/TopperDaju.png";
import EarthquakeAlertSystem from "../assets/images/Projects/EAS.png";
import AIResumeAnalyzer from "../assets/images/Projects/ARA.png";
import PortfolioWebsite from "../assets/images/Projects/Portfolio.png";
export const projects = [
  {
    id: 1,
    title: "Topper Daju",
    description:
      "An educational platform designed to help +2 students prepare effectively with notes, MCQs, and learning resources.",
    image: TopperDaju,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/codesbysaksham",
    live: "https://topperdaju.com",
    featured: true,
  },
  {
    id: 2,
    title: "Earthquake Alert System",
    description:
      "IoT-based earthquake detection system using Arduino, GSM module, and sensors for real-time alerts.",
    image: EarthquakeAlertSystem,
    tech: ["Arduino", "C++", "IoT"],
    github: "https://github.com/codesbysaksham",
    live: "",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "AI-powered application that analyzes resumes and provides suggestions for improvement.",
    image: AIResumeAnalyzer,
    tech: ["React", "Python", "OpenAI"],
    github: "https://github.com/codesbysaksham",
    live: "",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built with React, Tailwind CSS, Framer Motion, and Three.js.",
    image: PortfolioWebsite,
    tech: ["React", "Three.js", "Tailwind"],
    github: "https://github.com/codesbysaksham",
    live: "",
  },
];
