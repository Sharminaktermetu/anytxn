'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import lady from "@/assets/backgrounds/lady.avif";
import star from "@/assets/backgrounds/WaveLinesDesktop2.svg"; // Example SVG
import star2 from "@/assets/backgrounds/WaveLinesDesktop3.svg"; // Example SVG
import { ChevronRight } from "lucide-react";

const Banner = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <section className="relative lg:h-screen h-[50vh] overflow-hidden bg-white">
        
        {/* Background with diagonal split */}
        <div className="bg-center absolute inset-0 bg-gradient-to-br from-[#1355b8] to-[#0057c1]">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(80% 0, 100% 0, 100% 100%, 35% 100%)",
              backgroundImage: `url(${lady.src})`,
              
            }}
          />

          {/* Floating animated SVGs */}
          <motion.img
            src={star.src}
            alt="star"
            className="absolute top-0 left-20 w-full cursor-pointer"
            initial={{ scale: 1, rotate: 0 }}
            animate={{ scale: hovered ? 1.5 : 1, rotate: hovered ? 360 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />

          <motion.img
            src={star2.src}
            alt="star"
            className="absolute top-0 right-0"
            animate={{
              y: [0, -20, 0], // Up and down animation
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Banner content */}
          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col justify-center space-y-8 py-20 items-center lg:items-start">
              <h2 className="font-bold text-white lg:text-6xl text-4xl lg:leading-[1.5] tracking-[0.025em]">
                Embrace the <br />
                future of finance
              </h2>
              <h2 className="font-semibold text-white lg:text-xl text-sm lg:leading-[1.5] tracking-[0.025em]">
              Reimagine financial  services with AnyTech&apos;s <br /> open platform,
              distributed banking solution <br />
               that powers transformation
              </h2>
              
              <div>
                <button className="flex lg:items-center  bg-[#FF7F57] hover:bg-[#ff6a3d] text-white py-3 font-bold rounded px-8 text-lg">
                  Reach Out to Us
                  <ChevronRight className="ml-2 p-1"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Clip-Path Shape */}
        <div
          className="absolute bottom-[-1px] left-0 w-full h-[150px] bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 60%, 100% 100%, 0% 100%)",
          }}
        />
      </section>
    </div>
  );
};

export default Banner;
