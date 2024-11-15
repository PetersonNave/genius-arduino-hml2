import React from "react";

const CardWithImage = ({nome, caminho}: {nome:String, caminho:string}) => {
    return <div>
        <img src={caminho} alt="" />

        <h3> {nome} </h3>

    </div>
}

export default CardWithImage