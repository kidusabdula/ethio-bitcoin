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
            © 2025{" "}
            <a href="#" className="hover:underline font-semibold">
              Ethiopia&apos;s Potential
            </a>
            . All rights reserved.
          </motion.div>

          <motion.ul
            className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li>
              <a
                href="/"
                className="relative inline-block text-sm font-medium text-white transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-yellow-200 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-yellow-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="relative inline-block text-sm font-medium text-white transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-yellow-200 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-yellow-200"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="/agenda"
                className="relative inline-block text-sm font-medium text-white transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-yellow-200 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:text-yellow-200"
              >
                Agenda
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="flex flex-row justify-center gap-6 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
