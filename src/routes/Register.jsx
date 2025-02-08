import { useEffect } from "react";
import { motion } from "framer-motion";

const RedirectToGoogleForm = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSeWIA8cvHHPG8VMdolI8jvVmwmzzN1XlbVAN3boTNqro0UzXA/viewform?usp=dialog";
    }, 6000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#AF8F6F] to-[#D6C0B3] flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-[#AF8F6F]/20 blur-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      ></motion.div>
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-[#AF8F6F]/30 blur-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.2, 0.6],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "20%", right: "15%" }}
      ></motion.div>

      <div className="text-center z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-white mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-4xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Redirecting...
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Please wait while we take you to the registration form.
        </motion.p>

        <motion.div
          className="flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="w-4 h-4 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="w-4 h-4 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          ></motion.div>
          <motion.div
            className="w-4 h-4 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RedirectToGoogleForm;