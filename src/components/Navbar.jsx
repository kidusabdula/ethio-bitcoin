import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-[#3F2305]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="self-center text-2xl font-bold text-white">EthioCrypto</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-[#E4E0E1]/20 focus:outline-none focus:ring-2 focus:ring-[#E4E0E1]/50"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
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

        {/* Desktop Menu */}
        <motion.div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#E4E0E1]/20 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <motion.a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:hover:text-[#D6C0B3] md:hover:bg-transparent md:p-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:hover:text-[#D6C0B3] md:hover:bg-transparent md:p-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Agenda
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:hover:text-[#D6C0B3] md:hover:bg-transparent md:p-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Register
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;