
var URI = require('urijs')
import axios from 'axios'

export const buildQuery = (searchTerm , startIndex, maxResults) => {
  let url = URI("https://www.googleapis.com/books/v1/volumes?");

  if (searchTerm.length > 0) {
    url.addSearch({q: searchTerm.split(' ').join('+')});
  }

    url.addSearch({startIndex: startIndex});

    url.addSearch({maxResults: maxResults});

  return URI.decodeQuery(url);
};

export const fetchSearchBooks = (query, handleChange) => (
  axios.get(query)
    .then(response => (
        handleChange(response.data.items,response.data.totalItems)
    ))
    .catch(err =>(
      console.log(err)
    ))
);
