import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import './Style1.css';
import './Style2.css';
import './Style3.css';
import './Style4.css';

function App() {

    return (
      <div className="App">

          <NavBar />
          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>
      </div>
    );
}

export default App;
