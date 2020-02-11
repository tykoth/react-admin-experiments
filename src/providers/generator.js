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
import alasql from 'alasql'
const API_URL = 'http://localhost:30875';
const API_EXTENSION = 'json';



/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */

export default (API_URL, API_KEY) => {

  const db = new alasql.Database();

  return (type, resource, params) => new Promise((resolve, reject) => {
      console.log([type, resource, params]);
      db.exec(`CREATE TABLE IF NOT EXISTS ${resource}`);
      // alasql(`CREATE TABLE IF NOT EXISTS ${resource} (id int(11) NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))`, [], function(res) {alert(res);});  
      db.exec(`INSERT INTO ${resource} VALUES ?`,[{id:null, name:"ok", created:Date.now()}], function(res){
        // alert("inserts");
        // console.log(res);
      });
    switch (type) {


      case DELETE:
      case GET_ONE:
      case CREATE:
        
        var execution = db.exec(`INSERT INTO ${resource} VALUES ?`, params.data, function(res){
          alert(res);
        })

        console.log(execution);
        // console.log([]);
        resolve(params);
        break;
          // alasql('INSERT INTO Cities VALUES ?',[{City:'Berlin', Population:4300000}]);
          // alasql('INSERT INTO Cities VALUES {City:"Paris",Population:5000000}');
      case UPDATE:
        
        resolve({data:[]});
        break;

      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
           db.exec(`SELECT * FROM ${resource}`, [], function(res){
            //  console.log(res);
            resolve({data:res, total:res.length});
          });
          // .then(function(res){
          //     // Process data
          //     console.log(res);
          //           
          // }).catch(function(err){
          //     // Process errors
          // });
        
        break;



      default:

        break;
    }

  })
}

