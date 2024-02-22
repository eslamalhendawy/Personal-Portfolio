import { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();

  return (
    <motion.div className="px-6 pt-[85px] pb-6 h-full bg-gradient-to-b from-[#0c0c1d] to-[#111132]" variants={variants} initial="initial" animate={"animate"} ref={ref}>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <motion.div variants={variants} className="text basis-1/5 self-center md:self-end flex flex-col md:flex-row items-center gap-1">
          <p className="font-[200] text-[20px] text-[#808080] text-align-right">The Skills And Tools I Use.</p>
          <hr className="w-[300px] md:w-[450px]" />
        </motion.div>
        <motion.div variants={variants} className="basis-2/5 flex w-full justify-center items-center">
          <div className="title">
            <h1 className="text-[50px] lg:text-[91px] mt-[20px] mb-[20px] md:mb-[100px] text-white font-[100]">Skills & Tools</h1>
          </div>
        </motion.div>
        <motion.div variants={variants} className="basis-2/5 flex flex-col md:flex-row w-full md:w-fit md:mx-auto">
          <div className="p-4 border border-[#808080] flex flex-col gap-2 items-center justify-start hover:bg-[#d3d3d3] hover:text-black duration-300">
            <h2 className="text-[25px] lg:text-[30px] text-center">Frameworks</h2>
            <ul className="flex flex-col gap-[5px] lg:gap-[10px] text-center text-[16px] lg:[20px]">
              <li>React</li>
              <li>Astro</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div  className="p-4 border border-[#808080] flex flex-col gap-2 items-center justify-start hover:bg-[#d3d3d3] hover:text-black duration-300">
            <h2 className="text-[25px] lg:text-[30px] text-center">Styling Tools</h2>
            <ul className="flex flex-col gap-[5px] lg:gap-[10px] text-center text-[16px] lg:[20px]">
              <li>CSS</li>
              <li>Tailwind</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div  className="p-4 border border-[#808080] flex flex-col gap-2 items-center justify-start hover:bg-[#d3d3d3] hover:text-black duration-300">
            <h2 className="text-[25px] lg:text-[30px] text-center">
              Programming <br /> Languages
            </h2>
            <ul className="flex flex-col gap-[5px] lg:gap-[10px] text-center text-[16px] lg:[20px]">
              <li>JavaScript</li>
              <li>C++</li>
              <li>Python</li>
            </ul>
          </div>
          <div  className="p-4 border border-[#808080] flex flex-col gap-2 items-center justify-start hover:bg-[#d3d3d3] hover:text-black duration-300">
            <h2 className="text-[25px] lg:text-[30px] text-center">Other Tools</h2>
            <ul className="flex flex-col gap-[5px] lg:gap-[10px] text-center text-[16px] lg:[20px]">
              <li>Vite</li>
              <li>Webpack</li>
              <li>Git & Github</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
