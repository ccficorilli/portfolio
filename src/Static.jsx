import React, { Component } from 'react';

class Static extends Component{
    constructor(props){

}



    render(){
        return(
            <div className="upper-cell">
                <div className="img-holder">
                    <img className="headshot" alt="Something is wrong..." src={headshot} />
                </div>
            </div>
                
        );
    }
}

export default Static;