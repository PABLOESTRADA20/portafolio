import { useState, useEffect } from "react";
import igLogo from "./assets/instagram.jpg";


const proyectos = [
  { id: 1, nombre: "Proyecto biodevercidad", descripcion: "Pagina hecha  con vite y react.", tecnologia: "react / nextjs" },
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

  const [tema, setTema] = useState("oscuro");

  function toggleTema() {
    const nuevoTema = tema === "oscuro" ? "claro" : "oscuro";
    setTema(nuevoTema);
    document.documentElement.setAttribute("data-tema", nuevoTema);
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

    document.documentElement.setAttribute("data-tema", "oscuro");

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
                <img
                  src={igLogo}
                  alt="Instagram"
                  style={{ width: "28px", height: "28px", borderRadius: "6px", verticalAlign: "middle" }}
                />
              </a>
              <li>
                <button onClick={toggleTema} className="btn-tema">
                  {tema === "oscuro" ? "☀️ Claro" : "🌙 Oscuro"}
                </button>
              </li>

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
            Esta página mostrará mis proyectos futuros, así como distintos experimentos en general,
            enfocados en el desarrollo y la mejora continua dentro del área del frontend.
            El objetivo de este espacio es servir como un entorno de práctica donde pueda explorar nuevas tecnologías,
            probar ideas creativas y desarrollar soluciones innovadoras.
          </p>
        </article>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi">
        <h1>Acerca de mi</h1>
        <article>
          <p className="sobre">
            Mi nombre es Pablo Cocio, tengo 18 años y me apasiona tanto la música como el desarrollo web. Estas dos áreas representan una parte importante de mi vida,
            ya que combinan creatividad, disciplina y aprendizaje constante.
            Mi objetivo es crear una plataforma donde pueda mostrar mis habilidades en el desarrollo web, compartir mis proyectos y evidenciar mi crecimiento como desarrollador frontend.
            A través de este espacio, busco experimentar, innovar y seguir mejorando en cada nuevo desafío que emprendo.
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
