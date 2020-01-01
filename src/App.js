import React from 'react';

import HomePage from './views/homepage/HomePage';

import './App.styles.scss'; 

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
      </div>
    );
  }
}

export default App;