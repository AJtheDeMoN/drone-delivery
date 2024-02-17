import React, {useState} from 'react'

function GoogleMap({currLocation}) {
  
  return (
    currLocation?
    <div>
      <iframe
      width="450"
      height="500"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCImxrYF5jzvgEXKnyXZLZd6upHysIhlZg&q=${currLocation.lat},${currLocation.lng}`}
      allowFullScreen=""
      />
    </div>
    :<div>Location</div>
  )
}

export default GoogleMap
