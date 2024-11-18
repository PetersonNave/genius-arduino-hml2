import React from "react";
import Style from "./img.module.scss"

const CardWithImage = ({nome, caminho, link}: {nome:String, caminho:string, link:string}) => {
    return <div id={Style.students__container}>
        <img className={Style.students} src={caminho} alt="" />

        <div className={Style.students__description}>
            <h3> {nome} </h3>
            <a href={link} target='_blank'> 
                <i className="mdi mdi-github">
                </i>
            </a>
        </div>    
    </div>
}

export default CardWithImage