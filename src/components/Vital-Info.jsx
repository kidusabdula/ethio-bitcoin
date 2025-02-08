import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const VitalInfoSection = () => {
  return (
    <section className="py-15 bg-white">
      {/* Section Title */}
      <motion.h1
        className="text-center text-4xl font-extrabold leading-tight tracking-tight text-[#AF8F6F] md:text-5xl lg:text-6xl mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Vital Information
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-center text-lg my-4 text-gray-700 dark:text-gray-800 lg:text-xl sm:px-16 xl:px-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Africa's Bitcoin Mining Landscape and Ethiopia's Role in the Industry
      </motion.p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-6 lg:px-20 xl:px-48">
        {/* Card 1: Global Hashrate Contribution */}
        <ScrollAnimatedCard>
          <h3 className="text-2xl font-bold text-[#AF8F6F] mb-4">Global Hashrate Contribution</h3>
          <p className="text-gray-700 dark:text-gray-800 text-base lg:text-lg">
            As of December 2024, Africa accounts for approximately 3% of the global Bitcoin mining hashrate, with operations primarily powered by renewable energy sources.
          </p>
        </ScrollAnimatedCard>

        {/* Card 2: Ethiopia's Hashrate Contribution */}
        <ScrollAnimatedCard>
          <h3 className="text-2xl font-bold text-[#AF8F6F] mb-4">Ethiopia's Hashrate Contribution</h3>
          <p className="text-gray-700 dark:text-gray-800 text-base lg:text-lg">
            Ethiopia contributes about 2.5% to the global Bitcoin mining hashrate, making it a significant player in the industry.
          </p>
        </ScrollAnimatedCard>

        {/* Card 3: Energy Allocation */}
        <ScrollAnimatedCard>
          <h3 className="text-2xl font-bold text-[#AF8F6F] mb-4">Energy Allocation</h3>
          <p className="text-gray-700 dark:text-gray-800 text-base lg:text-lg">
            Ethiopian Electric Power (EEP) has allocated 600 megawatts (MW) of electricity to Bitcoin mining operations, with plans to increase this to 1 gigawatt (GW).
          </p>
        </ScrollAnimatedCard>

        {/* Card 4: Revenue Generation */}
        <ScrollAnimatedCard>
          <h3 className="text-2xl font-bold text-[#AF8F6F] mb-4">Revenue Generation</h3>
          <p className="text-gray-700 dark:text-gray-800 text-base lg:text-lg">
            In the past ten months, Ethiopia has generated over $55 million from Bitcoin mining activities.
          </p>
        </ScrollAnimatedCard>

        {/* Card 5: Energy Pricing */}
        <ScrollAnimatedCard>
          <h3 className="text-2xl font-bold text-[#AF8F6F] mb-4">Energy Pricing</h3>
          <p className="text-gray-700 dark:text-gray-800 text-base lg:text-lg">
            The country offers highly competitive electricity rates, averaging around 3.2 cents per kilowatt-hour, attracting numerous mining companies.
          </p>
        </ScrollAnimatedCard>

        {/* Card 6: Company Presence */}
        <ScrollAnimatedCard>
          <h3 className="text-2xl font-bold text-[#AF8F6F] mb-4">Company Presence</h3>
          <p className="text-gray-700 dark:text-gray-800 text-base lg:text-lg">
            There are currently 20 registered Bitcoin mining companies in Ethiopia, with 11 actively operational.
          </p>
        </ScrollAnimatedCard>
      </div>

      {/* Exclusivity Paragraph */}
      <motion.div
        className="text-center my-12 text-gray-700 dark:text-gray-800 px-6 lg:px-20 xl:px-48 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        In an age flooded with information, we value the clarity that comes from focus and intention. This summit is designed to be an intimate gathering, extended only to those deeply interested in Bitcoin mining and committed to advancing its future. By maintaining this exclusivity, we create an environment where true expertise converges, meaningful dialogue thrives, and lasting connections are forged among like-minded pioneers in the field.
      </motion.div>
    </section>
  );
};

// Scroll-Triggered Animated Card Component
const ScrollAnimatedCard = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative bg-[#F9F7F7] p-8 rounded-3xl shadow-md overflow-hidden transform transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#AF8F6F]/10 to-[#AF8F6F]/30 opacity-70"
        style={{ zIndex: -1 }}
      ></div>

      {/* Floating Circles Animation */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-[#AF8F6F]/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      ></motion.div>

      <motion.div
        className="absolute w-16 h-16 rounded-full bg-[#AF8F6F]/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.2, 0.6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: "15%", right: "10%" }}
      ></motion.div>

      {/* Content */}
      {children}
    </motion.div>
  );
};

ScrollAnimatedCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VitalInfoSection;