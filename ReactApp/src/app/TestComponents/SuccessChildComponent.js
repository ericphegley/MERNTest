
import React from "react"; 

let SuccessChild = (props)=>{
    let name = props.name;
    let address = props.address;

    return(
        <div>
        <h2>Success Child Component</h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>

        {props.SuccessStory}
      </div>
    )
}

export default SuccessChild;