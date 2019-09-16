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
      console.log([type, resource, params]);
    
    switch (type) {


      case DELETE:
      case GET_ONE:
      case CREATE:
      case UPDATE:
        
        resolve({data:[]});
        break;

      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
        
        resolve({data:[]});
        break;



      default:

        break;
    }

  })
}

