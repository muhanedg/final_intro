import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Main from "./components/Main";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";


const __Routes = () => (
    <Routes>
        <route exact path="/" component={Main} />
        <route exact path="/contact" component={Contact} />
        <route exact path="/thanks/:name" component={Thanks} />
    </Routes>
);

export default Routes;