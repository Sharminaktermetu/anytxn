"use client";
import React from "react";
import star2 from "@/assets/backgrounds/WaveLinesDesktop4.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <section className="relative h-[87vh] overflow-hidden">
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
          <motion.div
            className="absolute inset-0 top-0 left-0"
            style={{
              clipPath: "polygon(0% 0, 100% 60%, 100% 100%, 0% 100%)",
              backgroundImage: `url(${star2.src})`,
              // backgroundSize: "cover",
              backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              opacity: 0.8, // Adjust transparency for overlay effect
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Content */}
          <div className="max-w-6xl mx-auto relative mt-32">
            <div className="flex flex-col justify-center space-y-8 py-20">
              <h2 className="font-semibold text-white lg:text-6xl lg:leading-[1.5] tracking-[0.025em]">
                Legacy no longer
              </h2>
              <p className="max-w-[600px] text-md text-white/90 font-medium">
                Talk to us to find out how we can transform your organisation
                for the future
              </p>
              <div>
                <button className="bg-[#FF7F57] hover:bg-[#ff6a3d] text-white py-3 font-bold rounded px-8 text-lg">
                  Contact us
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
