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

const Skills = () => {
  return (
    <div className="w-full text-white py-[4rem] px-[3rem] " id="skills">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="max-w-[700px] mx-auto "
      >
        <motion.h1
          variants={childVariants}
          className="text-center font-bold text-2xl mb-[3rem]"
        >
          My <span className="text-[#D7C435] ">Skills</span>
        </motion.h1>

        <motion.div className="grid md:grid-cols-3 grid-cols-2 ">
          <div className="md:mx-7 mx-0 mb-11 bg">
            <div
              variants={childVariants}
              className="w-full flex justify-center"
            >
              <motion.img
                className="md:w-32 w-16 bg-[#131313] p-3 rounded-lg"
                src="html.png"
              />
            </div>
            <motion.p variants={childVariants} className="mt-3 text-center">
              HTML
            </motion.p>
          </div>

          <motion.div variants={childVariants} className="md:mx-7 mx-0 mb-11">
            <div className="w-full flex justify-center">
              <motion.img
                className="md:w-32 w-16 bg-[#131313] p-3 rounded-lg"
                src="css.png"
              />
            </div>
            <motion.p variants={childVariants} className="mt-3 text-center">
              CSS
            </motion.p>
          </motion.div>

          <motion.div variants={childVariants} className="md:mx-7 mx-0 mb-11">
            <div className="w-full flex justify-center">
              <motion.img
                className="md:w-32 w-16 bg-[#131313] p-3 rounded-lg"
                src="js.png"
              />
            </div>
            <motion.p variants={childVariants} className="mt-3 text-center">
              JavaScript
            </motion.p>
          </motion.div>

          <motion.div variants={childVariants} className="md:mx-7 mx-0 mb-11">
            <div className="w-full flex justify-center">
              <motion.img
                className="md:w-32 w-16 bg-[#131313] p-3 rounded-lg"
                src="react.png"
              />
            </div>
            <motion.p variants={childVariants} className="mt-3 text-center">
              React
            </motion.p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="md:mx-7 mx-0 h-24 mb-11"
          >
            <div className="w-full flex justify-center">
              <motion.img
                className="md:w-32 w-16 bg-[#131313] p-3 rounded-lg"
                src="tailwindcss.png"
              />
            </div>
            <motion.p variants={childVariants} className="mt-3 text-center">
              Tailwind
            </motion.p>
          </motion.div>

          <motion.div variants={childVariants} className="md:mx-7 mx-0 mb-11">
            <div className="w-full flex justify-center">
              <motion.img
                className="md:w-32 w-16 bg-[#131313] p-3 rounded-lg"
                src="nodejs.png"
              />
            </div>
            <motion.p variants={childVariants} className="mt-3 text-center">
              NodeJS
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
