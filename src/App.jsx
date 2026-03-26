import { useState, useEffect } from "react";

const proyectos = [
  { id: 1, nombre: "Portafolio Web", descripcion: "Mi primera página personal con HTML y CSS.", tecnologia: "HTML / CSS" },
  { id: 2, nombre: "App del clima", descripcion: "Consulta el clima de cualquier ciudad.", tecnologia: "JavaScript" },
  { id: 3, nombre: "gpb-industries", descripcion: "Lista de tareas .", tecnologia: "React / Angular" },
];

function TarjetaProyecto({ nombre, descripcion, tecnologia }) {
  return (
    <div className="tarjeta-proyecto">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <span>{tecnologia}</span>
    </div>
  );
}

function App() {
  // Saludo según la hora — reemplaza tu script.js
  const hora = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "numeric",
    hour12: false,
  }).format(new Date());

  const h = parseInt(hora);
  const saludo = h >= 6 && h < 12
    ? "¡Buenos días!"
    : h >= 12 && h < 20
      ? "¡Buenas tardes!"
      : "¡Buenas noches!";

  // Cambio de fondo — reemplaza tu script.js
  const [fondoActivo, setFondoActivo] = useState(false);

  function cambiarFondo() {
    const colores = ["#0f0c29", "#1a1a2e", "#2d3436", "#4834d4", "#130f40"];
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.background = color;
    setFondoActivo(true);
  }

  // Animación de entrada — reemplaza el IntersectionObserver de script.js
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("section, article").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s ease-out";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h1>proyectosdiv</h1>
      <header>
        <nav id="navbar">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Acerca de mi</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li className="instagram">
              <a href="https://www.instagram.com/young.crazy_69/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>


      <h1>Introducción</h1>
      <p id="introduccion">Esta página web está diseñada como un espacio dedicado a la experimentación y al aprendizaje continuo. En ella presento una colección de proyectos desarrollados con el objetivo de explorar distintas tecnologías, 
        mejorar mis habilidades y poner en práctica ideas creativas.
        Cada proyecto refleja un proceso de prueba, error y mejora constante, donde busco comprender mejor el funcionamiento de herramientas de desarrollo web, diseño e implementación de soluciones digitales. Este sitio no solo muestra resultados finales,
        sino también el camino de aprendizaje detrás de cada uno.</p>

      <button onClick={cambiarFondo}>¡Haz clic aquí!</button>


      <section id="inicio">
        <h1>{saludo} Bienvenido a mi Proyecto</h1>
        <article>
          <p className="parafo-inicio">
            Esta pagina mostrara mis proyectos futuros como tambien experimentos en general,
            para crear proyectos futuros de frontend asi tambien impulsar esta pagina.
          </p>
        </article>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi">
        <h1>Acerca de mi</h1>
        <article>
          <p className="sobre">
            Mi nombre es Pablo Cocio, tengo 18 años, me gusta la música y el desarrollo web.
            Mi objetivo es crear una plataforma donde pueda mostrar mis habilidades en el desarrollo web.
            ¡Espero que disfrutes explorando mi página!
          </p>
        </article>
      </section>

      {/* Proyectos */}
      <section id="proyectos">
        <h1>Proyectos</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {proyectos.map((proyecto) => (
            <TarjetaProyecto
              key={proyecto.id}
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              tecnologia={proyecto.tecnologia}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
