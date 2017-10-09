import PinsList from './pins-list';
import React from 'react';
//import WithInfiniteScroll from './with-infinite-scroll';
//import compose from 'react-compose';

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
    <div className="card">

      <h1 className="pinterestHeader">Pinterest</h1>
      <p className="pinterestHeader">Powered with React</p>

      {this.repeat_images()} 
      
    </div>
    )
  }
}

export default BoardCard;