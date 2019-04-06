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
    const {deleteComment, editComment} = this.props
    const  { body } = this.state
    const user_id = this.props.auth.user.id
    return(
      <div>
        <Form onSubmit={this.handleSubmit} style={{ position: 'relative', width: '20em',}}>
          <Form.Input
            lable="Comment"
            name='body'
            placeholder='Comment'
            value={body}
            onChange={this.handleChange}
            />
          <Form.Button color='blue' onClick={this.handleSubmit}>Submit</Form.Button>
            </Form>
          {this.props.comments.map(c=><Card style={{ height: '4em'}}>{c.body}{c.user_id === user_id && 

          <div><Button onClick={()=>editComment(c.id)}>edit</Button><Button onClick={(
          )=>deleteComment(c.id)
          }>delete</Button></div>}
          
          </Card>)}

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