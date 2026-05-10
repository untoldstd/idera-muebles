"use client";

import { type Variants, motion, useReducedMotion } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? undefined : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? undefined : itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
