import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header/>
      <Route exact path="/" component={Home}/>
      </HashRouter>
    </div>
  );
}

export default App;
