import React from "react"
import { Form } from 'semantic-ui-react'
import axios from "axios";

class Comments extends React.Component{
  state = { comment: '' }

  handleSubmit = e => {
    e.preventDefault()
    const comment = { ...this.state }
    const { id, video_id } = this.props
    if ( id && video_id) {
      axios.put(`api/videos/${video_id}/comments/${id}`, comment)
      .then( res => {
        this.props.history.push(`/videos/${video_id}/comments/${id}`)
      })
    } else {
      axios.post(`/api/videos/${video_id}/comments`, comment)
      .then(res => {
        this.props.history.push(`/videos/${video_id}`)
      })
    }
    
    
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

export default Comments