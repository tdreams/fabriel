import React from "react";
import Certificates from "./Certificates";
import { AiOutlineArrowRight } from "react-icons/ai";
import Works from "./Works";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Main = () => {
  return (
    <div id="content" className="pt-24 lg:w-full lg:py-24 ">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div className="lg:relative w-[55rem] ">
          <p className="mb-4">
            Passionate about technology, I've honed my skills in coding and web
            development during the COVID era. Now, my focus is on mastering
            JavaScript and React to build dynamic web experiences. Equipped with
            the Google UX Design Professional Certificate, I bring a deep
            understanding of user-centric design principles to create visually
            appealing and functional interfaces.
          </p>
          <p className="mb-4">
            Dedicated to continuous learning and adaptability, I offer a unique
            blend of UX design, frontend development, and creative thinking.
            Collaborative and innovative, I thrive on meaningful projects that
            push boundaries and make a difference. Let's connect and embark on
            an exciting journey together.
          </p>
          <p className="mb-8 lg:mb-[100vh]">
            Beyond tech, I find inspiration in playing MMORPGs, RPGs, and mobile
            games with captivating storylines. As an anime enthusiast, I
            appreciate the artistry and creativity in this medium. These
            interests fuel my creativity and contribute to a fresh perspective
            in problem-solving and design.
          </p>
          <div className=" absolute -bottom-80 w-full lg:flex justify-center items-center">
            <a href="#certificates">
              <div className=" hidden w-[35px] h-[64px] rounded-3xl border-4 border-[#bdc0d1] lg:flex justify-center items-start p-2">
                <motion.dev
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-[#bdc0d1] mb-1"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        id="certificates"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24 flex-grow"
        aria-label="certificates"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Certificates
          </h2>
        </div>
        <div className="">
          <Certificates />
        </div>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200   group"
            aria-label="View Full Résumé"
            href="/resume.pdf"
          >
            <span className="flex flex-row  transition-all ">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none ">
                  &nbsp;Résumé
                </span>
              </span>
              <AiOutlineArrowRight className="group-hover:ml-2 ease-in-out duration-300 mt-[2.5px] " />
            </span>
          </a>
        </div>
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h2>
          </div>
          <Works />
        </div>
      </section>
    </div>
  );
};

export default Main;
