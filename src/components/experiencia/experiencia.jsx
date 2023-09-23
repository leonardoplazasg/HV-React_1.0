import React from "react";
// import "../experiencia/experiencia.css";

let nomEmpresa = "Nombre de empresa: ";
let funciones = "Funciones desempeñadas: ";

let Experiencia = () => {
    return (
        <div className="contenido-titulo" id="content">
            <h1 className="titulo1">Experiencia</h1>
            <div className="texto1">

                <h2>{nomEmpresa} ARUS</h2>
                <h3>{funciones}</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi maxime deleniti pariatur sit dolores accusamus! Nihil consectetur sequi at.</p>
                <h2>{nomEmpresa} Santini</h2>
                <h3>{funciones}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus excepturi officia temporibus sunt ullam dolorum itaque error, similique optio nihil officiis, reiciendis doloribus praesentium.</p>
                <h2>{nomEmpresa} TIGO-UNE</h2>
                <h3>{funciones}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus error ipsum explicabo magnam. Recusandae necessitatibus, voluptas illo suscipit odit esse? Eveniet molestiae rem amet dicta doloremque, eum sequi laudantium est!</p>
            </div>

        </div>
    )
}
export default Experiencia;