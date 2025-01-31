import Image from "next/image";
import React from "react";
import lady from "@/assets/backgrounds/lady.avif";
const Conatct  = () => {
  return (
    <div>
      <section className="relative h-[87vh] overflow-hidden ">
        {/* Background with diagonal split */}
        <div className="absolute inset-0">
         
        <div
            className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0057c1]"
            style={{
            

              clipPath: 'polygon(0% 0, 100% 60%, 100% 100%, 0% 100%)'
            }}
          />
          <div className="max-w-6xl mx-auto relative mt-32">
            <div className="flex flex-col justify-center space-y-8 py-20">
              <h2 className="font-semibold text-white lg:text-6xl lg:leading-[1.5] tracking-[0.025em]">
              Legacy no longer
              </h2>
              <p className="max-w-[600px] text-md text-white/90 font-medium">
              Talk to us to find out how we can transform your organisation for the future
              </p>
              <div>
                <button className="bg-[#FF7F57] hover:bg-[#ff6a3d] text-white py-3 font-bold rounded px-8 text-lg">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Clip-Path Shape */}
       
      </section>

    
    
    </div>
  );
};

export default Conatct ;
