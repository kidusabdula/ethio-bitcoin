import { motion } from "framer-motion";
import { FaRegLightbulb, FaNetworkWired } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function EngagementSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 p-12 bg-white">
      {" "}
      <motion.div
        className="text-center max-w-sm bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden relative min-h-[400px] flex flex-col justify-between card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.1 },
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/30 to-yellow-200/50 opacity-70"
          style={{ zIndex: -1 }}
        ></div>
        <motion.div
          className="flex justify-center items-center h-24 w-24 mx-auto text-[#AF8F6F] text-7xl sm:text-8xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaNetworkWired />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#AF8F6F] mt-5">
          Connect
        </h3>
        <p className="text-sm sm:text-xl text-gray-600 mt-3 flex-grow">
          With world-class speakers who will share insights on the industry’s
          major developments.
        </p>
      </motion.div>
      <motion.div
        className="text-center max-w-sm bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden relative min-h-[400px] flex flex-col justify-between card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.1 },
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/30 to-yellow-200/50 opacity-70"
          style={{ zIndex: -1 }}
        ></div>
        <motion.div
          className="flex justify-center items-center h-24 w-24 mx-auto text-[#AF8F6F] text-7xl sm:text-8xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineLocationMarker />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#AF8F6F] mt-5">
          Network
        </h3>
        <p className="text-sm sm:text-xl text-gray-600 mt-3 flex-grow">
          With institutional investors, crypto-forward institutions, members of
          the press, and corporate, regulatory, and policy leaders.
        </p>
      </motion.div>
      <motion.div
        className="text-center max-w-sm bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden relative min-h-[400px] flex flex-col justify-between card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.1 },
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/30 to-yellow-200/50 opacity-70"
          style={{ zIndex: -1 }}
        ></div>
        <motion.div
          className="flex justify-center items-center h-24 w-24 mx-auto text-[#AF8F6F] text-7xl sm:text-8xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaRegLightbulb />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#AF8F6F] mt-5">
          Discuss
        </h3>
        <p className="text-sm sm:text-xl text-gray-600 mt-3 flex-grow">
          The current state of the cryptoeconomy plus the developments that are
          propelling the industry and the financial system forward.
        </p>
      </motion.div>
    </div>
  );
}
