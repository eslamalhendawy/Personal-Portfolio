import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section className="h-screen snap-center relative z-[6]">
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="container h-full mx-auto px-4 pt-[20px] flex flex-col md:flex-row gap-[30px] justify-center items-center">
          <div className="w-full lg:w-auto h-[250px] lg:h-[50%]" ref={ref}>
            <a href={item.link} target="_black">
              <img className="w-full h-full object-contain" src={item.image} alt="" />
            </a>
          </div>
          <motion.div className="basis-1/2 flex flex-col gap-[20px] textContainer" style={{ y }}>
            <h2 className="text-[40px] lg:text-[50px] text-center md:text-left">{item.title}</h2>
            <p className="text-[#808080] text-[20px] text-center md:text-left">{item.desc}</p>
            {item.link && (
              <a className="bg-[#ffa500] block mx-auto md:ml-0 cursor-pointer text-center text-black p-[10px] w-[200px] rounded-lg" href={item.link} target="_black">
                Visit Demo Site
              </a>
            )}
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
      title: "Al-Alamia",
      image: "/assets/alamia.png",
      desc: "A management system for a cardboard company.",
    },
    {
      id: 2,
      title: "Relief",
      image: "/assets/relief.png",
      desc: "A website aimed at the elderly to help them find caregivers to help them with their daily tasks.",
      link: "https://relief-project.netlify.app/",
    },
    {
      id: 3,
      title: "Cinephile Central",
      image: "/assets/movie.png",
      desc: "A movie and tv show database website that allows users to search for movies and tv shows and view details about them.",
      link: "https://cinephile-central.netlify.app/",
    },
    {
      id: 4,
      title: "AI Summarizer",
      image: "/assets/summarizer.png",
      desc: "A website that uses AI to summarize long articles and text into a short and concise summary.",
      link: "https://summarize-js.netlify.app/",
    },
    {
      id: 5,
      title: "Egytravel",
      image: "/assets/travel.png",
      desc: "A travel website that allows users to search for tourist attractions in Egypt, plan trips and browse different events happening in Egypt",
      link: "https://egytraveler.netlify.app/",
    },
    {
      id: 6,
      title: "Clothy",
      image: "/assets/ecommerce.png",
      desc: "An e-commerce website for a clothing brand.",
      link: "https://clothey.netlify.app/",
    },
    {
      id: 7,
      title: "Eslm",
      image: "/assets/eslm.png",
      desc: "A landing page for a car insurance company.",
      link: "https://eslm.netlify.app/",
    },
    {
      id: 8,
      title: "Weather App",
      image: "/assets/weather.png",
      desc: "A weather forecast website that allows users to search for the weather in different cities.",
      link: "https://eslamalhendawy.github.io/Weather-App2.0/",
    },
    {
      id: 0,
      title: "Health Recorder",
      image: "/assets/health.png",
      desc: "A patient health record database for an easier diagnosis process.",
      link: "https://health-recorder.netlify.app/",
    },
  ];
  return (
    <div className="relative p-[10px]" ref={ref}>
      <div className="sticky z-[4] progressPadding text-[18px] lg:text-[36px] text-[#ffa500] text-center left-0 top-0 lg:pt-[50px]">
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
