import React, { useEffect } from 'react';
import Projects from '../components/Projects';

/**
 * Standalone route (/projects) that displays the full projects showcase
 * outside of the single-page scroll flow.
 */
const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects | Saksham Sharma';
  }, []);

  return (
    <div className="pt-24">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
