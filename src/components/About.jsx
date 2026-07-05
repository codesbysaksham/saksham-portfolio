import profileImage from "../assets/images/profile.jpeg";
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';
import SectionTitle from './SectionTitle';

/**
 * Animated counter that counts up from 0 to `end` once it enters the viewport.
 */
const Counter = ({ end, suffix = '', duration = 1.6 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
};

const infoItems = [
  { icon: Calendar, label: 'Experience', value: `${PERSONAL_INFO.yearsOfExperience}+ Years` },
  { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location },
  { icon: Mail, label: 'Email', value: PERSONAL_INFO.email },
  { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone },
];

const stats = [
  { end: PERSONAL_INFO.yearsOfExperience, suffix: '+', label: 'Years Experience' },
  { end: PERSONAL_INFO.projectsCompleted, suffix: '+', label: 'Projects Completed' },
  { end: PERSONAL_INFO.happyClients, suffix: '+', label: 'Happy Clients' },
  { end: PERSONAL_INFO.cupsOfCoffee, suffix: '+', label: 'Cups of Coffee' },
];

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionTitle eyebrow="About Me" title="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-3xl glass overflow-hidden animate-float">
                <img
                    src={profileImage}
                    alt={`${PERSONAL_INFO.name} profile photo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio and info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              I&apos;m {PERSONAL_INFO.name}, a {PERSONAL_INFO.profession}
            </h3>
            <p className="text-muted leading-relaxed">{PERSONAL_INFO.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 glass rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm text-white font-medium truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="w-fit inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-accent hover:scale-105 transition-all duration-300 mt-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>
        </div>

        {/* Animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center flex flex-col items-center gap-2"
            >
              <Counter end={stat.end} suffix={stat.suffix} />
              <p className="text-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
