import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Jeda antara anak-anak
      ease: "easeOut",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -50 }, // Posisi awal
  show: { opacity: 1, x: 0 }, // Posisi akhir
};

const Test = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      className="max-w-[1100px] h-screen bg-purple-300 text-black flex flex-col items-center justify-center gap-4"
    >
      <motion.h1 variants={childrenVariants} className="text-3xl font-bold">
        Lorem Ipsum
      </motion.h1>
      <motion.p
        variants={childrenVariants}
        className="text-lg text-center max-w-[600px]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate
        reprehenderit ex hic expedita quibusdam ducimus beatae. Culpa,
        perspiciatis nemo.
      </motion.p>
    </motion.div>
  );
};

export default Test;
