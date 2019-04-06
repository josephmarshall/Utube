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
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.videos.map(v=> 
            <div style={{margin: "20px", zIndex: "2", border: "solid black 1px", textAlign: "Center"}}> 
              <Link to={`/video/${v.id}`}>    
                <div style={{}}>
                  <iframe src={v.description} controls={0} style={{zIndex: "1"}} >
                  </iframe>
                </div>
                <div style={{fontSize: "2em", fontWeight: "bold", padding: "10px"}}>
                {v.title}
                </div>
              </Link>
              </div>)}
     </div>
    
     </>
  )
}

}
export default Home;

