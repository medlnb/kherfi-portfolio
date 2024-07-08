"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const GoLeft = ({
  children,
  init,
  end,
  delay,
}: {
  children: React.ReactNode;
  init: any;
  end: any;
  delay?: any;
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
      className="h-full w-full"
      ref={Eduref}
      variants={{
        start: init,
        end: end,
      }}
      initial="start"
      animate={maincontrols}
      transition={{ duration: 0.7, delay: delay ?? 0.2 }}
    >
      {children}
    </motion.div>
  );
};
export default GoLeft;
