import React from 'react'
import '../styles/productos.css'

const Productos= () =>{
    return(
        <section className="productos">
    <div className="Primero">
        <div className="unouno">
            <article>
                <figure>
                    <img src="./img/m4.png" />
                    <figcaption><strong>CACHORRO</strong></figcaption>
                </figure>
            </article>
        </div>
        <div className="unodos">
            <article>
                <figure>
                    <a href="JJG~SW1.html"><img src="./img/m4.png" /></a>
                    <figcaption><strong>ADULTO</strong></figcaption>
                </figure>
            </article>
        </div>
        <div className="unotres">
            <article>
                <figure>
                    <img src="./img/m4.png" />
                    <figcaption><strong>SENIOR</strong></figcaption>
                </figure>
            </article>
        </div>
    </div>
{/* --------------------------------------------------- */}
    <div className="Segunda">
            <div className="dosuno">
                <figure>
                    <img src="./img/m4.png" />
                    <figcaption><strong>CACHORRO RAZA PEQUEÑA</strong></figcaption>
                </figure>
            </div>

            <div className="dosdos">
                <figure>
                    <img src="./img/m4.png" />
                    <figcaption><strong>ADULTO RAZA PEQUEÑA</strong></figcaption>
                </figure>
            </div>

            <div className="dostres">
                <figure>
                    <a href="JJG~SW2.html"><img src="./img/m4.png" /></a>
                    <figcaption><strong>SENIOR RAZA PEQUEÑA</strong></figcaption>
                </figure>
            </div>
        </div>

    </section>
    );
}

export default Productos