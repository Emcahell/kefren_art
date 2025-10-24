import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

export const CardArt = ({ imageUrl, altText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  // Hook para detectar clics fuera del componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]); 

  return (
    <motion.div 
      ref={cardRef}
      className="w-[120px] md:w-[300px] h-auto p-2 md:p-4 border-2 border-celestial rounded transition-transform duration-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ scale: isExpanded ? 2 : 1 }} 
      onTap={() => setIsExpanded(!isExpanded)} 
      transition={{ duration: .5 }}
      >
      <img src={imageUrl} alt={altText} className="rounded" />
    </motion.div>
  );
}