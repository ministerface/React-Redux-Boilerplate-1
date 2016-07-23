import React from 'react';
import Header from './Layout/Header';
import SideBar from './Layout/SideBar';
import Main from './Layout/Main';

require('../../scss/main.scss');

const App = () => (
    <div>
      <Header />
      <SideBar />
      <Main />
    </div>
);

export default App;
