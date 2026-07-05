import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

/**
 * Renders a row of animated social media icon links.
 * @param {'sm'|'md'|'lg'} size
 */
const SocialIcons = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-9 h-9 text-base',
    md: 'w-11 h-11 text-lg',
    lg: 'w-14 h-14 text-2xl',
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map(({ id, name, url, icon: Icon }, index) => (
        <motion.a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.1 }}
          className={`${sizeMap[size]} flex items-center justify-center rounded-full glass text-white hover:text-accent hover:shadow-glow-accent transition-colors duration-300`}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
