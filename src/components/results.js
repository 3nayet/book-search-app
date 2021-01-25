import React from 'react'
import parse from 'html-react-parser';

const Results = ({results}) => {
    return <ul className = "list-group mb-4">

    {results.map(result => (
        <li key = {result.id} className="list-group-item">
           <p className="truncate"> {parse(result.searchInfo.textSnippet)} </p>
        </li>
    ))}
    </ul>
}

export default  Results