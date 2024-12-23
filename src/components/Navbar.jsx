import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  return (
    <motion.section className="w-full px-[3rem]">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delay: 0.3,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="max-w-[1100px] mx-auto flex justify-between items-center text-white py-6 "
      >
        <h3>IfadYusuf</h3>
        <ul>
          <div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="hidden md:flex  "
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer mx-3 hover:font-bold"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer mx-3 hover:font-bold"
            >
              Skills
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer mx-3 hover:font-bold"
            >
              Contacts
            </Link>
          </div>
          <img
            className="w-5 linear md:hidden"
            src="menu.png"
            alt=""
            onClick={handleClick}
          />
        </ul>
      </motion.div>

      {/* mobile navbar */}
      <div
        className={
          nav
            ? "h-full fixed top-0 left-0 bottom-0 w-[45%] bg-[#131313] text-white p-5 z-40 ease-in-out duration-300"
            : "ease-in-out duration-300 fixed left-[-100%]"
        }
      >
        <h3 className="mb-2">IfadYusuf</h3>
        <ul>
          <div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="flex flex-col"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer mb-2 mt-6"
            >
              About
            </Link>
            <div className="underline h-1 w-full bg-[#D7C435] rounded-full mb-4"></div>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer mb-2"
            >
              Skills
            </Link>
            <div className="underline h-1 w-full bg-[#D7C435] rounded-full mb-4"></div>

            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer mb-2"
            >
              Contacts
            </Link>
            <div className="underline h-1  bg-[#D7C435] w-full rounded-full mb-4"></div>
          </div>
        </ul>
      </div>
    </motion.section>
  );
};

export default Navbar;
