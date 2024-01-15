import React , { Component } from "react";
import Fantasy from "../books/fantasy.json" /*nome dell'import deve essere sempre con la lettera maiuscola */
import History from "../books/history.json"
import Horror from "../books/horror.json"
import Romance from "../books/romance.json"
import Scifi from "../books/scifi.json"
import BookList from "./BookList";
import {Row, Col, Form, Button} from 'react-bootstrap'

export default class BookGrid extends Component {

    state = { 
        books: [],
        searchQuery: '', //quello che scrive l'utente
        filterBooks: [] //array vuoto
    }

    componentDidMount(){
        /* this.setState({ books: { //oggetto books con tutte le categorie distinte li sto organizzando a monte già separarli
            ...this.state.books, ///spread operator
            fantasy:Fantasy,
            history:History,
            horror:Horror,
            romance:Romance,
            scifi:Scifi
        }}) */

        this.setState({ 
            books: [ ...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]//array books con tutte le categorie messe tutte insieme //destrutturazione= estrarre 
        })
    }

    getSearchQuery = () => {
        //alert(this.state.searchQuery) //quando scrivo cambia lo stato e quando clicco il bottone me lo stampa nell'alert
        let filter = this.state.books.filter(book => book.title.includes(this.state.searchQuery)) //prendere un singolo libro e filtrarlo //titolo di ogni libro deve includere quello che ho scritto nell'input
        //console.log(filrterBooks) //sto filtrando
        this.setState({filterBooks: filter})
    }

//AllTheBooks va a leggere il json, crea un json prendo lo stato e lo passa al booklist //AllTheBooks=prendeva lo stato //per ogni libro creava una card
    render(){
        //console.log(this.state.books) /*oggetto con le proprietà fantasy, history, horror,romance, scifi (gestire singolarmente) */
        //console.log(this.state.searchQuery)
        return(
            <>
                <Row className="my-3">
                    <Col lg={10}>
                        <Form.Control 
                            type="text" 
                            placeholder="Search Book Title..." 
                            onChange={(e) => this.setState({searchQuery: e.target.value})}
                        />
                    </Col>
                    <Col lg={2}>
                        <Button variant="secondary" onClick={this.getSearchQuery}>Search</Button>
                    </Col>
                        
                    
                </Row>
                <BookList books={this.state.filterBooks.length !==  0 ? this.state.filterBooks : this.state.books}/> {}
                <h3>Total books: {this.state.books.length}</h3>
            </>
        )
    }
}