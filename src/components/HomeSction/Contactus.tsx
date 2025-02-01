"use client";
import React from "react";
import star2 from "@/assets/backgrounds/WaveLinesDesktop2.svg";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section className="relative lg:h-[87vh] h-96 overflow-hidden">
        {/* Background with diagonal split */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0057c1]"
            style={{
              clipPath: "polygon(0% 0, 100% 60%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Animated Overlay with Background Image */}
          <motion.img
            src={star2.src}
            alt="star"
            style={{
              clipPath: "polygon(0% 0, 100% 60%, 100% 100%, 0% 100%)",
            }}
            className="absolute top-36 right-0 lg:w-[700px] "
            animate={{
              y: [0, -20, 0], // Up and down animation
              opacity: 2,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src={star2.src}
            alt="star"
            style={{
              clipPath: "polygon(0% 0, 100% 60%, 100% 100%, 0% 100%)",
            }}
            className="absolute -inset-10 -top-24  left-0 lg:w-[900px] hidden lg:flex"
            animate={{
              y: [0, -20, 0], // Up and down animation
              opacity: [0.8, 2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />


          {/* Content */}
          <div className="max-w-6xl mx-auto relative mt-32">
            <div className="flex flex-col justify-center space-y-8 py-20 items-center lg:items-start">
              <h2 className="font-semibold text-white lg:text-6xl lg:leading-[1.5] tracking-[0.025em]">
                Legacy no longer
              </h2>
              <p className="max-w-[600px] text-md text-white/90 font-medium">
                Talk to us to find out how we <br /> can transform your organisation
                for the future
              </p>
              <div>
                <button className=" flex items-center bg-[#FF7F57] hover:bg-[#ff6a3d] text-white py-3 font-bold rounded px-8 text-lg">
                  Contact us
                  <ChevronRight className="ml-2 p-1"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
