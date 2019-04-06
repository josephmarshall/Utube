import React from 'react'
import OtherVideos from './OtherVideos'
import Comments from './Comments'
import axios from 'axios';
import { AuthConsumer, } from "../providers/AuthProvider"
import { Icon, Card, Header, Button } from 'semantic-ui-react'

class Video extends React.Component{

  state = {video: {}, comments: []}

  componentDidMount(){
    axios.get(`/api/videos/${parseInt(this.props.match.params.id)}`)
      .then(res=> this.setState({video: res.data}))

      axios.get(`/api/videos/${parseInt(this.props.match.params.id)}/comments`)
      .then(res=> this.setState({comments: res.data}))      
    }

  likeArrow = () => {
    axios.put(`/api/videos/${parseInt(this.props.match.params.id)}`, {likes: this.state.video.likes + 1})
      .then(res => this.setState({video: {...this.state.video, likes: this.state.video.likes + 1}}))
  }

  dislikeArrow = () => {
    axios.put(`/api/videos/${parseInt(this.props.match.params.id)}`, {likes: this.state.video.likes - 1})
      .then(res => this.setState({video: {...this.state.video, likes: this.state.video.likes - 1}}))
  }

  addComment = (comment) => {
    this.setState({comments: [...this.state.comments, comment]})
  }
  render(){

const { email, } =this.props.auth.user
const { video, comments } = this.state

    return(
      <>
      <div>
      <iframe width="100%" height="500px" src={video.description}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>
      <Card style={{width:"1190px"}}>
        <Card.Content>
        <div style={{display: "flex",}}>
        <Card.Header as="h2">{video.title}</Card.Header>
        </div>
        <div style={{textAlign:"right"}}>
          <Header as="h3">Likes: {video.likes}</Header >
          <Icon size="large" name="up arrow" color="green" onClick={()=>this.likeArrow()}/>
          <Icon size="large" name="down arrow" color="red" onClick={()=>this.dislikeArrow()}/>
        </div>
        </Card.Content>
        <Card.Content extra>
          <Header>{email}</Header>
          <Button color="red" style={{marginLeft:"70em"}} >Add Friend</Button>
        </Card.Content>
        <Card.Content extra>
          <Header as="h4">{video.trailer} </Header>
        </Card.Content>
        </Card>
      <div>{video.user_id}</div>
      <div style={{display: "flex"}}>
        <div style={{width: "75%"}}>
          <Comments video_id={parseInt(this.state.video.id)} addComment={this.addComment} comments={comments} />
        </div>
        <div>
          <OtherVideos/>
        </div>
        </div>
      </>
    )
  }
}

const ConnectedVideo = (props) => (
  <AuthConsumer>
      {auth =>
          <Video {...props} auth={auth} />
      }
  </AuthConsumer>
)


export default ConnectedVideo