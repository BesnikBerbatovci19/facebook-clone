import React from 'react'
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widged from './components/Widged/Widged';

const App =() => {
  return (
    <div className="app">
      <Header />

        <div className="app__body">
            <Sidebar />
            <Feed />
            <Widged />
        </div>
      
    </div>
  );
}

export default App;
