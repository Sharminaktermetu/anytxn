import Image from 'next/image'
import React from 'react'
import lady from '@/assets/backgrounds/lady.avif'
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
        <div className="aspect-video justify-center rounded-lg flex items-center">
            <Image src={lady} alt="lady" width={400}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Finance
