"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-8">  {/* Reduced from lg:py-16 */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center justify-self-center text-center sm:justify-self-start sm:text-left text-[#44624a]"
        >
          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            Hi, I&apos;m Andrew Tran
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl pb-6"> {/* Reduced padding-bottom */}
            Software Engineer based in NYC
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 flex justify-center"
        >
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="matcha2.png"
              alt="matcha"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
