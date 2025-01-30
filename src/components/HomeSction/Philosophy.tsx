import React from "react";
import TopTitle from "../common/TopTitle";
import Image from "next/image";
import philosophy from "@/assets/backgrounds/philosophy.avif";
import PhilosophyCard from "../common/PhilosophyCard";
import { philosophyCards } from "@/data/philosophy";




const Philosophy = () => {
  return (
    <div className="max-w-6xl mx-auto py-28 space-y-9">
      <TopTitle
        title="OUR PHILOSOPHY"
        describe="Human-centred innovation"
      />
      <Image src={philosophy} alt="philosophy" width={1152} />
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 ">
      {philosophyCards.map((card, index) => (
        <PhilosophyCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    </div>
  );
};

export default Philosophy;
