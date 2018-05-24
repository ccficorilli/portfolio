import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import headshot from './img/img.jpg';
import Static from './Static';
import Display from './Display';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           home: true,
           projects: false,
           resume: false,
           quote:'',
           movie:'',
           nav:'closed'
        }

    }
    openNav() {
        this.setState({
            nav: 'open'
        });
    }
    closeNav() {
        this.setState({
            nav: 'closed'
        });
    }
    openProjects() {
        this.setState({
            home: false,
            projects: true,
            resume: false,
            nav: 'closed'
        });
    }
    openResume() {
        this.setState({
            home: false,
            projects: false,
            resume: true,
            nav: 'closed'
        });
    }
    openGame() {
        this.setState({
            home: false,
            projects: false,
            resume: false,
            game: true,
            nav: 'closed'
        })
    }
    componentDidMount(){
//axios calls here to set state for game.
    }
    render() {
        return (
            <div className="container">
                <Nav 
                    openNav={() => this.openNav()}
                    closeNav={() => this.closeNav()}
                    nav={this.state.nav}
                    openResume={() => this.openResume()}
                    openProjects={() => this.openProjects()}
                    openGame={() => this.openGame()}
                />
                <Static />
                <Display />
            </div>
        )
    }
}
export default App;
