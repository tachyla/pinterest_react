import BoardCard from './components/board-card';
import React from 'react';
import ReactDOM from 'react-dom'; 

import pins_formated from './pins_formatted.json';

 export default class App extends React.Component {
  render() {
    return (
      <div className="center">
        <BoardCard />
    	</div>)
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);