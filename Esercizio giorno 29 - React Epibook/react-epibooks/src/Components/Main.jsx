import React, { useState } from 'react'
import CommentArea from './CommentArea';
import BookGrid from './BookGrid';



export default function Main() {
    const [book, setBook] = useState(null);
  return (
    <>
        <div className='container-colonne'>
            {/* Colonna sinitra con la griglia dei libri */}
            <div className='colonna-sinistra'>
                <BookGrid onSelectBook = {setBook}/>
            </div>
            {/* Colonna destra con CommentArea */}
            <div className='colonna-destra'>
                <CommentArea onSelectBook = {book}/>
            </div>
        </div>
    </>
    
  )
}
