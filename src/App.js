
import './App.css'
import React, { useEffect, useState } from 'react'
import BookIndex from './components/book_index'
import Pagination from './components/pagination'
import MaxLimitDropDown from './components/maxLimitDropDown'
import { buildQuery ,fetchSearchBooks} from './utilities/backend_util'

function App () {
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage, setBooksPerPage] = useState(5)
  const [totalBooks, setTotalBooks] = useState(0)

  const indexOfFirstBook = (currentPage - 1) * booksPerPage
 

 useEffect(()=>{
   function handleChange(items , totalBooks){
    setResult(items)
    setTotalBooks(totalBooks)
   }
   fetchSearchBooks(buildQuery(book,indexOfFirstBook,booksPerPage),handleChange)
 },[book,currentPage,booksPerPage ])

  const paginate = data => setCurrentPage( data.selected + 1)

  const handleSearchTextChange = event => setBook(event.target.value)

  const changePageLimit = maxBooks => setBooksPerPage(maxBooks)

  return (
    <div className="container mt-4">

    <h1 className = "text-primary mb-3">Book App</h1>

      <div className = "search_input_container">
        <input onChange={handleSearchTextChange} type = "text" className="form-control mt-10" placeholder="Search for Books">
        </input>
      </div>


      <div id='main_container'>
        
      <div className="mt-4" id='results_container'>
      <BookIndex results={result} pageCount={currentPage}/>

      <MaxLimitDropDown reslutLength={result.length} changePageLimit={changePageLimit} />

      <Pagination booksPerPage={booksPerPage} totalBooks={totalBooks} paginate={paginate}/>
      </div>

      </div>
      
    </div>
  )
}

export default App
