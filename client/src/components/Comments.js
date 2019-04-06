import React from "react"
import { Form } from 'semantic-ui-react'
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";

class Comments extends React.Component{
  state = { comment: '' }

  handleSubmit = e => {
    e.preventDefault()
    const u_id = this.props.auth.user.id
    const  video_id   = this.props.video_id
    const comment = {...this.state, user_id: u_id, video_id: video_id }
  
      axios.post(`/api/videos/${video_id}/comments`, comment)
      .then(res => {
        this.props.history.push(`/videos/${video_id}`)
      })
    
    
    } 
    
    
    
  

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }


  render() {
    const  { comment } = this.state
    return(
      <div>
        <Form onSubmit={this.handleSubmit} style={{ position: 'relative', width: '20em',}}>
          <Form.Input
            lable="Comment"
            name='comment'
            placeholder='comment'
            value={comment}
            onChange={this.handleChange}
            required
          />
          <Form.Button color='blue' onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

const ConnectedComments = (props) => (
  <AuthConsumer>
   {auth =>
    <Comments {...props} auth={auth }/>
   }
  </AuthConsumer>
)

export default ConnectedComments