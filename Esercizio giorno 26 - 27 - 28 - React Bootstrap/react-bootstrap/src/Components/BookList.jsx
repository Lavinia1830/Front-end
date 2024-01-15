import React from 'react'
import {Row, Col} from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function BookList({books}) { //prendo un array di libri
  return (
    <Row>
        {books.map( (book, index) => (//generare una card //da un map possiamo prendere l'indice dell'array
            <Col key={index}> {/*la key è un numero univoco come id o l'indice dell'array */}
                {/*per ogni singolo book deve creare una card */}
                <SingleBook book={ book }  />
            </Col>
        ))}{/*{}=interpretare del codice */}
    </Row>
  )
}
