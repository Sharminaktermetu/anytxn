import Image, { StaticImageData } from 'next/image'
import React from 'react'

type FinanceSliderCard ={
    toptitle:string,
    heading:string,
    para1:string,
    para2:string
    src:StaticImageData
}
const FinanceSliderCard = ({toptitle,heading,para1,para2,src}:FinanceSliderCard) => {
  return (
    <section className="rounded-3xl">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6 items-center shadow-lg p-6 pb-12">
        <div className='w-[90%]'>
          <h2 className="text-lg font-semibold tracking-wider text-blue-600">
            {toptitle}
          </h2>
         <div className="space-y-10">
         <h1 className="mt-4 text-4xl font-semibold">
            {heading}
          </h1>
          <p>
            <b>
             {para1}
            </b>
          </p>
          <p>
       {para2}
          </p>
         </div>
        </div>
        <div className=" justify-center rounded-lg flex items-center">
            <Image src={src} alt="lady" width={500} height={500}  className='rounded-3xl'/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FinanceSliderCard
