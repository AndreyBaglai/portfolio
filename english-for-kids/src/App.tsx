import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
