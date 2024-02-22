import { motion } from "framer-motion";

import SideMenu from "./SideMenu";

function Navbar() {

  const variants = {
    hidden: { opacity: 0, scale: 0.8},
    visible: { opacity: 1, scale: 1, transition: {staggerChildren: 0.3, duration: 0.5} }
  }

  return (
    <div className="h-[100px]">
      <SideMenu />
      <div className="container mx-auto flex justify-between items-center p-6">
        <motion.div className="ml-[70px]" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>
          <img className="w-[30px] block " src="/assets/Logo.png" alt="" />
        </motion.div>
        <motion.div className="flex gap-4 items-center" variants={variants} initial="hidden" animate="visible">
          <motion.a className="text-[20px]" whileHover={{scale: 1.1}} variants={variants} href="https://www.linkedin.com/in/eslam-alhendawy/">
            <i className="fa-brands fa-linkedin"></i>
          </motion.a>
          <motion.a className="text-[20px]" whileHover={{scale: 1.1}} variants={variants} href="https://www.facebook.com/profile.php?id=100007914375078">
            <i className="fa-brands fa-facebook-f"></i>
          </motion.a>
          <motion.a className="text-[20px]" whileHover={{scale: 1.1}} variants={variants} href="https://www.instagram.com/eslam_alhendawy/">
            <i className="fa-brands fa-instagram"></i>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
