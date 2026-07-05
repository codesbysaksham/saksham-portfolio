import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Send } from "lucide-react";

import { PERSONAL_INFO, SCROLL_OFFSET } from "../utils/constants";
import SocialIcons from "./SocialIcons";
import HeroScene from "../scenes/HeroScene";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* AI Core */}
      <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 min-h-screen flex items-center justify-end">

        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass px-5 py-2 rounded-full text-sm text-accent font-medium tracking-wide"
          >
            👋 Welcome to my portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              {PERSONAL_INFO.firstName}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl lg:text-3xl font-medium h-10"
          >
            <TypeAnimation
              sequence={PERSONAL_INFO.taglines.flatMap((tag) => [tag, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="max-w-xl text-muted text-lg leading-8"
          >
            I design and build delightful, high-performance web experiences
            from front to back.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <Link
              to="contact"
              spy
              smooth
              duration={600}
              offset={SCROLL_OFFSET}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
              >
                <Send className="w-4 h-4" />
                Hire Me
              </motion.span>
            </Link>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/5 transition"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <SocialIcons />
          </motion.div>

        </div>

      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <Link
          to="about"
          spy
          smooth
          duration={600}
          offset={SCROLL_OFFSET}
          className="cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase text-muted">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-2"
          >
            <ArrowDown className="w-5 h-5 text-accent" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;