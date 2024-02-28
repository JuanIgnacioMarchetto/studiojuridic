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
           {/*  <!-- Contenido de la sección de áreas de práctica --> */}
        </section>

        <section id="contacto">
            <h2>CONTÁCTENOS</h2>{/* 
            <!-- Contenido de la sección de contacto --> */}
        </section>
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
