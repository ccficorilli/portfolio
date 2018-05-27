import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Static from './Static';
import Display from './Display';
//import './css/app.css'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           home: true,
           projects: false,
           resume: false,
           quote:'',
           movie:'',
           imageSRC:'',          
        }

    }
   
    openProjects = () => {
        this.setState({
            home: false,
            projects: true,
            resume: false,
            game: false
            });
    }
    openResume = () => {
        this.setState({
            home: false,
            projects: false,
            resume: true,
            game: false
            });
    }
    openGame = () => {
        this.setState({
            home: false,
            projects: false,
            resume: false,
            game: true,
           
            

        })
    }
    // componentDidMount(){
       
    // }
    render() {
        return (
            <div className="container">
                <Nav 
                    openResume={this.openResume}
                    openProjects={this.openProjects}
                    openGame={this.openGame}                   
                />
                <Static />
                <Display />
                
            </div>
        )
    }
}
export default App;
