"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "We offer website development services designed to meet your business needs. With experience in software development and UI/UX design, we create websites that are not only visually appealing but also functional and user-friendly. From responsive design to the integration of necessary features, we ensure every aspect of your website works optimally to support your business goals. Contact us for professional website solutions tailored to your needs.",
    href: ""
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "I offer UI/UX design services focused on optimal user experiences and attractive interfaces. Using a research and analysis-based approach, I create intuitive, efficient, and aesthetically pleasing designs for your applications and websites. I am committed to understanding user needs and translating them into designs that facilitate interaction and enhance user satisfaction. Trust me with your design needs for solutions that not only beautify the appearance but also improve functionality and accessibility.",
    href: ""
  },
  {
    num: "03",
    title: "Assets Designer",
    description: "I provide website and UI asset creation services designed to enhance your digital appearance and functionality. From icons, images, and graphic elements to user interface design, I create assets that align with your brand identity and project needs. With attention to detail and quality, I ensure that each asset is not only visually appealing but also supports an optimal user experience. Contact me for design solutions that refine your website or application with professionalism and creativity.",
    href: ""
  },
]

import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/**top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover transition-all duration-300">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-yellow-600 transition-all duration-300 
                  flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-2xl"/>
                  </Link>
                </div>
                {/**title */}
                <h2 className="text-[35px] font-bold leading-none text-white 
                group-hover:text-yellow-600 transition-all duration-300">
                  {service.title}
                </h2>
                {/**description */}
                <p className="text-white/60">{service.description}</p>
                {/**border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
};

export default Service;