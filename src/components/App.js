import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div class="p-3 mb-2 bg-dark text-white">
      <div class="container-fluid">
          <h2>Come solve the mystery of the Ghost of Greenwich and free Allison from her haunting! </h2> 
          <Routes>
            <Route path="/" element={<Home />}/>

          </Routes>
      </div>
     
    </div>
  );
}

export default App;
