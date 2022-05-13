import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import SubwayLines from './Components/SubwayLines.jsx';
import SubwayStops from './Components/SubwayStops.jsx';
import {getAllData} from './Helpers/Helpers.js';


const App = () => {
  const [allRoutes, setAllRoutes] = useState([]);
  const [currentLineStops, setCurrentLineStops] = useState([]);

  useEffect(() => {
    getAllData()
    .then((result) => {
      setAllRoutes(result.data);
    })
  }, []);

  return (
    <div className='app-container'>
      <Navbar />
      <SubwayLines />
      <SubwayStops />
    </div>
  );
}

export default App;
