import React, { useEffect, useState} from 'react';
import {Redirect } from 'react-router';

import { Link, useNavigate,Route, Routes, Router } from "react-router-dom";

import Main from './components/Main';

import Contact from './components/Contact'; 

function App() {

  const history = useNavigate();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {
    
    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });


 /* const checkPath = () => {
    history.((location) => {
      setPath(location.pathname);
    });
  }*/


  useEffect(() => {
    console.log(React.version);
    //checkPath();
  }, []);


  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to="/contact">About Us</Link></li>)
  }
  let _graph;
  if(showContact !== "/graph"){
    _graph = (<li><Link to="/graph">Graph</Link></li>)
  }


  return (
    <div className="App">
     <div className="container">
        <nav>
          <ul>
            <li><Link to="/"> BitTelligence </Link></li>
          </ul>
          <ul>
            {_graph}
            <span class="vertical-line"></span>
            {_contact}
          </ul>
          
        </nav>
         
        <Routes>
        <Route  path="/"  element={<Main/>} /> 
        <Route path="/contact" element={<Contact/>} />
        </Routes>
       
     </div>
     
    </div>
  );
  
}


export default App;


// <Route path="/main" element={<Main/>} /> 