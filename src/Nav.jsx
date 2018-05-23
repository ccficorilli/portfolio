import React, { Component } from 'react';
import homeImg from './img/home.png';
import closeImg from './img/close.png';
import './css/nav.css';
class Nav extends Component{
   
    
    render() {
        return(
            <div>
                <div className={`sidenav ${this.props.nav}`}>
                    <a className="closebtn" onClick={this.props.closeNav}>
                        <img className="closeImg" src={closeImg} alt="broken img" />
                    </a> 
                        <div className="nav-wrapper">                  
                            <a onClick={this.props.openResume}>Resume</a>
                            <a onClick={this.props.openProjects}>Projects</a>
                            <a onClick={this.props.openGame}>Quick Game</a>
                            <a href="/contact">Contact</a> 
                            <a href="/">Home</a>
                        </div>
                </div>
                <span className="navbtn" 
                    onClick={this.props.openNav}>&#9776;
                </span>
            </div>
        )
    }
}

export default Nav;