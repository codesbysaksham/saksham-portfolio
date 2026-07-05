import React from 'react';
import { motion } from 'framer-motion';

/**
 * Displays a single skill with an icon and an animated progress bar
 * that fills up to `level` percent once it scrolls into view.
 */
const SkillCard = ({ name, level, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 flex flex-col gap-4 hover:shadow-glow transition-shadow duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          {Icon && <Icon className="w-5 h-5 text-accent" />}
        </div>
        <div className="flex-1 flex items-center justify-between">
          <span className="text-sm md:text-base font-medium text-white">{name}</span>
          <span className="text-xs text-muted">{level}%</span>
        </div>
      </div>

      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
