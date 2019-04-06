import React from 'react'
import OtherVideos from './OtherVideos'
import Comments from './Comments'
import axios from 'axios';

class Video extends React.Component{

  state = {video: {}}

  componentDidMount(){
    axios.get(`/api/videos/${parseInt(this.props.match.params.id)}`)
      .then(res=> this.setState({video: res.data}))
  }

  render(){
const { video } = this.state

    return(
      <>
      <div>
      <iframe width="560" height="315" src={video.description}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>
      <div>{video.title}</div>
      <div>{video.user_id}</div>
      <div style={{display: "flex"}}>
        <div>
          <Comments />
        </div>
        <div>
          <OtherVideos />
        </div>
      </div>
      </>
    )
  }
}

export default Video