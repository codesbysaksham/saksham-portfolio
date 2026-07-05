// Skills grouped by category. `level` is used to animate progress bars (0-100).
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiFramer,
} from 'react-icons/si';

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 85, icon: FaReact },
      { name: 'JavaScript (ES6+)', level: 72, icon: FaJsSquare },
      { name: 'HTML5', level: 90, icon: FaHtml5 },
      { name: 'CSS3', level: 80, icon: FaCss3Alt },
      { name: 'Tailwind CSS', level: 80, icon: SiTailwindcss },
      { name: 'Next.js', level: 73, icon: SiNextdotjs },
      { name: 'Framer Motion', level: 63, icon: SiFramer },
      { name: 'Redux', level: 62, icon: SiRedux },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 88, icon: FaNodeJs },
      { name: 'Express.js', level: 85, icon: SiExpress },
      { name: 'MongoDB', level: 82, icon: SiMongodb },
      { name: 'PostgreSQL', level: 75, icon: SiPostgresql },
      { name: 'TypeScript', level: 77, icon: SiTypescript },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 76, icon: FaGitAlt },
      { name: 'Figma', level: 60, icon: FaFigma },
      { name: 'Docker', level: 84, icon: FaDocker },
    ],
  },
];
