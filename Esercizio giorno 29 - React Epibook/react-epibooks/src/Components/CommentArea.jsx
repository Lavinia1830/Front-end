import { Component } from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

export default class CommentArea extends Component {
  state = {
    comments: []
  }

  componentDidMount = async () => {
    try{
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/books/comments/'+ 
          this.props.asin,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkN2FiMWU2Mjg4NjAwMTg4M2Y3MDUiLCJpYXQiOjE3MDQ5MDQ5NzQsImV4cCI6MTcwNjExNDU3NH0.wJfEN2qGAryZorQFht8G76CAj4-Z-OYAGfWhJrdEo6U",
          },
        }
      )
      console.log(response)
      if(response.ok){
        let comments = await response.json()
        this.setState({comments: comments})
      }
    }catch(err){
      console.log(err)
    }
  }


  render() {
    return (
      <>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      
      </>
    )
  }
}

