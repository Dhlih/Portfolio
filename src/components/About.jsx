import { motion } from "motion/react";

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -150 },
  show: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <div
      className="w-full bg-[#131313]  text-white py-[7rem] mt-[-10rem] px-[3rem] "
      id="about"
    >
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="max-w-[850px] mx-auto grid md:grid-cols-3 grid-cols-1  "
      >
        <div className="text-group flex flex-col justify-center mb-4">
          <motion.h1 variants={childVariants} className="font-bold text-xl">
            About <span className="text-[#D7C435]">Me</span>
          </motion.h1>
          <motion.div
            variants={childVariants}
            className="underline h-1 w-16 bg-[#D7C435] rounded-full mt-1"
          ></motion.div>
        </div>
        <div className=" col-span-2 ">
          <motion.p variants={childVariants} className="md:text-md text-sm">
            My name is Yusuf Fadhlih Firmansyah. I'm currently studying
            Informatics Engineering at Politeknik Negeri Semarang. I have a deep
            passion for technology, especially in web development. I am always
            eager to learn and explore new concepts because there is no enough
            when it comes to learning
          </motion.p>
          <motion.button
            variants={childVariants}
            className="bg-[#D7C435] text-black px-6 py-2 rounded-full mt-8  text-xs "
          >
            Download CV
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
