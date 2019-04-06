import React from 'react'
import OtherVideos from './OtherVideos'
import Comments from './Comments'

class Video extends React.Component{
  render(){

    const testVideoUrl = "https://www.youtube.com/embed/xIqza5kdmdQ"

    return(
      <>
      <div>
      <iframe width="560" height="315" src={testVideoUrl}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>
      <div>Title with likes</div>
      <div>User who posted it</div>
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