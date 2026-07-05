import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO, SCROLL_OFFSET } from '../utils/constants';
import { useScrollPosition, useScrollProgress, useActiveSection } from '../hooks/useScrollAnimation';
import favicon from "../assets/logos/favicon.png";

/**
 * Sticky, responsive navigation bar with a scroll progress indicator,
 * active-section highlighting, and an animated mobile menu.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(30);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(NAV_LINKS.map((link) => link.to));

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width: `${progress}%` }}
      />

      <nav className="section-container !py-0 flex items-center justify-between">
        <Link
          to="hero"
          spy
          smooth
          duration={600}
          offset={SCROLL_OFFSET}
          className="cursor-pointer font-poppins text-xl font-bold text-white"
        >
          Saksham Nidhi<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                duration={600}
                offset={SCROLL_OFFSET}
                className={`relative cursor-pointer text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.to ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.span
                    layoutId="active-nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

       <img
  src={favicon}
  alt="Saksham Logo"
  className="hidden md:block w-10 h-10 object-contain"
/>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    duration={600}
                    offset={SCROLL_OFFSET}
                    onClick={closeMenu}
                    className={`cursor-pointer text-base font-medium ${
                      activeSection === link.to ? 'text-accent' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
             
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
