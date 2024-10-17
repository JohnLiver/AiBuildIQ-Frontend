"use client";
import Image from "next/image";
import headerImage from "@/public/assets/about/1.jpg";
import middleImage from "@/public/assets/about/2.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full mt-[15vh]">
      {/* Header Image Section */}
      <div className="relative w-full h-[40vh]">
        <Image
          src={headerImage.src}
          alt="About Us Header"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="absolute inset-0 flex flex-col px-4 sm:px-8 md:px-8 lg:px-12 justify-center text-white w-[50%]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-left"
          >
            Get in Touch with AIBuildIQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl max-w-2xl text-left"
          >
            AI solutions for seamless financing
          </motion.p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-[#0256c5] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect with the AIBuildIQ Team
          </motion.p>
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI-powered solutions for lending
          </motion.h2>
          <motion.p
            className="text-gray-600 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            At AIBuildIQ, we're dedicated to making real estate financing seamless, efficient, and transparent. Whether you have questions about our AI-powered solutions, need guidance on your loan options, or want to learn more about our services, our team is ready to assist you.
          </motion.p>
        </motion.div>
        <div className="md:w-1/2">
          <Image
            src={middleImage.src}
            alt="About AIBuildIQ"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#0256c5] font-bold mb-4 text-left">Tell Us About Your Project</p>
          <h2 className="text-3xl font-bold mb-8 text-left">Let Us Assist on Your Capital Needs</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold text-3xl mb-2">Location</h3>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="group cursor-pointer">
                  <p className="group-hover:text-[#0275d8] transition-colors duration-300">6785 Boccelli Court</p>
                  <p className="group-hover:text-[#0275d8] transition-colors duration-300">Las Vegas NV 89139</p>
                  <p className="group-hover:text-[#0275d8] transition-colors duration-300">US</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold mb-2 text-3xl">Hours</h3>
              <div className="flex justify-between">
                <div>
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                  <p>Friday</p>
                </div>
                <div className="ml-4">
                  <p>8:00am – 5:00pm</p>
                  <p>8:00am – 5:00pm</p>
                  <p>8:00am – 5:00pm</p>
                  <p>8:00am – 5:00pm</p>
                  <p>8:00am – 5:00pm</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
