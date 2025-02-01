import Navber from '@/components/common/Navber'
import Banner from '@/components/HomeSction/Banner'
import Brandlogo from '@/components/HomeSction/Brandlogo'
import Conatct from '@/components/HomeSction/Contactus'
import Finance from '@/components/HomeSction/Finance'
import Footer from '@/components/HomeSction/Footer'
import Philosophy from '@/components/HomeSction/Philosophy'
import Technology from '@/components/HomeSction/Technology'
import TrustedBrand from '@/components/HomeSction/TrustedBrand'



const HomePage = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      {/* <Banner/>
      <Finance/>
      <Philosophy/>
      <Technology/>
      <TrustedBrand/>
      <Brandlogo/>
      <Conatct/>
      <Footer/> */}
    </div>
  )
}

export default HomePage
