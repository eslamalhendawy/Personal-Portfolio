import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



const Parallax = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="parallax w-full h-full relative flex justify-center items-center overflow-hidden" style={{ background: type === "Skills" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)" }}>
      <motion.h1 style={{ y: yText }} className="text-[72px] lg:text-[100px]">
        {type}
      </motion.h1>
      <motion.div className="w-full h-full absolute z-[3] bg-contain xl:bg-cover  bg-no-repeat bg-bottom" style={{backgroundImage: "url('/assets/mountains.png')"}}></motion.div>
      <motion.div className="w-full h-full absolute z-[2] bg-cover bg-top" style={{ y: ybg, backgroundImage: `url(${type === "Skills" ? "/assets/planets.png" : "/assets/sun.png"})` }}></motion.div>
      <motion.div style={{ x: ybg, backgroundImage: "url('/assets/stars.png')" }} className="stars w-full h-full absolute z-[1] bg-top bg-cover" ></motion.div>
    </div>
  );
};

export default Parallax;
