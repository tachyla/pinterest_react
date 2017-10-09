import PinsList from './pins-list';
import React from 'react';

class BoardCard extends React.Component {
  
  render() {
    return (
    <div className="card">
      <h1>Pinterest</h1>
      <p>Powered with React</p>
      <PinsList />
    </div>)
  }

};

export default BoardCard;