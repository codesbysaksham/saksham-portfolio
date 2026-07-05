import React, { useEffect } from 'react';
import Certificates from '../components/Certificates';

/**
 * Standalone route (/certificates) that displays the full certificates grid
 * outside of the single-page scroll flow.
 */
const CertificatesPage = () => {
  useEffect(() => {
    document.title = 'Certificates | Saksham Sharma';
  }, []);

  return (
    <div className="pt-24">
      <Certificates />
    </div>
  );
};

export default CertificatesPage;
