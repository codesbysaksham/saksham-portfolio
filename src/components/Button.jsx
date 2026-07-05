import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable animated button component.
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {'button'|'a'} as - render as a native button or anchor
 */
const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  target,
  rel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 focus-visible:outline-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-accent hover:scale-105',
    outline:
      'border border-primary/50 text-white hover:bg-primary/10 hover:border-primary backdrop-blur-sm',
    ghost: 'text-muted hover:text-white',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionComponent = as === 'a' ? motion.a : motion.button;

  return (
    <MotionComponent
      whileTap={{ scale: 0.96 }}
      className={combinedClass}
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      type={as === 'button' ? type : undefined}
      target={target}
      rel={rel}
    >
      {content}
    </MotionComponent>
  );
};

export default Button;
