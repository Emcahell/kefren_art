import { motion } from "motion/react";

export const IconFacebook = () => {
  return (
    <motion.a 
      href="https://www.facebook.com/share/17GPSyXHg3/" 
      whileHover={{rotate: 360, scale: 1.2}}
      animate={{ opacity: [0, 1], scale: [0.5, 1] }}
      transition={{ duration: .4 }}
      >
      <svg viewBox="0 0 448 512" width="30px" className="hover:fill-purple drop-shadow-sm drop-shadow-purple w-[20px] sm:w-[30px]" fill="#22d3ee"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
    </motion.a>
  )
}