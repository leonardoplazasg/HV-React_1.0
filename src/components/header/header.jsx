import React from "react";
// import "../header/header.css";
import foto from "../../imagenes/doge_meme.png"

let Header = () => {
    return (
        <div className="header" id="content">
            <div className="App-header">
                <div>
                    <img src={foto} alt="foto" className="foto"/>
                </div>
                <div className="nombre">
                    <h1 className="nombreLP">Leonardo Plazas</h1>
                    <h2 className="profesion">Software Developer</h2>
                </div>
            </div>
        </div>
    )
};
export default Header;