import BoardCard from './components/board-card';
import React from 'react';
import ReactDOM from 'react-dom'; 

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