import React from 'react';
import pins_formatted from '../pins_formatted.json';


export default function PinsList(props) {

  const pins = pins_formatted.map((pin, index) =>

  <div key={index}>
    <a className="image-link" href={"/pin/" + pin.id} >
      <img src={pin.images.orig.url} alt={pin.description} /> 
      <h1>Title</h1> 
    </a>
  </div>

  );

  return (
    <ul className="card">{pins}</ul>
  );
}

