import React from 'react'
import OtherVideos from './OtherVideos'
import Comments from './Comments'
import axios from 'axios';
import { Icon } from 'semantic-ui-react'

class Video extends React.Component{

  state = {video: {}}

  componentDidMount(){
    axios.get(`/api/videos/${parseInt(this.props.match.params.id)}`)
      .then(res=> this.setState({video: res.data}))
  }

  likeArrow = () => {
    axios.put(`/api/videos/${parseInt(this.props.match.params.id)}`, {likes: this.state.video.likes + 1})
      .then(res => this.setState({video: {...this.state.video, likes: this.state.video.likes + 1}}))
  }

  dislikeArrow = () => {
    axios.put(`/api/videos/${parseInt(this.props.match.params.id)}`, {likes: this.state.video.likes - 1})
      .then(res => this.setState({video: {...this.state.video, likes: this.state.video.likes - 1}}))
  }

  render(){
const { video } = this.state

    return(
      <>
      <div>
      <iframe width="100%" height="500px" src={video.description}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>
      <div style={{display: "flex", justifyContent:"space-between"}}>
        <div>{video.title}</div>
        <div style={{display: "flex"}}>
          <Icon name="up arrow" color="green" onClick={()=>this.likeArrow()}/>
          <Icon name="down arrow" color="red" onClick={()=>this.dislikeArrow()}/>
          <div>Likes: {video.likes}</div>
        </div>
      </div>
      <div>{video.user_id}</div>
      <div style={{display: "flex"}}>
        <div style={{width: "75%"}}>
          <Comments />
        </div>
        <div>
          <OtherVideos/>
        </div>
      </div>
      </>
    )
  }
}

export default Video