import React from 'react';
import axios from "axios";
import {Link, } from 'react-router-dom'

class OtherVideos extends React.Component {
  state = { videos: [] }
  
  
  
  componentDidMount() {
    axios.get(`/api/videos`)
      .then(res =>
        this.setState({ videos: res.data }))
  }

  render() {
    return (
      <>
        <div >
          {this.state.videos.map(v=> 
              <Link to={`/video/${v.id}`}>
                <div>
                  <img src={v.description}>
                  </img>
                </div>
                {v.title}
              </Link>)}
              other videos
          </div>
    
      </>
    )
  }
}

export default OtherVideos;


    

