import React from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  state = { videos: [] }
  
  componentDidMount() {
    axios.get(`api/videos`)
      .then(res =>
        this.setState({ videos: res.data }))
  }

  render() {
    return (
      <>
        <div style={{display: "flex"}}>
          {this.state.videos.map(v=> 
            <div style={{margin: "20px"}}> 
              <Link to={`/video/${v.id}`}>    
                <div style={{width: "190px", height: "160px", border: "solid black 1px"}}>
                  <img src="https://www.youtube.com/watch?v=GRTS9yZJREk/maxresdefault.webp" />
                </div>
                {v.title}
              </Link>
              </div>)}
     </div>
    
     </>
  )
}

}
export default Home;

