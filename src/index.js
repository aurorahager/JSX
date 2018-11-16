/* REACT 1:
mini static React app to get the basics of JSX down.
*/

// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
  const buttonText = 'Click Me!';
  return (
    <div>
      <label htmlFor="name" className="label">
        {' '}
        Enter name:{' '}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {' '}
        {buttonText}{' '}
      </button>
    </div>
  );//END return
}; //END App component

// show  content on DOM
ReactDOM.render(<App />, document.querySelector('#root'));
