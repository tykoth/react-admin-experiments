import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  // fetchUtils,
} from 'react-admin';
import alasql from 'alasql';


/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */

export default (databaseName, databaseVersion, databaseStores) => {

  // const db = new alasql(databaseName);
  // // db.delete();
  // db.version(databaseVersion).stores(databaseStores);

  return (type, resource, params) => new Promise((resolve, reject) => {
 
    // db.open();
    
    switch (type) {


      case DELETE:

        break;


      case GET_ONE:
        


        break;

      case CREATE:

      
        // db.table(this.tableName)
        break;


      case UPDATE:
        
        break;

      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
        

        break;



      default:

        break;
    }

  })
}
