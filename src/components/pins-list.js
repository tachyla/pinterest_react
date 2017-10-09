import React from 'react';
import pins_formatted from '../pins_formatted.json';
import '../css/style.css';


class PinsList extends React.Component {
  
  render() {
    const pins = pins_formatted.map((pin, index) =>

    <li className="imageContainer" key={index}>
      <a className="image-link" href={"/pin/" + pin.id} >
        <img src={pin.images.orig.url} alt={pin.description} /> 
      </a>
    </li>

    );

    return (
      <ul className="card">{pins}</ul>
    );
  }
}

export default PinsList;
