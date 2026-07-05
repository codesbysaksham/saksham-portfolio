import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { educationTimeline } from '../data/education';
import { skillCategories } from '../data/skills';
import { PERSONAL_INFO } from '../utils/constants';
import SectionTitle from './SectionTitle';

const experience = educationTimeline.filter((item) => item.type === 'work');
const education = educationTimeline.filter((item) => item.type === 'education');

/**
 * A single resume column (Experience or Education) with a vertical connecting line.
 */
const ResumeColumn = ({ title, icon: Icon, items }) => (
  <div className="glass rounded-2xl p-6 md:p-8">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>

    <div className="relative flex flex-col gap-8 pl-6 border-l border-white/10">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-accent shadow-glow-accent" />
          <p className="text-xs text-accent font-medium mb-1">{item.duration}</p>
          <h4 className="text-base font-semibold text-white">{item.title}</h4>
          <p className="text-sm text-muted mb-2">{item.institution}</p>
          <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

/**
 * Resume section: side-by-side experience/education timeline, a skills summary,
 * and a prominent PDF download call to action.
 */
const Resume = () => {
  return (
    <section id="resume" className="relative">
      <div className="section-container">
        <SectionTitle
          eyebrow="Resume"
          title="My professional journey"
          description="A quick overview of my experience, education, and core skill set."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <ResumeColumn title="Experience" icon={Briefcase} items={experience} />
          <ResumeColumn title="Education" icon={GraduationCap} items={education} />
        </div>

        {/* Skills summary */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-semibold text-white mb-6">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skillCategories
              .flatMap((category) => category.skills)
              .map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-white/80"
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-accent hover:scale-105 transition-all duration-300"
          >
            <Download className="w-4 h-4" /> Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
