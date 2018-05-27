import React, { Component } from 'react';
import './css/static.css';
import axios from 'axios';
import backupJSON from '../server/images.json';
const key = '9092363-a9707005820a8ad4bec1d245a';
const onLoadImage = '../public/img/onLoad.jpg'

class Static extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiHits: backupJSON.hits,
            apiQuantity: backupJSON.length,
            onLoadImage
    }
    
        
        // if( res.data.hits[0].id !== undefined){
        //     if(res.data.hits[0].id !== backupJSON.hits[0].id){
        //         this.State = {
        //             apiHits: res.data.hits,
        //             apiQuantity: res.data.hits.length
        //         }, () => console.log('images loded from api');
        //     }else console.log('working off stored images')
        // }else if(this.state.apiHits[0].id === backupJSON.hits[0].id){
        //     console.log('working off of stored api')
        // }else
        //     this.setState({
        //         apiHits: backupJSON.hits,
        //         apiQuantity: backupJSON.hits.length
        //     }, () => console.log('working off stored api'));
        
        console.log(this.state.apiHits)
    }
    
    checkImages = () => {
            if (this.state.apiHits[0] !== undefined || null){
                return this.state.apiHits[9].largeImageURL 
               // console.log('an api is loaded')
            }else console.log('loaded backup JSON');
                return backupJSON.hits[8].largeImageURL;
        }
            
    // componentDidMount = () => {
        // axios.get('https://pixabay.com/api/?key=9092363-a9707005820a8ad4bec1d245a&q=mountains&orientation=horizontal&category=nature&image_type=photo&editors_choice=true')
        // .then( res => {
        //     if( res.data.hits[0].id !== undefined){
        //         if(res.data.hits[0].id !== backupJSON.hits[0].id){
        //             this.setState({
        //                 apiHits: res.data.hits,
        //                 apiQuantity: res.data.hits.length
        //             }, () => console.log('images loded from api'));
        //         }else console.log('working off stored images')
        //     }else if(this.state.apiHits[0].id === backupJSON.hits[0].id){
        //         console.log('working off of stored api')
        //     }else
        //         this.setState({
        //             apiHits: backupJSON.hits,
        //             apiQuantity: backupJSON.hits.length
        //         }, () => console.log('working off stored api'));
        // });
    // }
    
    render(){
        
        return(
            <div className="static-cell">
                <div className="img-holder">
                    <img className="headshot" alt="Something is wrong..." src="./img/img.jpg" />
                </div>
                <img className="background-img" src={this.checkImages()} alt="Api down..." />
            
            </div>
                
        );
    }
}

export default Static;