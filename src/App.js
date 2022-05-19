import React, { useEffect, useState} from 'react';

import { Link, useNavigate,Route, Routes } from "react-router-dom";

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


  return (
    <div className="App">
     <div className="container">
        <nav>
          <ul>
            <li><Link to="/main"> BitTelligence </Link></li>
          </ul>
          <ul>
            {_contact}
          </ul>
        </nav>
        <Routes>
        <Route path="/main" element={<Main/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
     </div>
    </div>
  );
}

export default App;