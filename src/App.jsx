import React from 'react'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {

  return (
    <>
     <Router>
        <Header/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/signin" element={<Signin/>}/>
        <Route path = "/signup" element={<Signup/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
