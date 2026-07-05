import React from 'react';
import { motion } from 'framer-motion';

/**
 * Consistent section heading with an eyebrow label, title, and optional description.
 */
const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 max-w-2xl mb-14 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-accent font-medium tracking-widest text-xs md:text-sm uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      {description && <p className="text-muted text-base md:text-lg">{description}</p>}
    </motion.div>
  );
};

export default SectionTitle;
