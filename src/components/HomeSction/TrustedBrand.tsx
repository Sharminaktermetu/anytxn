import React from "react";
import { NumberTicker } from "../ui/number-ticker";
import TopTitle from "../common/TopTitle";
import Brandlogo from "./Brandlogo";

const TrustedBrand = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <TopTitle title="TRUSTED BY THE BEST" />
      <div className="flex justify-between text-[18px]">
        <div className="">
        <NumberTicker
          value={20}
          className="whitespace-pre-wrap text-8xl font-semibold tracking-tighter text-[#1F80F0] dark:text-white"
          
        />
        <p>Years of Experience</p>
        </div>
     <div>
     <NumberTicker
          value={40}
          className="whitespace-pre-wrap text-8xl font-semibold tracking-tighter text-[#1F80F0] dark:text-white"
        />
        <p>Financial Institutions

</p>
     </div>
       <div>
       <NumberTicker
          value={200}
          className="whitespace-pre-wrap text-8xl font-semibold tracking-tighter text-[#1F80F0] dark:text-white"
        />
        <p>Customers Each

</p>
       </div>
      </div>
 
    </div>
  );
};

export default TrustedBrand;
