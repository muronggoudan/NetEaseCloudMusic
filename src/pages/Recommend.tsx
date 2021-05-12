import React from 'react'
import Slider from '../components/Slider'

function Recommend(props) {

  const bannerList = new Array(10).fill(1).map(item => {
    return {
      image: 'http://p1.music.126.net/lm0mDdEmE3yjjP-M061gtA==/109951165969612978.jpg?imageView&quality=89'
    }
  })


  return (
    <div>
      <Slider list={bannerList}></Slider>
    </div>
  )
}

export default React.memo(Recommend)
