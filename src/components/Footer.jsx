import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#AF8F6F] text-white rounded-lg shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="text-sm text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            © 2025{' '}
            <a href="#" className="hover:underline font-semibold">
              Ethiopia&apos;s Potential
            </a>
            . All rights reserved.
          </motion.div>

          <motion.ul
            className="flex flex-col md:flex-row justify-center md:justify-end gap-4 w-full md:w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li>
              <a
                href="#"
                className="hover:underline hover:text-yellow-200 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-yellow-200 transition-colors duration-300"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-yellow-200 transition-colors duration-300"
              >
                Agenda
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#"
            className="hover:text-yellow-200 transition-colors duration-300 self-center sm:self-auto"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-200 transition-colors duration-300 self-center sm:self-auto"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-200 transition-colors duration-300 self-center sm:self-auto"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-200 transition-colors duration-300 self-center sm:self-auto"
          >
            <FaLinkedinIn size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;