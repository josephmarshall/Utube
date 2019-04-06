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
        <div >
          {this.state.videos.map(v=> 
              <Link to={`/video/${v.id}`}>
                <div>
                  <img src={v.description}>
                  </img>
                </div>
                {v.title}
              </Link>)}
        Porsche GT2RS
     </div>
    
     </>
  )
}

}
export default Home;

