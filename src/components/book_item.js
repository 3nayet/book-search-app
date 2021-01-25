import React from 'react';

function BookItem({book}){
  let volumeInfo = book.volumeInfo;
  let imageLinks = volumeInfo.imageLinks;

  return(
    <li className="book_index_item">
        
      {imageLinks ? <img src={imageLinks.thumbnail} className="book_cover" /> : null}
      <div className="book_info">

        <div className="book_data">
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <h2 className="book_title">{volumeInfo.title}</h2>
        </a>
          <h4 className="author">Author: {volumeInfo.authors ? book.volumeInfo.authors[0] : '' }</h4>
        </div>
        <div className="book_description_container">
          { volumeInfo.description ? <p className="truncate book_description">&quot;{volumeInfo.description}&quot;</p> : null }
        </div>


      </div>
     
    </li>
  );
}


export default BookItem;
