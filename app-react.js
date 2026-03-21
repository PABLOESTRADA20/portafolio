const { useState, useEffect } = React;

const proyectos = [
    { id: 1, nombre: "portafolio", descripcion: "Mi primera pagina personal con HTML y CSS", tecnologia: "HTML / CSS" },
    { id: 2, nombre: "App del clima", descripcion: "Consulta el clima de cualquier ciudad", tecnologia: "JavaScript" },
    { id: 3, nombre: "To-Do List", descripcion: "Lista de tareas con localStorage", tecnologia: "React" },
];
function TarjetaProyecto({ nombre, descripcion, tecnologia }) {
    return (
        <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "12px",
            padding: "20px",
            margin: "10px",
            color: "white",
            width: "260px",
        }}>
            <h3 style={{ color: "#a29bfe", margin: "0 0 8px" }}>{nombre}</h3>
            <p style={{ fontSize: "14px", margin: "0 0 10px" }}>{descripcion}</p>
            <span style={{
                background: "#6c5ce7",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
            }}>{tecnologia}</span>

        </div>
    )
}

function SeccionProyectos() {
    return (
        <section style={{ textAlign: "center", padding: "40px 20px" }}>
            <h2 style={{ color: "white" }}>Mis Proyectos</h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
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
    );
}
const contenedor = document.createElement("div");
document.body.appendChild(contenedor);
const root = ReactDOM.createRoot(contenedor);
root.render(<SeccionProyectos />);