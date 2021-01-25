import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({booksPerPage, totalBooks, paginate}) => {
  
    let pageCount = Math.ceil(totalBooks/booksPerPage)

    return (
        <div>
             

              { totalBooks < 1 ? null : <ReactPaginate
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={<a href="">...</a>}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={paginate}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"} />
                }
            </div>
    )
 
}

export default  Pagination