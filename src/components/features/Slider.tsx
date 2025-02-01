'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Slider.module.css';
import { useRef, useState } from 'react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import slider1 from '@/assets/backgrounds/slide1.avif';
import slider2 from '@/assets/backgrounds/slide2.avif';
import slider3 from '@/assets/backgrounds/slide3.avif';
import slider4 from '@/assets/backgrounds/slide4.avif';
import FinanceSliderCard from '../common/FinanceSliderCard';

// Financial slider data array
const financialSlides = [
  {
    toptitle: 'Customer Focused',
    heading: 'Purpose-built financial services',
    para1: 'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.',
    para2: 'Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.',
    src: slider1
  },
  {
    toptitle: 'Agile and Adaptable',
    heading: 'Flexible and scalable solutions',
    para1: 'Stay ahead of the curve with cutting-edge financial technology designed to adapt to changing market dynamics and customer expectations.',
    para2: 'Leverage a modular architecture that supports rapid deployment and seamless integration.',
    src: slider2
  },
  {
    toptitle: 'Compliance Ready',
    heading: 'Meet regulatory requirements effortlessly',
    para1: 'Ensure compliance with evolving financial regulations while maintaining operational efficiency and security.',
    para2: 'Access built-in compliance tools that streamline reporting and risk management.',
    src: slider3
  },
  {
    toptitle: 'Secure and Safe',
    heading: 'Advanced security for financial transactions',
    para1: 'Protect customer data with state-of-the-art encryption and multi-layered security measures.',
    para2: 'Build trust with robust fraud prevention and real-time threat monitoring.',
    src: slider4
  }
];

export default function Slider() {
  const swiperRef = useRef<import('swiper').Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.sliderContainer}>
      {/* Custom Pagination Tabs */}
      <div className={`hidden lg:flex`}>
 <div className={styles.customTabs}>
 {financialSlides.map((slide, index) => (
    <button
      key={index}
      className={`${styles.tabButton} ${activeIndex === index ? styles.activeTab : ''}`}
      onClick={() => {
        swiperRef.current?.slideTo(index);
        setActiveIndex(index);
      }}
    >
      {slide.toptitle}
    </button>
  ))}
 </div>
</div>


      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.on('slideChange', () => setActiveIndex(swiper.activeIndex));
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper  mt-28"
      >
        {financialSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <FinanceSliderCard
              toptitle={slide.toptitle}
              heading={slide.heading}
              para1={slide.para1}
              para2={slide.para2}
              src={slide.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
