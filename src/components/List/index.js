import React from 'react';
import { 
  ListWrapper,
  ListItem,
  List
} from './style';
// import LazyLoad from "react-lazyload";
// import { withRouter } from 'react-router-dom';

function RecommendList(props) {
  // const enterDetail = (id) => {
  //   props.history.push(`/recommend/${id}`)
  // }

  const { list } = props
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {
          list.map(({id, image, count, name}) => {
            return (
              // <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
              <ListItem key={id}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  {/* <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}>
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  </LazyLoad> */}
                  <img src={image} width="100%" height="100%" alt="music"/>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{Math.floor(count/10000)}万</span>
                  </div>
                </div>
                <div className="desc">{name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  );
  }
 
// export default withRouter(React.memo(RecommendList));
export default React.memo(RecommendList)
