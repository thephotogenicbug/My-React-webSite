import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">    
      <HashRouter>
        <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Blogs" component={Blogs}/>
      </HashRouter>
    </div>
  );
}

export default App;
