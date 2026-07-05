import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Home } from 'lucide-react';

/**
 * 404 fallback page shown for any route that doesn't match a known page.
 */
const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="bg-orb w-72 h-72 bg-primary top-10 left-10 animate-float-slow" />
      <div className="bg-orb w-96 h-96 bg-secondary bottom-0 right-0 animate-float" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-8xl md:text-9xl font-bold gradient-text relative z-10"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-lg md:text-xl text-muted mt-4 mb-8 relative z-10"
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10"
      >
        <RouterLink
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-accent hover:scale-105 transition-all duration-300"
        >
          <Home className="w-4 h-4" /> Back to Home
        </RouterLink>
      </motion.div>
    </div>
  );
};

export default NotFound;
