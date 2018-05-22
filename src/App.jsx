import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Chris',
            lastName: 'Ficorilli'
        }
    }

    render() {
        return (
            <div>Hello, my name is {this.state.firstName} {this.state.lastName}</div>
        )
    }
}
export default App;
