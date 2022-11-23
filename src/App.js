import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </div>
  );
}

export default App;
