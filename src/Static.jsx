import React, { Component } from 'react';
//import './css/static.css';
import axios from 'axios';
//import headshot from './img/img.jpg';

class Static extends Component{
    constructor(props){
        super(props)
        this.state = {
            background: []
        }
    }

    componentDidMount(){
    //this is where the axios call will go for random nature pictures
    }

    render(){
        return(
            <div className="static-cell">
                <div className="img-holder">
                    <img className="headshot" alt="Something is wrong..." src="./img/img.jpg" />
                </div>
            </div>
                
        );
    }
}

export default Static;