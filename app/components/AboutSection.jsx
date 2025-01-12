"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {

  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <Image src="PerplexityHeadshot-andrewtran.png" alt="Me" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full text-[#44624a]">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. This text
            was written by the template off github I used!
        </p>
        </div>
    </div>
    </section>
  );
};

export default AboutSection;
