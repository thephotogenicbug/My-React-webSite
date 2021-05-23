import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/portfolio';
function App() {
  return (
    <div className="App">    
      <HashRouter>
        <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blogs" component={Blogs}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      </HashRouter>
    </div>
  );
}

export default App;
