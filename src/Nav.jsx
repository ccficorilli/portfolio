import React, { Component } from 'react';
//import closeImg from './img/close.png';
import './css/nav.css';
class Nav extends Component{
   constructor(props){
       super(props)
       this.state = ({
           nav: 'closed',
           visibility: ''
       })
   }
   openNav = () => {
    this.setState({
        nav: 'open',
        visibility: 'hidden'
        
    });
}
    closeNav = () => {
    this.setState({
        nav: 'closed',
        visibility: ''
        
    });
}
    
    
    render() {
        return(
            <div><span className= {`navbtn`}  
                    onClick={this.openNav}>&#9776;
                </span>
                <div className={`sidenav ${this.state.nav}`}>
                    <a className="closebtn" onClick={this.closeNav}>
                        <img className="closeImg" src='./img/close.png' alt="broken img" />
                    </a> 
                        <div className="nav-wrapper">                  
                            <a onClick={this.props.openResume}>Resume</a>
                            <a onClick={this.props.openProjects}>Projects</a>
                            <a onClick={this.props.openGame}>Quick Game</a>
                            <a href="/contact">Contact</a> 
                            <a href="/">Home</a>
                        </div>
                </div>
                
            </div>
        )
    }
}

export default Nav;