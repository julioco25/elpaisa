import React from 'react'

const Header= () =>{
    return(
        <header>
        {/* id="encabezado" */}
        <figure className="logo">
            <a href="./MiPaginaWeb.html"><img src="./img/CROQUETAL LOGO.png" alt=""/></a>
        </figure>
        {/* <!--debe tener un seccion--> */}
        <div className="cab">
            <a href="./JJG~SW1.html"><p>Categorias</p></a>
        </div>
        <div className="juv">
            <a href="./JJG~SW2.html"><p>Contactanos</p></a>
        </div>
        <div className="ni">
            <a href="#"><p>Acerca de</p></a>
        </div>
        <div className="reg">
            <a href="./LogIn.html"><input type="button" className="botreg" value="Iniciar Sesión" /></a>
        </div>

    </header>
    );
}

export default Header