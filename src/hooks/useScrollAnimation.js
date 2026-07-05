import { useEffect, useState } from 'react';
import { getScrollProgress } from '../utils/helpers';

/**
 * Tracks the overall vertical scroll progress of the page as a percentage (0-100).
 * Used to power the top scroll progress bar and the scroll-to-top button visibility.
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => setProgress(getScrollProgress());
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * Tracks whether the user has scrolled past a given threshold (in px).
 * Useful for toggling the "scroll to top" button or sticky navbar background.
 * @param {number} threshold
 */
export const useScrollPosition = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

/**
 * Uses IntersectionObserver to detect when a section enters the viewport,
 * enabling active-link highlighting in the navbar.
 * @param {string[]} sectionIds
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
