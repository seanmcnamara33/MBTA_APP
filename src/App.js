import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import SubwayLines from './Components/SubwayLines.jsx';
import SubwayStops from './Components/SubwayStops.jsx';
import {getAllData, getLineData} from './Helpers/Helpers.js';


const App = () => {
  const [currentColor, setCurrentColor] = useState('black');
  const [allRoutes, setAllRoutes] = useState([]);
  const [currentLineStops, setCurrentLineStops] = useState([]);

  useEffect(() => {
    getAllData()
    .then((result) => {
      setAllRoutes(result.data);
    })
  }, []);

  const onLineSelectChange = async (event) => {
    var {data} = await getLineData(event.target.value);
    setCurrentLineStops(data);
  }

  return (
    <div className='app-container'>
      <Navbar />
      <SubwayLines allRoutes={allRoutes} onLineSelectChange={onLineSelectChange}/>
      <SubwayStops currentLineStops={currentLineStops}/>
    </div>
  );
}

export default App;
