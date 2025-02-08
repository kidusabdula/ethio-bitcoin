import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#AF8F6F] rounded-lg shadow-md pb-10">
      <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
        {/* Left Section: Copyright */}
        <motion.div
          className="text-sm text-white sm:text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          © 2025{' '}
          <a href="#" className="hover:underline font-semibold">
            Ethiopia's Potential
          </a>
          . All rights reserved.
        </motion.div>

        {/* Right Section: Links */}
        <motion.ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <li>
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition-colors duration-300 me-4 md:me-6"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition-colors duration-300 me-4 md:me-6"
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition-colors duration-300 me-4 md:me-6"
            >
              Agenda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </motion.ul>
      </div>

      {/* Newsletter Subscription */}
      

      {/* Social Media Icons */}
      <motion.div
        className="flex justify-center gap-6 mt-3 text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <a
          href="#"
          className="hover:text-yellow-200 transition-colors duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="#"
          className="hover:text-yellow-200 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="hover:text-yellow-200 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          className="hover:text-yellow-200 transition-colors duration-300"
        >
          <FaLinkedinIn size={24} />
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;