import React from 'react';

const SubwayLines = ({allRoutes, onLineSelectChange}) => {
  return (
    <div className='line-select'>
    <h2 className='section-title'>Choose Your Line</h2>
    <select name='lines' id='lines' onChange={(event) => onLineSelectChange(event)}>
      {allRoutes.map((line) => {
        return <option value={line.id} key={line.id}>ID: {line.id}, NAME: {line.attributes.long_name}</option>
      })}
    </select>
  </div>
  );
}

export default SubwayLines;