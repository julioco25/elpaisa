import React from 'react'
import '../styles/footer.css'

const Footer= () =>{
    return(
        <footer className="pie">
        <section className="un">
            {/* <!--****--> */}
            <article>
                <img src="./img/LA2SF.png" />
            </article>
            <article className="a">
                <a href="#"><p>Acerca de JJG</p></a>
                <a href="#"><p>Términos y condiciones</p></a>
                <a href="#"><p>Localiza tu tienda</p></a>
                <a href="#"><p>Contáctanos</p></a>
            </article>
        </section>
        <section className="do">
            {/* <!--****--> */}
            <article>
                <pre>Síguenos En</pre>
                <div className="im1"><a href="https://www.whatsapp.com"><img src="./img/whatsapp.png" /></a><p>WhatsApp</p></div>
                <div className="im2"><a href="https://www.facebook.com"><img src="./img/face.png" /></a><p>Facebook</p></div>
                <div className="im3"><a href="https://www.instagram.com"><img src="./img/instagram.png" /></a><p>Instagram</p></div>
                <div className="im4"><a href="https://www.google.com"><img src="./img/google.png" /></a><p>Google +</p></div>
                <div className="im5"><a href="https://www.youtube.com"><img src="./img/youtube.png" /></a><p>YouTube</p></div>
            </article>
        </section>
        <section className="tre">
            {/* <!--****--> */}
            <p>Se Parte De Nosotros</p>
            <article>
                <form action="LogIn.html" method="post">
                    <input type="text" className="texto"placeholder="Correo Elctrónico" /><br />
                    <input type="submit" className="boton" value="Unirse" />
                </form>
            </article>
        </section>
        <hr />
        <div className="fin">
            <cite>
                Todos los derechos reservados (@) 2020
                <br />Por Javier Ayala Ochoa
            </cite>
            <address>
                Desde el IT Jiquilpan
            </address>

        </div>
    </footer>
    );
}

export default Footer