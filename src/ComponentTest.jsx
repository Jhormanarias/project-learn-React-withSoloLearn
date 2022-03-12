import React from "react";


export const ComponentTest = ()=>{

    let counter = 0;
    const counterFunc = ()=>{
        counter++;
        const el = <p>{counter}</p>;
    }

    const handleClick = ()=>{
        alert("Me presiono :(");
    }

    return(
        <>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Hello World :)</button>
        {console.log(setInterval(counterFunc,5000))}
        </>
        
        
    )
    
}