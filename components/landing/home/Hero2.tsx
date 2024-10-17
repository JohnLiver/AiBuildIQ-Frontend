"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import headerImage from "@/public/assets/header.jpg";
import { Box } from "@/components/ui/box";

const Hero = () => {
  return (
    <motion.section 
      className="bg-white dark:bg-gray-900 sm:container relative"
      style={{ maxWidth: '100%'}}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[90vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={headerImage.src}
            alt="header"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            className="opacity-50"
            style={{clipPath: 'inset(0 0 30% 0)'}}
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 flex items-end px-4 sm:px-8 md:px-8 lg:px-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              width=" w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]"
              height="h-auto min-h-[70vh] sm:h-[65vh] md:h-[60vh] lg:h-[55vh]"
              backgroundColor="bg-[#f2f2f2]"
              letter1="Experience the Future of Real Estate Financing with AIBuildIQ"
              letter2="Whether you're a lender seeking quality leads, a broker looking to close deals faster, or a borrower in search of the best loan, AIBuildIQ is the innovative platform that brings simplicity and precision to real estate financing."
              buttons={[
                { text: "BORROWERS", variant: "outline" },
                { text: "BROKERS", variant: "default" },
                { text: "LENDERS", variant: "default" }
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
