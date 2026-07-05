import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

/**
 * Shared layout applied to every page: sticky navbar, page content, footer,
 * and the floating scroll-to-top button.
 */
const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
