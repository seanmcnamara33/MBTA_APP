import React from 'react';

const SubwayStops = ({currentLineStops}) => {
  return (
    <div className='current-line-stops-container' >
    {currentLineStops.map((stop) => {
      return (
        <div key={stop.attributes.name} className='current-line-stop-container'>
          <div className='current-line-stop'><b>Name:</b> {stop.attributes.name}</div>
          <div className='current-line-address'><b>Address:</b> {stop.attributes.address}</div>
        </div>
      )
    })}
  </div>
  );
}

export default SubwayStops;