"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const GoLeft = ({
  children,
  init,
  end,
}: {
  children: React.ReactNode;
  init: any;
  end: any;
}) => {
  const Eduref = useRef(null);
  const isInView = useInView(Eduref, { once: true });
  const maincontrols = useAnimation();
  useEffect(() => {
    if (isInView) {
      maincontrols.start("end");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={Eduref}
      variants={{
        start: init,
        end: end,
      }}
      initial="start"
      animate={maincontrols}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};
export default GoLeft;
