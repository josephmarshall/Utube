import React from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  state = { videos: ''}
  
  componentDidMount() {
    axios.get(`api/video`)
      .then(res =>
        this.setState({ video: res.data }))
  }

  render() {
    return (
      <>
     <div >
        <Link >
            <div>
                <img src='https://greenglobaltravel.com/wp-content/uploads/Guanaco_Patagonia-edited.jpg'>
                </img>
            </div>
        </Link>
        Porsche GT2RS
     </div>
    
     </>
  )
}

}
export default Home;

