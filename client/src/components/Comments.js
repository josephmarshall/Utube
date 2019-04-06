import React from "react"
import { Form, Card, Button } from 'semantic-ui-react'
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";

class Comments extends React.Component{
  state = { body: '' }

  handleSubmit = e => {
    e.preventDefault()
    const u_id = this.props.auth.user.id
    const  video_id   = parseInt(this.props.video_id)
    const comment = { body: this.state.body, user_id: u_id, video_id: video_id }
      axios.post(`/api/videos/${video_id}/comments`, comment)
      .then(res => this.props.addComment(res.data)
      )
      this.setState({body: ""})
    } 

  handleChange = (e) => {
    this.setState({ body: e.target.value })
  }


  render() {
    const  { body } = this.state
    return(
      <div>
        <Form onSubmit={this.handleSubmit} style={{ position: 'relative', width: '20em',}}>
          <Form.Input
            lable="Comment"
            name='body'
            placeholder='Comment'
            value={body}
            onChange={this.handleChange}
            required
          />
          <Form.Button color='blue' onClick={this.handleSubmit}>Submit</Form.Button>
          
              {this.props.comments.map(c=>
              <Card style={{ height: '4em'}}>
              {c.body}

              </Card>)}
           
           
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