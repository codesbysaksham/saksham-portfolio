import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoaderScene from "../scenes/LoaderScene";

const messages = [
  "Initializing React...",
  "Loading Three.js...",
  "Connecting AI Core...",
  "Building Experience...",
  "Almost Ready...",
  "Welcome."
];

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);

          setTimeout(() => {
            onFinish();
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(progressTimer);
  }, [onFinish]);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 500);

    return () => clearInterval(messageTimer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#050816] flex flex-col items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-44 h-44">
          <LoaderScene />
        </div>

        <motion.h2
          key={messageIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-300 text-xl font-semibold mt-8"
        >
          {messages[messageIndex]}
        </motion.h2>

        <div className="w-72 h-2 bg-white/10 rounded-full mt-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <p className="text-white/60 mt-3 text-sm">
          {progress}%
        </p>

        <motion.p
          className="text-white/30 mt-8 text-sm tracking-[4px]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          SAKSHAM NIDHI
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}