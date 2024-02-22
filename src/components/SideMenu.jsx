import { useState } from "react";
import { motion } from "framer-motion";

import "./SideMenu.scss";

import Links from "./Links";
import ToggleButton from "./ToggleButton";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {type: "spring", stiffness: 20}
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {delay: 0.5, stiffness: 40}
    }
  }

  return (
    <motion.div className="sidemenu" initial="closed" animate={open ? "open" : "closed "}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default SideMenu;
