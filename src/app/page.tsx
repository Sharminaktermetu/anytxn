import Navber from '@/components/common/Navber'
import Banner from '@/components/HomeSction/Banner'
import Finance from '@/components/HomeSction/Finance'
import Philosophy from '@/components/HomeSction/Philosophy'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <Finance/>
      <Philosophy/>
    </div>
  )
}

export default HomePage
