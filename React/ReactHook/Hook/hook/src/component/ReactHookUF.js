import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';

export default function ReactHookUF() {
    const [state, setState] = useState([]);
    const fetchData = () => {
      axios.get().then( res => setState( res.data ))  
    }
    
    useEffect( () => {
      fetchData()
    }, [])
    useEffect( () => {
     
    },[state])
 
    return (
        <div>
            <h1>React page</h1>
            <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            {state.map( el => {
              return (
                <tr>
                  <td>{el.userId}</td>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                </tr>
              )
            })}
            </table>
        </div>
    )
}
