import africa_png from "../assets/africa.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex justify-center items-center h-[100vh] bg-white text-white text-center relative overflow-hidden">
      <motion.img
        src={africa_png}
        alt="Africa Watermark"
        className="absolute w-[150px] sm:w-[200px] md:w-[250px] opacity-20 pointer-events-none select-none"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "20%", left: "10%" }}
      />

      <motion.img
        src={africa_png}
        alt="Africa Watermark Opposite"
        className="absolute w-[150px] sm:w-[200px] md:w-[250px] opacity-20 pointer-events-none select-none"
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          rotate: [360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: "20%", right: "10%" }}
      />

      <motion.div
        className="absolute w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-[#E4E0E1]/50"
        animate={{ scale: [1, 2, 1], opacity: [0.9, 0.3, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      ></motion.div>
      <motion.div
        className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#E4E0E1]/40"
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "20%", right: "10%" }}
      ></motion.div>

      <motion.div
        className="absolute text-5xl sm:text-7xl font-bold text-[#E4E0E1]"
        animate={{ y: [0, -20, 0], x: [-50, 50, -50] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "30%", left: "30%" }}
      >
        ₿
      </motion.div>
      <motion.div
        className="absolute text-6xl sm:text-8xl font-bold text-[#E4E0E1]"
        animate={{ y: [0, 30, 0], x: [50, -50, 50] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "40%", right: "30%" }}
      >
        ₿
      </motion.div>

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
          Pioneering the Future of Blockchain Technology
        </motion.p>
        <motion.p
          className="text-xs sm:text-sm md:text-base text-black mb-8 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Join us in shaping Ethiopia&apos;s digital landscape through
          innovative blockchain solutions, sustainable mining practices, and
          cutting-edge technology infrastructure.
        </motion.p>

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
