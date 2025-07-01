import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FilterAction} from "./Gallery/Filter";
import {Gui} from "./Gallery/Elements";
import {gallerydata} from "./Gallery/gallery-data";

function App() {
  return (
    <div className="container mt-5">
        <h1>Filterable iGEM SVG library</h1>
        <br/>
      <div className="row align-items-center">
        <div className="col">
            <FilterAction/>
          <div id="nono" className="noshow">
            This combination returns no instances.
          </div>
         <div className="row">
             <Gui liste={gallerydata}></Gui>
         </div>
        </div>
      </div>
      <div className="row">
    </div>
    </div>
  );
}


export default App;
