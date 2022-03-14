import React from "react";



export const TextBoxName = () => {

    const TextBox = () => {

        return <input type="text" className="form-control" placeholder="Escribe tu nombre..." aria-label="Recipient's username" aria-describedby="button-addon2" />
    }

    const ButtonName = () => {
        return <button className="btn btn-primary" type="button" id="button-addon2">Ver</button>
    }



    return (
        <div className="row mt-3">
            <div className="input-group mb-3 col-md-6">
                <TextBox />
                <ButtonName />
            </div>
        </div>

    )
}