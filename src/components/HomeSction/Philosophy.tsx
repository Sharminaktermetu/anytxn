"use client";
import React from "react";
import TopTitle from "../common/TopTitle";
import Image from "next/image";
import philosophy from "@/assets/backgrounds/philosophy.avif";
import PhilosophyCard from "../common/PhilosophyCard";
import { philosophyCards } from "@/data/philosophy";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden, slightly below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate upwards
};

const Philosophy = () => {
  return (
    <div className="max-w-6xl mx-auto py-28 space-y-9">
      <TopTitle title="OUR PHILOSOPHY" describe="Human-centred innovation" />
      <Image src={philosophy} alt="philosophy" width={1152} />

      {/* Animated Cards */}
      <motion.div 
        className="grid lg:grid-cols-3 grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
      >
        {philosophyCards.map((card, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants} 
            transition={{ delay: index * 0.2 }} // Staggered animation
          >
            <PhilosophyCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Philosophy;
