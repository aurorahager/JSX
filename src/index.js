// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
  return <div>Hello World!</div>;
};//END App component


// show  content on DOM
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);