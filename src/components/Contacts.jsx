import { motion } from "framer-motion";

function handleClick(evt) {
  evt.preventDefault();
}

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

const Contacts = () => {
  return (
    <div
      className="w-full bg-[#131313] text-white py-[3rem] px-[3rem]"
      id="contacts"
    >
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="grid md:grid-cols-2 grid-cols-1 max-w-[850px] mx-auto "
      >
        <div>
          <motion.h1 variants={childVariants} className="font-bold text-2xl">
            Contact <span className="text-[#D7C435]">Me</span>
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="w-[88%] mb-6 mt-2 opacity-90 md:text-md text-sm"
          >
            Feel free to contact me any time. I will get back to you as soon as
            i can!
          </motion.p>

          <form>
            <motion.label
              variants={childVariants}
              htmlFor="name"
              className="block"
            >
              Name :{" "}
            </motion.label>
            <motion.input
              variants={childVariants}
              className="bg-transparent outline-none border-b-2 border-white rounded-b-sm w-[70%] mb-2"
              type="text"
              name=""
              id=""
            />

            <motion.label
              variants={childVariants}
              htmlFor="email"
              className="block"
            >
              Email :
            </motion.label>
            <motion.input
              variants={childVariants}
              className="bg-transparent outline-none border-b-2 border-white rounded-b-sm w-[70%] mb-2"
              type="text"
              name=""
              id=""
            />

            <motion.label
              variants={childVariants}
              htmlFor="message"
              className="block"
            >
              Message :
            </motion.label>
            <motion.input
              variants={childVariants}
              className="bg-transparent outline-none border-b-2 border-white rounded-b-sm mb-5 w-[70%] "
              type="text"
              name=""
              id=""
            />

            <motion.button
              variants={childVariants}
              className="block bg-[#D7C435] text-black px-6 py-1 rounded-full mt-6 w-[130px] "
              onClick={handleClick}
            >
              Send
            </motion.button>
          </form>
        </div>

        <motion.div
          variants={childVariants}
          className="info-group md:mt-[2rem] mt-[3rem] md:ml-[7rem] ml-0 bg-[#1E1E1E] p-6 rounded-xl h-[250px]"
        >
          <motion.h3 variants={childVariants} className="font-bold text-xl">
            Info
          </motion.h3>
          <motion.p variants={childVariants} className="flex items-center my-5">
            <img className="w-7 h-7 mr-4" src="mail.png" alt="" />{" "}
            yusuffadhlih123@gmail.com
          </motion.p>
          <motion.p variants={childVariants} className="flex items-center mb-5">
            <img className="w-7 h-7 mr-4 " src="telephone.png" alt="" /> +62 822
            3251 4587
          </motion.p>
          <motion.p variants={childVariants} className="flex items-center mb-5">
            <img className="w-7 h-7 mr-4" src="time.png" alt="" /> 08.00 - 16.00
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contacts;
