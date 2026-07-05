import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Award } from 'lucide-react';
import { certificates } from '../data/certificates';
import SectionTitle from './SectionTitle';

/**
 * Responsive grid of certification cards with view and download actions.
 */
const Certificates = () => {
  return (
    <section id="certificates" className="relative">
      <div className="section-container">
        <SectionTitle
          eyebrow="Achievements"
          title="Certificates & Courses"
          description="Certifications I've earned to keep my skills sharp and up to date."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:shadow-glow transition-shadow duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
              </div>

              <div className="flex flex-col gap-2 p-5 flex-1">
                <h3 className="text-base font-semibold text-white leading-snug">{cert.title}</h3>
                <p className="text-sm text-muted">
                  {cert.issuer} &middot; {cert.date}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-white hover:bg-white/5 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" /> View
                  </a>
                  <a
                    href={cert.image}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-accent transition-shadow duration-300"
                  >
                    <Download className="w-4 h-4" /> Save
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
