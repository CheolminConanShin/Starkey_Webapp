import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom";
import ResponsiveHeader from './components/ResponsiveHeader/'
import Home from './components/Home'
import EventPage from './components/Event'
import AboutPage from './components/Home/About'
import LocationPage from './components/Home/Location'

const Index = (
  <div>
    <ResponsiveHeader/>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/event" component={EventPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/location" component={LocationPage}/>
      </div>
    </Router>
  </div>
)

export default Index
