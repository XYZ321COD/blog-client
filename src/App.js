import React, {Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import News from './components/News';
import Contact from './components/Contact';
import CustomNavbar from './components/NavBar/CustomNavbar';
import Posts from "./components/QueryComponents/AllPostsForCategory"
import Post from "./components/QueryComponents/Post"
class App extends  Component {
  render() {
    return (
        <Router>
          <div>
            <CustomNavbar/>
            <Route exact path="/" component={Home} />
            <Route path="/about/Aboutme" component={AboutMe} />
            <Route path="/about/Resume" component={Resume} />
            <Route path="/works" component={News} />
            <Route path="/contact" component={Contact}/>
            <Route path="/categories/:name" component={Posts}/>
            <Route path="/posts/:name" component ={Post}/>
          </div>
        </Router>
    )
  }
}

export default App;
