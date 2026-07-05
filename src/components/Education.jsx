import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { educationTimeline } from '../data/education';
import SectionTitle from './SectionTitle';

/**
 * Vertical, alternating timeline of education and work milestones.
 */
const Education = () => {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <SectionTitle
          eyebrow="Journey"
          title="Education & Milestones"
          description="The academic path and key milestones that shaped my career."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {educationTimeline.map((item, index) => {
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 pl-14 md:pl-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline icon marker */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow z-10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  <div
                    className={`glass rounded-2xl p-6 w-full md:w-1/2 ${
                      isEven ? 'md:ml-10' : 'md:mr-10'
                    }`}
                  >
                    <p className="text-xs text-accent font-medium mb-1">{item.duration}</p>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-muted mb-2">{item.institution}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
