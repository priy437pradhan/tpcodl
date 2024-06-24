import React from 'react';
import Header from './HeaderFolder/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'typeface-roboto';
import Body from './body/Body';
import SlideLeftMenu from './body/LeftMenu';
import SlideRightMenu from './body/RightMenu';

const App = () => {
  return (
      <div>
        <Header/>
        <Body />
        <SlideLeftMenu />
      <SlideRightMenu />
      </div>
  );
};

export default App;
