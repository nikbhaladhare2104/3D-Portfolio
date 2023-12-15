import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name,  value} = e.target;
    setForm({
      ...form, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Nikhil",
        from_email: form.email,
        to_email: "nikbhaladhare2104@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );

  }

  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {/* <p><FontAwesomeIcon icon="fa-light fa-phone" />NIkhil</p> */}

        {/* <div class="contact-left" >
          {/* <h1 class="main-h1">Contact Me</h1> */}
          {/* <p> <i class="fa-solid fa-envelope"></i>nikbhaladhare2104@gmail.com </p>
          <p><i class="fa-solid fa-phone"></i> +91 8208773377</p>
          <div class="social-icons">
            <a href="#" > <i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" > <i class="fa-brands fa-instagram"></i></a>
            <a href="#" > <i class="fa-brands fa-facebook"></i></a>
            <a href="#" > <i class="fa-brands fa-linkedin"></i></a>
          </div>
          <a href="" class=" btn btn-cv">Download CV</a>
       </div> */}

       {/* <div className="contact-left"> */}
        {/* <h1 className="main-h1">Contact Me</h1> */}
        {/* <p style={{fontSize: "20px"}}><FontAwesomeIcon icon="fa-solid fa-envelope" /> nikbhaladhare2104@gmail.com</p>
        <p><FontAwesomeIcon icon="fa-thin fa-phone" /> +91 8208773377</p> */}
        {/* <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div> */}
        {/* <a href="#" className="btn btn-cv"><FontAwesomeIcon icon={faDownload} /> Download CV</a> */}
      {/* </div> */}

        <p className="white"> Mob: +91 8208773377</p>
        <p className="mb-10">Email: nikbhaladhare2104@gmail.com</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label> 

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label> 

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit
            text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")