import React from 'react';
import PinsList from './pins-list';
import SearchWidget from './search-widget';
import LogoWidget from './logo-widget';
import HomeWidget from './home-widget';

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
      <div className="boardCard">
        <h1 className="pinterestHeader">Pinterest </h1>
        <p className="pinterestHeader">Powered with React</p>
        <p className="pinterestHeader">Designed By TaChyla Murray</p>
        <div className="widgetContainer">
          <LogoWidget />
          <SearchWidget onChange={searchTerm => this.setState({searchTerm})} />
          <HomeWidget />
        </div>
        {this.repeat_images()} 
      </div>
    );
  }
}

export default PinsList;