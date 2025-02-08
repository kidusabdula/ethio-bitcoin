import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaNetworkWired } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function EngagementSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 p-12 bg-white">
      {/* Connect Section */}
      <motion.div
        className="text-center max-w-sm bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Background Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/30 to-yellow-200/50 opacity-70"
          style={{ zIndex: -1 }}
        ></div>

        {/* Icon Animation */}
        <motion.div
          className="flex justify-center items-center h-24 w-24 mx-auto text-[#74512D] text-7xl sm:text-8xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaNetworkWired />
        </motion.div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-[#74512D] mt-5">Connect</h3>
        <p className="text-sm sm:text-xl text-gray-600 mt-3">
          With world-class speakers who will share insights on the industry’s major developments.
        </p>
      </motion.div>

      {/* Network Section */}
      <motion.div
        className="text-center max-w-sm bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Background Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/30 to-yellow-200/50 opacity-70"
          style={{ zIndex: -1 }}
        ></div>

        {/* Icon Animation */}
        <motion.div
          className="flex justify-center items-center h-24 w-24 mx-auto text-[#74512D] text-7xl sm:text-8xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineLocationMarker />
        </motion.div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-[#74512D] mt-5">Network</h3>
        <p className="text-sm sm:text-xl text-gray-600 mt-3">
          With institutional investors, crypto-forward institutions, members of the press, and corporate, regulatory, and policy leaders.
        </p>
      </motion.div>

      {/* Discuss Section */}
      <motion.div
        className="text-center max-w-sm bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Background Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/30 to-yellow-200/50 opacity-70"
          style={{ zIndex: -1 }}
        ></div>

        {/* Icon Animation */}
        <motion.div
          className="flex justify-center items-center h-24 w-24 mx-auto text-[#74512D] text-7xl sm:text-8xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaRegLightbulb />
        </motion.div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-[#74512D] mt-5">Discuss</h3>
        <p className="text-sm sm:text-xl text-gray-600 mt-3">
          The current state of the cryptoeconomy plus the developments that are propelling the industry and the financial system forward.
        </p>
      </motion.div>
    </div>
  );
}