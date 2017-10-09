import React from 'react';
import pins_formatted from '../pins_formatted.json';
import '../css/style.css';


class PinsList extends React.Component {
  
  render() {
    const { pinsList } = this.props;
    const pins = pins_formatted.map((pin, index) =>

    <div className="imageContainer" key={index}>
      <a className="image-link" href={"/pin/" + pin.id} >
        <img src={pin.images.orig.url} alt={pin.description} height="250px" width="250px"/> 
      </a>
    </div>

    );

    return (
      <ul className="card">{pins}</ul>
    );
  }
}

export default PinsList;
//2nd commit
