import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      <motion.h1
        ref={headingRef}
        className="mb-8 text-center text-4xl font-extrabold leading-tight tracking-tight text-[#AF8F6F] md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -50 }}
        animate={
          isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
        }
        transition={{ duration: 1 }}
      >
        Transforming Ethiopia&apos;s Digital Future
      </motion.h1>
      <motion.p
        ref={subheadingRef}
        className="text-center text-lg my-4 text-gray-500 font-medium lg:text-2xl sm:px-16 xl:px-48"
        initial={{ opacity: 0, y: 50 }}
        animate={
          isSubheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 1 }}
      >
        The Ethiopia Bitcoin Mining Summit marks a pivotal moment in East
        Ethiopia&apos;s digital transformation. As Ethiopia embraces blockchain
        technology and cryptocurrency mining, we&apos;re witnessing the dawn of a new
        era in the region&apos;s technological landscape.
      </motion.p>
      <motion.div
        ref={paragraphRef}
        className="space-y-6 text-center my-8 text-gray-400 px-6 lg:px-20 xl:px-48 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={
          isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 1 }}
      >
        <p>
          Join us for this groundbreaking event that brings together industry
          leaders, policymakers, and innovators to explore Ethiopia&apos;s
          potential in the global Bitcoin mining ecosystem. We&apos;ll discuss
          sustainable mining practices, regulatory frameworks, and the economic
          impact of cryptocurrency mining in Ethiopia.
        </p>
        <p>
          Through expert panel discussions and networking opportunities,
          attendees will gain valuable insights into the future of Bitcoin
          mining in Ethiopia and its role in driving economic growth and
          technological advancement in the region.
        </p>
      </motion.div>
      <motion.div
        ref={lineRef}
        className="w-32 h-1 bg-white mx-auto mt-10"
        initial={{ width: 0 }}
        animate={isLineInView ? { width: "8rem" } : { width: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

Content.propTypes = {};
export default Content;
