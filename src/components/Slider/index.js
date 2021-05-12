import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination
} from 'swiper/core';

import { SliderContainer } from './style'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);


function Slider(props) {

  const { list } = props

  return (
    <SliderContainer>
      <Swiper
        pagination
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        {
          list.map(({image}) => {
            return (
              <SwiperSlide>
                <img src={image} width="100%" height="100%" /> 
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </SliderContainer>
  )
}

export default React.memo(Slider)
