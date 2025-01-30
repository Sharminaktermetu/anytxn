import Image from "next/image";
import React from "react";
import lady from "@/assets/backgrounds/lady.avif";
const Banner = () => {
  return (
    <div>
      <section className="relative h-[85vh] overflow-hidden bg-white">
        {/* Background with diagonal split */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0057c1]">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(75% 0, 100% 0, 100% 100%, 45% 100%)",
              backgroundImage: `url(${lady.src})`,
            }}
          />

          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col justify-center space-y-8 py-20">
              <h2 className="font-bold text-white lg:text-7xl lg:leading-[1.5] tracking-[0.025em]">
                Embrace the <br />
                future of finance
              </h2>
              <p className="max-w-[600px] text-md text-white/90 font-bold">
                Reimagine financial services with AnyTech's open platform,
                distributed banking solution that powers transformation
              </p>
              <div>
                <button className="bg-[#FF7F57] hover:bg-[#ff6a3d] text-white py-3 font-bold rounded px-8 text-lg">
                  Reach Out to Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Clip-Path Shape */}
        <div
          className="absolute bottom-[-1px] left-0 w-full h-[150px] bg-white"
          style={{
            clipPath: "polygon(0 80%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </section>

    
    
    </div>
  );
};

export default Banner;
