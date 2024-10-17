"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import headerImage from "@/public/assets/header.jpg";


const Hero = () => {
  return (
    <section 
      className="relative w-full h-[40vh] bg-gray-900 p-[20] mt-[10vh]"
    >
      <Image
        src={headerImage.src}
        alt="header"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ filter: 'brightness(0.5)' }}
      />
      <div className="absolute inset-0 flex flex-col px-4 sm:px-8 md:px-8 lg:px-12 justify-center  text-white w-[75%]">
        <h2 className="text-4xl font-bold mb-4 text-left">How AIBuildIQ Works</h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-8 max-w-2xl text-left"
        >
          Streamlining the lending process with intelligent, data-driven solutions tailored for brokers and borrowers.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
