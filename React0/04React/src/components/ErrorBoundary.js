import { Component } from "react";

export class ErrorBoundary extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            message:""
        }
    }

    componentDidCatch(error,info){
        console.error("Caught by EB",error,info)
    }

    render(){
        if(this.state.hasError){
            <div>
                <h2>Somethign is wrong here</h2>
                {this.state.message}
            </div>
        }
        return this.props.children;
    }
}