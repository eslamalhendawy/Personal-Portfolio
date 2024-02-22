import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const varients = {
  initial: { y: 500, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const Contact = () => {
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sosocpx", "template_uugwmj2", ref.current, {
        publicKey: "_4FiTnkLTQcSFTyCH",
      })
      .then(
        (res) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div variants={varients} initial="initial" whileInView="animate" className="h-full container mx-auto flex flex-col justify-center lg:flex-row gap-[50px] w-full px-[10px]  items-center mt-[200px]">
      <motion.div className="flex flex-col items-center gap-[20px] lg:gap-[40px] text-center lg:text-left " variants={varients}>
        <motion.h1 variants={varients} className="text-[36px] lg:text-[80px] mt-24 lg:mt-0">Contact Me</motion.h1>
        <motion.div variants={varients} className="item">
          <h2 className="text-center">Mail</h2>
          <span className="font-[300]">eslam_alhendawy@outlook.com</span>
        </motion.div>
        <motion.div variants={varients} className="item">
          <h2>Phone Number</h2>
          <span className="font-[300]">+20 1012609957</span>
        </motion.div>
      </motion.div>
      <motion.div className="lg:basis-1/2 relative p-[10px]" variants={varients}>
        <motion.form className="flex flex-col gap-[20px] p-[10px]" onSubmit={sendEmail} ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
          <input className="p-[10px] lg:p-[20px] bg-transparent border border-white text-white rounded-lg duration-300 focus:outline-none focus:border-[#ffa500]" type="text" required placeholder="Name" name="name" />
          <input className="p-[10px] lg:p-[20px] bg-transparent border border-white text-white rounded-lg duration-300 focus:outline-none focus:border-[#ffa500]" type="email" required placeholder="Email" name="email"/>
          <textarea className="p-[10px] lg:p-[20px] bg-transparent border border-white text-white rounded-lg duration-300 focus:outline-none focus:border-[#ffa500]" rows="8" placeholder="Message" name="message"></textarea>
          <button className="p-[10px] lg:p-[20px] bg-[#ffa500] cursor-pointer font-[500] rounded-lg ">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
