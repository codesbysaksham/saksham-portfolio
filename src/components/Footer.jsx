import React from 'react';
import { Link } from 'react-scroll';
import { NAV_LINKS, PERSONAL_INFO, SCROLL_OFFSET } from '../utils/constants';
import SocialIcons from './SocialIcons';

/**
 * Site footer with brand mark, quick navigation links, social icons, and copyright notice.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="section-container !py-12 flex flex-col items-center gap-8">
        <Link
          to="hero"
          spy
          smooth
          duration={600}
          offset={SCROLL_OFFSET}
          className="cursor-pointer font-poppins text-2xl font-bold text-white"
        >
          Saksham<span className="text-accent">.</span>
        </Link>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                duration={600}
                offset={SCROLL_OFFSET}
                className="cursor-pointer text-sm text-muted hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <SocialIcons size="sm" />

        <div className="w-full h-px bg-white/5" />

        <p className="text-sm text-muted text-center">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
