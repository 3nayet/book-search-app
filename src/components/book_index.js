import React from 'react';

import BookItem from './book_item';

function BookIndex({results, pageCount}){

  if(pageCount == 0) {
    return <h2 id='no_result'>No Books were found</h2>;
  }

  return(
      <ul>
        {results.map(book => <BookItem key={book.id} book={book}/>)}
      </ul>
  );

}


export default BookIndex;
