import { motion } from "framer-motion";

// import "./Hero.scss";

const Hero = () => {
  const varients = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
    scrollButton: { opacity: 0, y: 10, transition: { duration: 2, repeat: Infinity } },
  };

  const textVarients = {
    initial: { x: 0 },
    animate: { x: "-220%", transition: { duration: 30, repeat: Infinity, repeatType: "mirror" } },
  };

  return (
    <div className="heroHeight bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden relative z-[2]">
      <div className="container mx-auto px-6 py-6 h-full flex flex-col lg:flex-row lg:items-center gap-12">
        <motion.div variants={varients} className="h-[50%] lg:h-full w-full lg:w-[50%] flex flex-col text-center lg:text-left items-center lg:items-start justify-center gap-4" initial="initial" animate="animate">
          <motion.h2 className="text-[30px] lg:text-left text-[#663399] uppercase" variants={varients}>
            Eslam Alhendawy
          </motion.h2>
          <motion.h1 className="text-[40px] lg:text-[88px]">Frontend React Developer</motion.h1>
          <motion.div variants={varients} className="buttons relative z-[5]">
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a className="font-[14px] sm:font-[20px] p-[10px] sm:p-[20px] border border-white rounded-lg text-white cursor-pointer hover:bg-white hover:text-black duration-300" href="#projects" variants={varients}>
                Latest Projects
              </motion.a>
              <motion.a className="font-[14px] sm:font-[20px] p-[10px] sm:p-[20px]  border border-white rounded-lg text-white cursor-pointer hover:bg-white hover:text-black duration-300" href="#contact" variants={varients}>
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <motion.img variants={varients} className="w-[50px]" animate="scrollButton" src="/assets/scroll.png" alt="" />
        </motion.div>
        <motion.div variants={textVarients} initial="initial" animate="animate" className="absolute text-[20vh] lg:text-[50vh] bottom-[-60px] lg:bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-full font-bold">
          Frontend React Developer
        </motion.div>
        <div className="rounded-full flex justify-center items-center relative z-[4]">
          <img className="rounded-full w-[80%] sm:w-[50%] lg:w-[65%]" src="/assets/Profile picture.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
