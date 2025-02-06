import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <section
        className="flex justify-center items-center h-[100vh] bg-[#D6C0B3] text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill='%23E4E0E1' fill-opacity='0.2' d='M20 0L30 10H40V20L30 30H20V40L10 30H0V20L10 10H20V0Z'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      >
        {/* Animated Background Circles */}
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-[#E4E0E1]/50"
          animate={{ scale: [1, 2, 1], opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "20%" }}
        ></motion.div>
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-[#E4E0E1]/40"
          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ bottom: "20%", right: "10%" }}
        ></motion.div>

        {/* Floating Bitcoin Symbols */}
        <motion.div
          className="absolute text-4xl font-bold text-[#E4E0E1]"
          animate={{ y: [0, -20, 0], x: [-50, 50, -50] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "30%", left: "40%" }}
        >
          ₿
        </motion.div>
        <motion.div
          className="absolute text-6xl font-bold text-[#E4E0E1]"
          animate={{ y: [0, 30, 0], x: [50, -50, 50] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "40%", right: "30%" }}
        >
          ₿
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          <motion.h1
            className="text-6xl font-extrabold mb-8"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Unlocking Ethiopia’s Potential
          </motion.h1>
          <motion.p
            className="text-2xl text-[#493628] mb-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            The Bitcoin Mining Opportunity
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link
              to="/agenda"
              className="bg-[#E4E0E1] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#D6C0B3]"
            >
              View Agenda
            </Link>
          </motion.div>
        </div>
      </section>
      {/* <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Discover our powerful feature for a seamless experience.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Explore our innovative solutions to boost productivity.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Join our community and enjoy personalized support.</p>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
