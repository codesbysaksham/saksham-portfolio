import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

/**
 * Skills section with category tabs and a responsive grid of animated skill cards.
 */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const currentSkills =
    skillCategories.find((category) => category.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks, and tools I use to bring ideas to life."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="active-skill-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentSkills.map((skill, index) => (
            <SkillCard
              key={`${activeCategory}-${skill.name}`}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
