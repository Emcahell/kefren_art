import { motion } from "motion/react";
import { MyTools } from '../../components/ui/MyTools';

export const TextAboutme = () => {
  return (
    <motion.div 
      className="w-[400px] md:w-auto flex flex-col gap-6 px-8 py-12 z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: .5 }}
      >
      <h2 className="text-2xl">Hola, me llamo Kefren.</h2>
      <p className="text-lg">Soy venezolano y el dibujo ha sido parte de mi vida desde que tengo memoria. A lo largo de los años he complementado mi pasión con formación en diseño artístico y digital, incluyendo cursos de Photoshop, fotografía, edición de imágenes e inteligencia artificial.</p>
      <p className="text-lg">He trabajado con herramientas como PaintTool SAI, Ibis Paint, Photoshop, Illustrator, Excel y Canva, lo que me ha permitido desarrollar proyectos versátiles y creativos. Con más de 10 años de experiencia en el mundo del diseño, combino técnica y sensibilidad visual para transformar ideas en piezas únicas.</p>
      <div>
        <MyTools client:load />
      </div>
    </motion.div>
  )
}