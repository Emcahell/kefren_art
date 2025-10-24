import { motion } from "motion/react";

export const H1Title = () => {
  return (
    <motion.h1
      className="text-5xl sm:text-6xl md:text-8xl font-family-primary text-white"
      animate={{ opacity: [0, 1], y: [-70, 0] }}
      transition={{ duration: .7 }}
      >
      kefren art
    </motion.h1>
  )
}