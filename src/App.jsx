import React from 'react';
import Header from './HeaderFolder/Header';
import './App.css';
import 'typeface-roboto';
import Body from './body/Body';


const App = () => {
  return (
    <div>
      <Header />
        <Body />
        <Body />
        <Body />
      </div>
  );
};

export default App;
