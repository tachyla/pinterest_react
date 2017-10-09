import React from 'react';
import PinsList from './pins-list';
import SearchWidget from './search-widget';

class BoardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  
  repeat_images() {
    let repeatedArray = [];
    for(let i = 0; i < 20; i++) {
      repeatedArray.push(<PinsList/>);
    } 
    return repeatedArray;
  }

  render() {
    
    return (
      <div className="card">

        <h1 className="pinterestHeader">Pinterest </h1>
        <p className="pinterestHeader">Powered with React</p>
        <p className="pinterestHeader">Designed By TaChyla Murray</p>

        <div className="widgetbox">
          <SearchWidget onChange={searchTerm => this.setState({searchTerm})} />
        </div>

        {this.repeat_images()} 
        
      </div>
    );
  }
}

export default BoardCard;