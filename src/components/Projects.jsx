import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref , });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section className="h-screen snap-center">
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="container h-full mx-auto px-4 pt-[20px] flex flex-col md:flex-row gap-[30px] justify-center items-center">
          <div className="w-full lg:w-auto h-[300px] lg:h-[50%]" ref={ref}>
            <img className="w-full h-full object-contain" src={item.image} alt="" />
          </div>
          <motion.div className="basis-1/2 flex flex-col gap-[20px] textContainer" style={{y}}>
            <h2 className="text-[40px] lg:text-[50px] text-center md:text-left">{item.title}</h2>
            <p className="text-[#808080] text-[20px] text-center md:text-left">{item.desc}</p>
            <a className="bg-[#ffa500] block mx-auto md:ml-0 cursor-pointer text-center text-black p-[10px] w-[200px] rounded-lg" href={item.link} target="_blank">Visit Demo Site</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const items = [
    {
      id: 1,
      title: "Cinephile Central",
      image: "/assets/movie.png",
      desc: "A movie and tv show database website that allows users to search for movies and tv shows and view details about them.",
      link: "https://cinephile-central.netlify.app/",
    },
    {
      id: 2,
      title: "Egytravel",
      image: "/assets/travel.png",
      desc: "A travel website that allows users to search for tourist attractions in Egypt, plan trips and browse different events happening in Egypt",
      link: "https://egytraveler.netlify.app/",
    },
    {
      id: 3,
      title: "Clothy",
      image: "/assets/ecommerce.png",
      desc: "An e-commerce website for a clothing brand.",
      link: "https://clothey.netlify.app/",
    },
    {
      id: 4,
      title: "Eslm",
      image: "/assets/eslm.png",
      desc: "A landing page for a car insurance company.",
      link: "https://eslm.netlify.app/",
    },
    {
      id: 5,
      title: "Weather App",
      image: "/assets/weather.png",
      desc: "A weather forecast website that allows users to search for the weather in different cities.",
      link: "https://eslamalhendawy.github.io/Weather-App2.0/",
    },
    {
      id: 6,
      title: "Health Recorder",
      image: "/assets/health.png",
      desc: "A patient health record database for an easier diagnosis process.",
      link: "https://health-recorder.netlify.app/",
    },
  ];
  return (
    <div className="relative p-[10px]" ref={ref}>
      <div className="sticky progressPadding text-[18px] lg:text-[36px] text-[#ffa500] text-center left-0 top-0 lg:pt-[50px]">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar h-[5px] lg:h-[10px] bg-white"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
