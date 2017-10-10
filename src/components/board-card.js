import React from 'react';
import PinsList from './pins-list';

class BoardCard extends React.Component {

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

        {this.repeat_images()} 
      </div>
    );
  }
}

export default BoardCard;