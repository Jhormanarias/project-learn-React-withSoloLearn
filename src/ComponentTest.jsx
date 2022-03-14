import React from "react";


export const ComponentTest = () => {
    let counter = 0;
    const BtnCounterMas = () => {
        
        const counterFuncMas = () => {
            counter++;
            return counter;
        }

        const handleClick = () => {
            alert("Me presiono :( counter = " + counterFuncMas());
        }

        return <button type="button" className="btn btn-primary m-3" onClick={handleClick}>Contador +</button>
        
    }

    const BtnCounterMenos = () => {
        const counterFuncMenos = () => {
            counter--;
            return counter;
        }

        const handleClick = () => {
            alert("Me presiono :( counter = " + counterFuncMenos());
        }

        return <button type="button" className="btn btn-primary m-3" onClick={handleClick}>Contador -</button>
        
    }

    return(
        <div className="btn-group" role="group">
        <BtnCounterMas />
        <BtnCounterMenos />
        </div>
    )

}