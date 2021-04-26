import React from 'react'

const Header= () =>{
    return(
        <header>
        {/* id="encabezado" */}
        <figure>
            <a href="./MiPaginaWeb.html"><img src="./img/LBSF.png" alt=""/></a>
        </figure>
        {/* <!--debe tener un seccion--> */}
        <div className="cab">
            <a href="./JJG~SW1.html"><p>Caballero</p></a>
        </div>
        <div className="juv">
            <a href="./JJG~SW2.html"><p>Juvenil</p></a>
        </div>
        <div className="ni">
            <a href="#"><p>Niño</p></a>
        </div>
        <div className="reg">
            <a href="./LogIn.html"><input type="button" className="botreg" value="Iniciar Sesión" /></a>
        </div>

    </header>
    );
}

export default Header