import africa_png from "../assets/africa.png"; // Existing African continent image
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center h-[100vh] bg-white text-white text-center relative overflow-hidden"
    >
      {/* Floating PNG Watermark (Existing) */}
      <motion.img
        src={africa_png} // Replace with your PNG image URL
        alt="Africa Watermark"
        className="absolute w-[150px] sm:w-[200px] md:w-[250px] opacity-20 pointer-events-none select-none"
        animate={{
          x: [-100, 100, -100], // Horizontal movement
          y: [-50, 50, -50],    // Vertical movement
          rotate: [0, 360],      // Optional rotation for dynamic effect
        }}
        transition={{
          duration: 10,         // Duration of one cycle
          repeat: Infinity,     // Repeat indefinitely
          ease: "linear",       // Smooth linear motion
        }}
        style={{ top: "20%", left: "10%" }} // Adjusted position for smaller screens
      />

      {/* Floating PNG Watermark (Opposite Direction) */}
      <motion.img
        src={africa_png} // Replace with your new PNG image URL
        alt="Africa Watermark Opposite"
        className="absolute w-[150px] sm:w-[200px] md:w-[250px] opacity-20 pointer-events-none select-none"
        animate={{
          x: [100, -100, 100], // Opposite horizontal movement
          y: [50, -50, 50],    // Opposite vertical movement
          rotate: [360, 0],    // Reverse rotation
        }}
        transition={{
          duration: 10,         // Duration of one cycle
          repeat: Infinity,     // Repeat indefinitely
          ease: "linear",       // Smooth linear motion
        }}
        style={{ bottom: "20%", right: "10%" }} // Adjusted position for smaller screens
      />

      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-[#E4E0E1]/50"
        animate={{ scale: [1, 2, 1], opacity: [0.9, 0.3, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }} // Adjusted position for smaller screens
      ></motion.div>
      <motion.div
        className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#E4E0E1]/40"
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "20%", right: "10%" }} // Adjusted position for smaller screens
      ></motion.div>

      {/* Floating Bitcoin Symbols */}
      <motion.div
        className="absolute text-5xl sm:text-7xl font-bold text-[#E4E0E1]"
        animate={{ y: [0, -20, 0], x: [-50, 50, -50] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "30%", left: "30%" }} // Adjusted position for smaller screens
      >
        ₿
      </motion.div>
      <motion.div
        className="absolute text-6xl sm:text-8xl font-bold text-[#E4E0E1]"
        animate={{ y: [0, 30, 0], x: [50, -50, 50] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "40%", right: "30%" }} // Adjusted position for smaller screens
      >
        ₿
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-[#74512D] font-extrabold mb-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Unlocking Ethiopia&apos;s Potential
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-black mb-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          The Bitcoin Mining Opportunity
        </motion.p>

        {/* New Animated Text Block */}
        <motion.div
          className="text-lg sm:text-xl text-[#A67B5B] font-semibold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          Ethiopia, Addis Ababa | March 5-6 | Hyatt Regency, Meskel Square
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Link
            to="/agenda"
            className="bg-[#A67B5B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D6C0B3]"
          >
            View Agenda
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;