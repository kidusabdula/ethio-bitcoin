import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import ethiopian_flag from "../assets/flag.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#AF8F6F] relative">
      <div
        className="absolute bottom-0 left-0 right-0 h-4 bg-[#AF8F6F]"
        style={{
          clipPath: "ellipse(50% 100% at 50% 100%)", 
        }}
      ></div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 rounded-t-3xl">
        <motion.a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={ethiopian_flag}
              alt="Ethiopian Flag"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 w-12 h-12 text-sm text-gray-300 bg-[#E4E0E1]/20 rounded-full md:hidden hover:bg-[#E4E0E1]/30 focus:outline-none focus:ring-2 focus:ring-[#E4E0E1]/50"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <motion.div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#E4E0E1]/20 rounded-2xl bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/"
                  className="block py-3 px-6 text-white rounded-full md:hover:text-[#D6C0B3] md:hover:bg-transparent md:p-0 transition-all duration-300"
                >
                  Home
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/agenda"
                  className="block py-3 px-6 text-white rounded-full md:hover:text-[#D6C0B3] md:hover:bg-transparent md:p-0 transition-all duration-300"
                >
                  Agenda
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/register"
                  className="block py-3 px-6 text-white rounded-full md:hover:text-[#D6C0B3] md:hover:bg-transparent md:p-0 transition-all duration-300"
                >
                  Register
                </Link>
              </motion.div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:hidden bg-[#A67B5B] rounded-2xl shadow-lg mt-4`}
          initial={{ opacity: 0, y: -20 }}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="font-medium flex flex-col p-4 space-y-2">
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/"
                  className="block py-3 px-6 text-white rounded-full hover:text-[#D6C0B3] transition-all duration-300"
                >
                  Home
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/agenda"
                  className="block py-3 px-6 text-white rounded-full hover:text-[#D6C0B3] transition-all duration-300"
                >
                  Agenda
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/register"
                  className="block py-3 px-6 text-white rounded-full hover:text-[#D6C0B3] transition-all duration-300"
                >
                  Register
                </Link>
              </motion.div>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;