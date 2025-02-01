'use client'
import Image from 'next/image'
import React from 'react'
import lady from '@/assets/backgrounds/lady.avif'
import { motion } from "framer-motion";
import img1 from '@/assets/frames/card.svg'
import img2 from '@/assets/frames/home.svg'
import img3 from '@/assets/frames/sale.svg'
import star2 from "@/assets/backgrounds/WaveLinesDesktop1.svg";
import star3 from "@/assets/backgrounds/WaveLinesDesktop4.svg";
const Finance = () => {
  return (
    <section className="">
    <div className="max-w-6xl mx-auto  py-20 ">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-lg font-semibold tracking-wider text-blue-600">
            POWERING THE FUTURE OF FINANCE
          </h2>
         <div className="space-y-10">
         <h1 className="mt-4 text-6xl font-semibold">
            Uncovering new ways to delight customers
          </h1>
          <p>
            <b>
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial
              services.
            </b>
          </p>
          <p>
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced
            technology for lasting success.
          </p>
         </div>
        </div>
        <div className="relative justify-center rounded-lg flex items-center overflow-hidden">
      {/* Main Image */}
    <div className=''>
    <Image src={lady} alt="lady" width={400} height={500} className="rounded-lg" />
    </div>

    <motion.img
            src={star2.src}
            alt="star"
            className="absolute -top-10"
            animate={{
              y: [0, -20, 0], // Up and down animation
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{
              duration: 4,
              
              ease: "linear",
            }}
          />
    <motion.img
            src={star3.src}
            alt="star"
            className="absolute -bottom-11"
            animate={{
              y: [0, -20, 0], // Up and down animation
              opacity: [0.8, 0.5, 0.8],
            }}
            transition={{
              duration: 4,
              
              ease: "linear",
            }}
          />
      {/* Animated Images */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: [0, -20, 0], // Up and down animation
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-14 left-10 w-24"
      >
        <Image src={img1} alt="overlay 1" className="" />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: [0, -20, 0], // Up and down animation
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-2/4 left-32 w-24"
      >
        <Image src={img3} alt="overlay 2"/>
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: [0, -20, 0], // Up and down animation
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      
        className="absolute top-20 right-5 w-32 "
      >
        <Image src={img2} alt="overlay 3"/>
      </motion.div>
    </div>
      </div>
    </div>
  </section>
  )
}

export default Finance
