import React from 'react';

const Navbar = ({currentColor}) => {
  return (
    <div style={{'--color': currentColor}} className='navbar'>
      <h2>Welcome To The MBTA Tracker</h2>
    </div>
  )
}

export default Navbar;