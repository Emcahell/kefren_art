import AvatarKefren from '../../assets/art-kefren/avatar-kefren.webp';
import { motion } from 'motion/react';

export const AvatarAboutme = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.img 
        src={AvatarKefren.src} 
        className="rounded-lg w-[500px]" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .5 }}
        alt="Avatar Kefren" 
        />
    </div>
  )
}