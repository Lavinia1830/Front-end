import React, { Component } from 'react'
import {Card} from 'react-bootstrap';



export class SingleBook extends Component { 

    state = {
        selected: false
    }

  render() {
    return (
      <>
        <Card style={{ width: '250px', height:'100%' }} className={this.state.selected === true ? 'selectedBook' : ''}>
          <Card.Img 
                style={{ width: '100%', height:'350px' }}
                variant="top" 
                src={this.props.book.img} 
                onClick={() => this.setState((prevState) => ({selected: !prevState.selected}))} /> {/*portalo allo stato inverso se è true diventa false e viceversa */}
          <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
        
        
    )
  }
}

export default SingleBook

