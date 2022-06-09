import { Component } from 'react';

class State extends Component{
    constructor(){
        super()
        this.state={
            name:"John"
        }
    }

    changeName(){
        this.setState({
            name:"Max"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.changeName()}>Update Name</button>
            </div>
        );
    }
}

export default State;