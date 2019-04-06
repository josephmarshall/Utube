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
        <h3>Other Videos</h3>
        {this.state.videos.map(v=> 
            <div style={{margin: "15px", zIndex: "5", border: "solid black 1px", textAlign: "Center"}}> 
              <Link to={`/video/${v.id}`}>    
                <div style={{}}>
                  <iframe src={v.description} frameborder="1" controls={0} style={{zIndex: "1"}} width="160px" height='90px'>
                  </iframe>
                </div>
                <div style={{fontSize: "1.2em", fontWeight: "bold", padding: "5px", align:"right"}}>
                {v.title}
                </div>
              </Link>
              </div>)}
          </div>
    
      </>
    )
  }
}

export default OtherVideos;


    

