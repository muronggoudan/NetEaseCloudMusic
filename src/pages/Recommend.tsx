import React from 'react'
import Slider from '../components/Slider'
import List from '../components/List'

function Recommend(props) {

  const bannerList = new Array(10).fill(1).map(item => {
    return {
      image: 'http://p1.music.126.net/lm0mDdEmE3yjjP-M061gtA==/109951165969612978.jpg?imageView&quality=89'
    }
  })

  const recommendList = new Array(10).fill(1).map(() => {
    return {
      id: 1,
      image: 'http://p1.music.126.net/lm0mDdEmE3yjjP-M061gtA==/109951165969612978.jpg?imageView&quality=89',
      count: 12345,
      name: '朴树，许巍，李健，郑钧，老狼，赵雷'
    }
  })

  return (
    <div>
      <Slider list={bannerList}></Slider>
      <List list={recommendList}></List>
    </div>
  )
}

export default React.memo(Recommend)
