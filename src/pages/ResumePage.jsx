import React, { useEffect } from 'react';
import Resume from '../components/Resume';

/**
 * Standalone route (/resume) that displays the full resume section
 * outside of the single-page scroll flow.
 */
const ResumePage = () => {
  useEffect(() => {
    document.title = 'Resume | Saksham Sharma';
  }, []);

  return (
    <div className="pt-24">
      <Resume />
    </div>
  );
};

export default ResumePage;
