import React from 'react';
import SearchWidget from './search-widget';
import pins_formatted from '../pins_formatted.json';
import '../css/style.css';

class PinsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  
  render() {
    const pins = pins_formatted.filter(pin => 
      pin.description.includes(this.state.searchTerm)
    )
    .map((pin, index) =>
      <li className="imageContainer" key={index}>
        <a className="image-link" href={"/pin/" + pin.id} >
          <img src={pin.images.orig.url} alt={pin.description} /> 
        </a>
      </li>
    );
    return (
      <div className="liveSearch">
        <SearchWidget onChange={searchTerm => this.setState({searchTerm})} />
        <ul className="pins-list">
          {pins}
        </ul>
      </div>
    );
  }
}

export default PinsList;
