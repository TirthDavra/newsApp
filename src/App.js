import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import Business from './Components/Business'
import Entertainment from './Components/Entertainment'
import Health from './Components/Health'
import Sports from './Components/Sports'
import Technology from './Components/Technology'

import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pageSize = 5;

  return (
    <Router>
      <div>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={100}

        />
        <Routes>
          <Route Route path="/" element={<News />} key="general" pageSize={pageSize} country="in" category="general" ></Route>
          <Route Route path="/Business" element={<Business />} key="business" pageSize={pageSize} country="in" category="business" ></Route>
          <Route Route path="/Entertainment" element={<Entertainment />} key="entertainment" pageSize={pageSize} country="in" category="entertainment" ></Route>
          <Route Route path="/Health" element={<Health />} key="health" pageSize={pageSize} country="in" category="health" ></Route>
          <Route Route path="/Sports" element={<Sports />} key="sports" pageSize={pageSize} country="in" category="sports" ></Route>
          <Route Route path="/Technology" element={<Technology />} key="technology" pageSize={pageSize} country="in" category="technology" ></Route>

        </Routes>


      </div>
    </Router>

  )

}

export default App;

