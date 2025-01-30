import { describe } from 'node:test'
import React from 'react'
type TopTitleProps = {  
    title: string
    describe: string
}

const TopTitle = ({title,describe}:TopTitleProps) => {
  return (
    <div className='w-full text-center'>
      <h2 className="text-[#1F80F0] text-xl font-bold">{title}
      </h2>
        <h1 className='text-5xl font-medium'>{describe}</h1>
    </div>
  )
}

export default TopTitle
