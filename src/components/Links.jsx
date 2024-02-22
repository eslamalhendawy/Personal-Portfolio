import { motion } from "framer-motion";

const Links = ({ setOpen }) => {
  const links = ["Home", "Skills", "Projects", "Contact"];
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 70,
      opacity: 0,
    },
  };
  return (
    <motion.div variants={variants} className="links">
      {links.map((link, index) => (
        <motion.a variants={itemVariants} key={index} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};


export default Links;
