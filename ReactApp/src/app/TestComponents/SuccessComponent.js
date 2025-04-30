import React, { PureComponent } from "react";
import SuccessChild from "./SuccessChildComponent";
import SuccessStory from "./SuccessStory";

export default class Success extends PureComponent {

    constructor(props){
        super();

        this.state = {
            quote1: "This is a quote",
            quote2: "I like pizza",
            quote3: "This is an assessment"
        }
    }
    render(){
        return(
            <>
                <h1>Success Component</h1>
                <h2>Quotes:</h2>  
                <h3>{this.state.quote1}</h3>
                <h3>{this.state.quote2}</h3>
                <h3>{this.state.quote3}</h3>
                <SuccessChild
                    name="Eric"
                    address="Somewhere"
                    SuccessStory={<SuccessStory />}
                />
            </>
        )
    }
}
