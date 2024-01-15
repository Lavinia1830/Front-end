/* import React from 'react' */
import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import CommentArea from './CommentArea';


/* export default function SingleBook({book}) { //gli passo un libro tramite props
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img}/>
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
        </Card.Body>
    </Card>
  )
} */




export class SingleBook extends Component { 

    state = {
        selected: false
    }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} className={this.state.selected === true ? 'selectedBook' : ''}>
          <Card.Img 
              variant="top" 
              src={this.props.book.img} 
              onClick={() => this.setState((prevState) => ({selected: !prevState.selected}))} /> {/*portalo allo stato inverso se è true diventa false e viceversa */}
          <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin}/>}
      
      </>
        
        
    )
  }
}

export default SingleBook