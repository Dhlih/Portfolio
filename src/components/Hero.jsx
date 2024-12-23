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

const fadeVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -150 },
  show: { opacity: 1, x: 0 },
};

const Hero = () => {
  return (
    <div className="w-full bg-[#0F0F0F] md:h-screen h-[108vh] text-white md:mt-[7rem] mt-[4rem] px-[3rem] placeholder:">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto overflow-hidden"
      >
        <div className="flex md:justify-end justify-center order-1 md:order-2 mb-8 md:mb-0">
          <motion.img
            variants={childVariants}
            className="w-[13rem] h-[13rem] rounded-full object-cover object-right"
            src="profile.jpeg"
            alt="Profile"
          />
        </div>

        <div className="text-group flex flex-col md:text-left order-2 md:order-1 text-center ">
          <motion.p variants={childVariants}>Hello</motion.p>
          <motion.h1
            variants={childVariants}
            className="font-bold text-2xl col-span-2"
          >
            I'm Ifad Yusuf
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="my-3 opacity-85 md:text-md text-sm md:max-w-[92%] max-w-[85%] mx-auto md:mx-0"
          >
            I'm a front-end developer with a strong enthusiasm for building
            responsive and user-friendly websites, always eager to learn and
            improve my skills.
          </motion.p>
          <motion.button
            variants={childVariants}
            className="bg-[#D7C435] text-black px-6 py-1 rounded-full mt-4 w-[130px] md:mx-0 mx-auto"
          >
            Hire me
          </motion.button>
        </div>

        {/* Gambar */}
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate="show"
        className="social-media flex justify-between max-w-[1100px] mx-auto mt-[6rem] overflow-hidden"
      >
        <motion.div variants={childVariants} className="flex items-center">
          <a href="https://www.instagram.com/ifad.yusuf/">
            <img
              className="w-6 h-6 mx-1 cursor-pointer"
              src="instagram.png"
              alt="Instagram"
            />
          </a>
          <a href=" https://www.linkedin.com/in/yusuf-fadhlih-firmansyah-27a7b829a/">
            <img
              className="w-8 h-8 mx-1  cursor-pointer"
              src="linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Dhlih
          //"
          >
            <img
              className="w-9 h-9  cursor-pointer"
              src="github.png"
              alt="GitHub"
            />
          </a>
        </motion.div>
        <motion.div variants={childVariants} className="flex items-center">
          <p className="mr-2">Scroll down</p>
          <img className="w-7 h-7" src="arrow.png" alt="Scroll down" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
