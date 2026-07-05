import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

/**
 * Card displaying a single project with a hover-zoom image,
 * description, tech stack chips, and GitHub / live demo links.
 */
const ProjectCard = ({ project, delay = 0 }) => {
  const { title, description, image, tech, github, demo, category } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col hover:shadow-glow transition-shadow duration-300"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <span className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs text-accent font-medium">
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>

        
      </div>
    </motion.div>
  );
};

export default ProjectCard;
