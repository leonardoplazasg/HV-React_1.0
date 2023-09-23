import React from "react";
// import "../referencias/referencias.css"

let Referencias = () => {
    return (
        <div className="contenido-titulo" id="content">
            <h1 className="titulo1">Referencias</h1>
            <div className="ref texto1">
                <section className="contenido-columna">
                    <h3>Jennifer Benavides</h3>
                    <p>Analista de sistemas</p>
                    <p>jven@mail.com</p>
                    <p>+57 300 212 1314</p>
                </section>
                <section className="contenido-columna">
                    <h3>Sandra Veléz</h3>
                    <p>Analista de implementación</p>
                    <p>svelezs@mail.com</p>
                    <p>+57 300 212 2520</p>
                </section>
                <section className="contenido-columna">
                    <h3>Ricardo Baena</h3>
                    <p>Coordinador de sistemas</p>
                    <p>rbaenas@mail.com</p>
                    <p>+57 300 212 2530</p>
                    
                </section>
            </div>
        </div>
    )
}

export default Referencias;