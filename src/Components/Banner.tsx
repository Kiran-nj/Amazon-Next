import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../images/slider/sliderImg_4.jpg'
import slide2 from '../images/slider/sliderImg_2.jpg'
import slide3 from '../images/slider/sliderImg_3.jpg'
import Image from 'next/image';


const Banner = () => {
  return (
    <>
            <Carousel showThumbs={false} className='relative' autoPlay infiniteLoop showIndicators={false} showStatus={false}>
                <div>
                    <Image priority src={slide1} alt='img'/>

                </div>
                <div>
                <Image src={slide2} alt='img'/>

                </div>
                <div>
                <Image src={slide3} alt='img'/>

                </div>
            </Carousel>
            <div className='absolute -bottom-8 z-20 w-full h-40 bg-gradient-to-t from-gray-100 to-transparent'>

            </div>
    </>
  )
}

export default Banner
