"use client";
import Image from "next/image";
import headerImage from "@/public/assets/header.jpg";
import { Box } from "@/components/ui/box";

const Hero = () => {
  return (
    <section 
      className="bg-white dark:bg-gray-900 sm:container relative"
      style={{ maxWidth: '100%'}}
    >
      <div className="relative">
        <div className="relative w-full h-[90vh]">
          <Image
            src={headerImage.src}
            alt="header"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            className="opacity-50"
            style={{clipPath: 'inset(0 0 30% 0)'}}
          />
          <div 
            className="absolute inset-0" 
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-end px-4 sm:px-8 md:px-8 lg:px-12">
          <Box
            width="w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]"
            height="h-auto min-h-[70vh] sm:h-[65vh] md:h-[60vh] lg:h-[55vh]"
            backgroundColor="bg-[#f2f2f2]"
            letter1="AI-Driven Solutions for Smarter Lending"
            letter2="Revolutionizing how brokers and borrowers seamlessly navigate the lending process with AI-powered precision"
            buttons={[
              { text: "FUNDING REQUEST", variant: "outline" },
              { text: "DISCOVER OUR SERVICES", variant: "default" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
