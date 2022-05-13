import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import SubwayLines from './Components/SubwayLines.jsx';
import SubwayStops from './Components/SubwayStops.jsx';


function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <SubwayLines />
      <SubwayStops />
    </div>
  );
}

export default App;
