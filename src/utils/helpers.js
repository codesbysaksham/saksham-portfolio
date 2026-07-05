// Generic helper functions used throughout the app

/**
 * Validates an email address format
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates that a form field is not empty (after trimming whitespace)
 * @param {string} value
 * @returns {boolean}
 */
export const isNotEmpty = (value) => value?.trim().length > 0;

/**
 * Returns a truncated string with ellipsis if it exceeds maxLength
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export const truncateText = (text, maxLength = 120) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
};

/**
 * Smoothly scrolls the window to the top
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} fn
 * @param {number} delay
 */
export const debounce = (fn, delay = 200) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Calculates the current scroll progress percentage of the page
 * @returns {number} percentage between 0 and 100
 */
export const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};
