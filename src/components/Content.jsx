import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BackgroundImage from "../assets/night.png";

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
    <div
      className="py-16 md:py-24 lg:py-32 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#AF8F6F]/70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#AF8F6F]"></div>
      <div className="relative z-10 text-white px-4 sm:px-10 lg:px-14">
        <motion.h1
          ref={headingRef}
          className="mb-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.5 }}
        >
          Unlock Ethiopia&apos;s Potential marks a pivotal moment in East
          Africa&apos;s digital transformation. As Ethiopia embraces Bitcoin
          mining, we&apos;re witnessing the dawn of a new era in the
          region&apos;s technological landscape.
        </motion.h1>
        <motion.p
          ref={subheadingRef}
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl my-6 font-medium"
          initial={{ opacity: 0, y: 50 }}
          animate={
            isSubheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          Join us for this groundbreaking event that brings together industry
          leaders, policymakers, and innovators to explore Ethiopia&apos;s
          potential in the global Bitcoin mining ecosystem. We&apos;ll discuss
          sustainable mining practices, regulatory frameworks, and the economic
          impact of Bitcoin mining in Ethiopia.
        </motion.p>
        <motion.div
          ref={paragraphRef}
          className="space-y-4 text-center my-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={
            isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <p>
            Through expert panel discussions and networking opportunities,
            attendees will gain valuable insights into the future of Bitcoin
            mining in Ethiopia and its role in driving economic growth and
            technological advancement in the region.
          </p>
        </motion.div>
        <motion.div
          ref={lineRef}
          className="w-20 sm:w-24 md:w-28 lg:w-32 h-1 bg-white mx-auto mt-8 mb-12"
          initial={{ width: 0 }}
          animate={isLineInView ? { width: "5rem" } : { width: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Content;
