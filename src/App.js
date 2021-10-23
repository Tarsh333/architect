import React from 'react'
import Home from './Home'
import About from './About'
import './Home.css'
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import Contact from './Contact'
import Project from './Project'
const App = () => {
    return (
        <div>
            <Router>
            <Link to="/"><div className="title">Sthapna<br/> <span>Architects</span></div></Link>
            <div className="sidebar">
                <Link to="/about" className="about-link">About</Link>
                <Link to="/projects" className="projects-link">Projects</Link>
                <Link to="/contact" className="contact-link">Contact Us</Link>
            </div>
            <div className="social-icons">
               <Link to=""> <AiFillInstagram className="social-icon"/></Link>
               <Link to=""> <AiFillFacebook className="social-icon"/></Link>
               <Link to=""> <AiFillTwitterSquare className="social-icon"/></Link>
            </div>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/projects"><Project/></Route>
                {/* <Route exact path="*"><Error /></Route> */}
            </Switch>
        </Router>
        </div>
    )
}

export default App
