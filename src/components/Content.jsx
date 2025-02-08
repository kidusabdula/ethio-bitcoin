import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const Content = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const lineRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isSubheadingInView = useInView(subheadingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });
  const isLineInView = useInView(lineRef, { once: true });

  return (
    <div className="py-16 bg-white">
      {/* Main Heading */}
      <motion.h1
        ref={headingRef}
        className="mb-8 text-center text-4xl font-extrabold leading-tight tracking-tight text-[#AF8F6F] md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        We invest in the world’s potential
      </motion.h1>

      {/* Subheading */}
      <motion.p
        ref={subheadingRef}
        className="text-center text-lg my-4 text-gray-500 lg:text-2xl sm:px-16 xl:px-48"
        initial={{ opacity: 0, y: 50 }}
        animate={isSubheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        Ethiopia stands at the forefront of a transformative opportunity to position itself as a global leader in Bitcoin mining.
      </motion.p>

      {/* Paragraph with Animation */}
      <motion.div
        ref={paragraphRef}
        className="text-center my-8 text-gray-700 dark:text-gray-800 px-6 lg:px-20 xl:px-48 text-xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        Entrepreneurs and investors worldwide are increasingly drawn to Ethiopia’s abundant hydropower resources, recognising the country as an ideal destination for sustainable Bitcoin mining operations. This burgeoning industry not only highlights Ethiopia’s potential to attract significant foreign investment but also offers a pathway to boosting the nation’s gross domestic product. By capitalising on this momentum, Ethiopia could redefine its economic landscape and establish itself as a cornerstone of the global Bitcoin mining ecosystem.
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        ref={lineRef}
        className="w-32 h-1 bg-[#AF8F6F] mx-auto mt-10"
        initial={{ width: 0 }}
        animate={isLineInView ? { width: "8rem" } : { width: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

// Declare that this component has no props
Content.propTypes = {};

export default Content;