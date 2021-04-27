import React from 'react'
import '../Style/productos.css'

const Productos= () =>{
    return(
        <section className="productos">
            <br/>
            <p>Categorias Principales</p>
    <div className="Primero">
        <div className="unouno">
            <article>
                <figure>
                    <img src="./img/perroncachorro.jpg" />
                    <figcaption><strong>Cachorro</strong></figcaption>
                </figure>
            </article>
        </div>
        <div className="unodos">
            <article>
                <figure>
                    <a href="JJG~SW1.html"><img src="./img/gatina.jpg" /></a>
                    <figcaption><strong>Gatos</strong></figcaption>
                </figure>
            </article>
        </div>
        <div className="unotres">
            <article>
                <figure>
                    <img src="./img/canpro25.jpg" />
                    <figcaption><strong>Adultos</strong></figcaption>
                </figure>
            </article>
        </div>
    </div>
{/* --------------------------------------------------- */}
     <p>Productos Destacados</p>
     <br/>
     <div className="Segunda">
        <br/>
        
       
            <div className="dosuno">
                <figure>
                    <img src="./img/perronadulto.jpg" />
                    <figcaption><strong>PerrOn Adulto</strong><br/>
                    <del>$201</del><e>189</e>
                    </figcaption>
                </figure>
            </div>

            <div className="dosdos">
                <figure>
                    <img src="./img/fiduspro.jpg" />
                    <figcaption><strong>Fidus Pro Adultos</strong><br/>
                    <del>$201</del><e>189</e>
                    </figcaption>
                </figure>
            </div>

            <div className="dostres">
                <figure>
                    <a href="JJG~SW2.html"><img src="./img/campidog.webp" /></a>
                    <figcaption><strong>Campidog Adultos</strong><br/>
                    <del>$201</del><e>189</e>
                    </figcaption>
                </figure>
                
            </div>
        </div>
<br/><br/>
    </section>
    );
}

export default Productos