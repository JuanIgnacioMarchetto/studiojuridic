import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='Maincontainer'>
          <div className='Mainhead'>
            <h1>JG & Asociados</h1>
            <nav>
              <ul>
                <li><a href="#inicio">INICIO</a></li>
                <li><a href="#quienes-somos">QUIÉNES SOMOS</a></li>
                <li><a href="#areas-practica">ÁREAS DE PRÁCTICA</a></li>
                <li><a href="#contacto">CONTÁCTENOS</a></li>
              </ul>
            </nav>
          </div>

          <main>
            <section id="inicio">
              <h2>INICIO</h2>
              {/*  -- Contenido de la sección de inicio  */}
            </section>

            <section id="quienes-somos">
              <h2>QUIÉNES SOMOS</h2>
              <p>JG & Asociados es una firma especializada en la asesoría y servicios de representación en materia legal y jurídica. Somos un estudio comprometido profesional y humanamente con el servicio satisfactorio a los clientes. Nos enfocamos en asesorar jurídicamente a empresas y particulares. Contamos con profesionales especializados en cada una de las áreas. Damos pronta solución a sus requerimientos. Realizamos seguimiento personalizado a cada caso. Ofrecemos información al cliente para que conozca los pasos de su situación.</p>
            </section>

            <section id="areas-practica">
              <h2>ÁREAS DE PRÁCTICA</h2>
              <br></br>
              <a>DERECHO PENAL</a>
              <br></br>
              <a> DERECHO DE
              FAMILIA</a>
              <br></br>
             <a>DERECHO CIVIL</a> 
             <br></br>
              <a>DEFENSA DEL
              DERECHO DE LOS
              CONSUMIDORES</a>
              <br></br>
              <a>PERSONAL
              POLICIAL Y
              PENITENCIARIO</a>
              <br></br>
              <h3>POR QUÉ ELEGIRNOS</h3>
             <p> Nuestro compromiso principal es brindar servicios legales de excelencia a nuestros clientes. Para lograrlo, nos apoyamos en un equipo de abogados talentosos, creativos, experimentados y calificados en diversas áreas de práctica, que comparten nuestros valores.

              Lo que nos distingue es brindar la asesoría legal personal a cualquier persona, organización, empresa, etc. que la solicite, ajustando el costo de los servicios legales a la capacidad económica de nuestros clientes, por lo que en ningún caso, la falta de recursos económicos es motivo para dejar de brindar nuestros servicios y apoyar de esta forma a la sociedad.

              Nuestro objetivo es brindarle certeza jurídica y honestidad en las consultas y servicios en los que intervenimos, de esta forma usted podrá encontrar la solución jurídica que requiere en el menor tiempo y al mejor costo.
</p>
            </section>

            <section id="contacto">
              <h2>CONTÁCTENOS</h2>
              <h3> Asistencia penal las 24 hs. para urgencias</h3>
              <h2>La Plata</h2>
              <p> Calle 3 nro. 215 e/ 36 y 37, Dpto. 9
                221 – 623 6831 | 221 – 408 8663
                estudio@jg-asociados.com.ar
                javiergarcia@jg-asociados.com.ar
                alejandraantonio@jg-asociados.com.ar
                veronicamonzon@jg-asociados.com.ar</p>
              <h2>La Plata</h2>
              <p> Calle 3 nro. 215 e/ 36 y 37, Dpto. 9
                221 – 623 6831 | 221 – 408 8663
                estudio@jg-asociados.com.ar
                javiergarcia@jg-asociados.com.ar
                alejandraantonio@jg-asociados.com.ar
                veronicamonzon@jg-asociados.com.ar</p>
              <h2>La Plata</h2>
              <p> Calle 3 nro. 215 e/ 36 y 37, Dpto. 9
                221 – 623 6831 | 221 – 408 8663
                estudio@jg-asociados.com.ar
                javiergarcia@jg-asociados.com.ar
                alejandraantonio@jg-asociados.com.ar
                veronicamonzon@jg-asociados.com.ar</p>
              <h2>La Plata</h2>
              <p> Calle 3 nro. 215 e/ 36 y 37, Dpto. 9
                221 – 623 6831 | 221 – 408 8663
                estudio@jg-asociados.com.ar
                javiergarcia@jg-asociados.com.ar
                alejandraantonio@jg-asociados.com.ar
                veronicamonzon@jg-asociados.com.ar</p>
              <h2>La Plata</h2>
              <p> Calle 3 nro. 215 e/ 36 y 37, Dpto. 9
                221 – 623 6831 | 221 – 408 8663
                estudio@jg-asociados.com.ar
                javiergarcia@jg-asociados.com.ar
                alejandraantonio@jg-asociados.com.ar
                veronicamonzon@jg-asociados.com.ar</p>
            </section>
            <form action="http://localhost:3001/enviar-email" method="POST">

        <div>
            <label for="nombre">Nombre *</label>
            <input type="text" id="nombre" name="nombre" placeholder="Su nombre" required/>
        </div>
        <div>
            <label for="correo">Correo *</label>
            <input type="email" id="correo" name="correo" placeholder="Su email" required/>
        </div>
        <div>
            <label for="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" placeholder="Teléfono de contacto"/>
        </div>
        <div>
            <label for="consulta">Consulta *</label>
            <textarea id="consulta" name="consulta" placeholder="Escriba su consulta" required></textarea>
        </div>
        <button type="submit">ENVIAR</button>
    </form>
          </main>

          <footer>
            <p>Desarrollado por Ingplat | JG & Asociados Estudio Jurídico</p>
          </footer>

        </div>

      </header>
    </div>
  );
}

export default App;
