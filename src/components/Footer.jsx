import React from 'react'
import '../Style/footer.css'

const Footer= () =>{
    return(
        <footer className="pie">
        <section className="un">
            {/* <!--****--> */}
            <article>
                <img src="./img/CROQUETAL LOGO.png" />
            </article>
            <article className="a">
                <a href="#"><p>Acerca de El Paisa</p></a>
                <a href="#"><p>Términos y condiciones</p></a>
                <a href="#"><p>Localiza tu tienda</p></a>
                <a href="#"><p>Contáctanos</p></a>
            </article>
        </section>
        <section className="do">
            {/* <!--****--> */}
            <article>
                <br/><br/><br/>
                <pre>Síguenos En</pre><br/>
                <div className="im1"><a href="https://www.whatsapp.com"><img src="./img/whatsapp.png" /></a><p>WhatsApp</p></div>
                <div className="im2"><a href="https://www.facebook.com"><img src="./img/face.png" /></a><p>Facebook</p></div>
                <div className="im3"><a href="https://www.instagram.com"><img src="./img/instagram.png" /></a><p>Instagram</p></div>
                
            </article>
        </section>
        <section className="tre">
            {/* <!--****--> */}
            <br/><br/><br/><br/><br/><br/><br/>
            <p>Contactanos</p>
            <article>
                <form action="LogIn.html" method="post">
                    <input type="text" className="texto"placeholder="Correo Elctrónico" /><br />
                    <input type="submit" className="boton" value="Enviar" />
                </form>
            </article>
        </section>
        <hr />
        <div className="fin">
            <cite>
                Todos los derechos reservados (@) 2021
                <br />Por Javier Ayala Ochoa y Julio Abraham Campos Ochoa
            </cite>
            <address>
                Desde el IT Jiquilpan
            </address>

        </div>
    </footer>
    );
}

export default Footer