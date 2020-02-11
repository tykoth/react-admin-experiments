// in src/dataProvider
import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';

const API_URL = 'http://localhost:30875';
const API_EXTENSION = 'json';



/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */

export default (API_URL, API_KEY) => {

  return (type, resource, params) => new Promise((resolve, reject) => {
      
    
    switch (type) {


      case DELETE:

        break;


      case GET_ONE:
          
        break;

      case CREATE:
          
        break;


      case UPDATE:
          
        break;

      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
        
            let url = `${API_URL}/${resource}.json`;
            
            return fetch(url)
                .then(res => res.json())
                // .then(response => console.log(response));
                .then(response => {
                    resolve({data:response.projects})
                });
        break;



      default:

        break;
    }

  })
}

