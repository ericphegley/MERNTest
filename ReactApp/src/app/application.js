import React, {Component} from "react";
import "./app.css";

import Success from "./TestComponents/SuccessComponent.js";

export default class ApplicationComponent extends Component {

    render(){
        
        return(
            <div className="App">
                <Success />
            </div>
        )
    }
}
