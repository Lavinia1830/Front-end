import { Component } from 'react'
import {Form, Button} from 'react-bootstrap';


export default class AddComment extends Component {
    state = {
        comment: {
            comment: '',
            rete: 0,
            elementId: this.props.asin
        }
    }

    sendComment = () => {
        fetch('https://striveschool-api.herokuapp.com/api/comments',
        {
            method: 'POST',
            body: JSON.stringify(this.state.comment),
            headers: {
                'Content-type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkN2FiMWU2Mjg4NjAwMTg4M2Y3MDUiLCJpYXQiOjE3MDQ5MDQ5NzQsImV4cCI6MTcwNjExNDU3NH0.wJfEN2qGAryZorQFht8G76CAj4-Z-OYAGfWhJrdEo6U",
            },
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(err))
    }       
    render() {
        return (
        <Form onSubmit={this.sendComment}>
            <Form.Group className="mb-3">
                <Form.Label>Comment text</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder='Add comment here'
                    value={this.state.comment.comment}
                    onChange={
                        (e) => this.setState({comment: {
                            ...this.state.comment,
                            comment: e.target.value,
                        },})
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control 
                    as="select"
                    value={this.state.comment.rate}
                    onChange={(e) =>
                    this.setState({
                        comment: {
                        ...this.state.comment,
                        rate: e.target.value,
                        },
                    })
                    }
                >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        )
    }
}


