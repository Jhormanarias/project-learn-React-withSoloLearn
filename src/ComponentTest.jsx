import React from "react";


export const ComponentTest = ()=>{

    let counter = 0;
    const counterFunc = ()=>{
        counter++;
        return counter;
    }

    const handleClick = ()=>{
        alert("Me presiono :( counter = "+ counterFunc());
    }

    return(
        <>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Hello World :)</button>
        
        </>
        
        
    )
    
}