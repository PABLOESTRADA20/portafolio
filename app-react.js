// 1. Datos Unificados
const MIS_BANDAS = [
    {
        id: 1,
        artista: "Gorillaz",
        imagen: "./img/Gorillaz.jpg",
        canciones: [
            { titulo: "Baby Queen", url: "https://www.youtube.com/watch?v=5ZPnmEeXnRY" },
            { titulo: "Orange County", url: "https://www.youtube.com/watch?v=X70VHzox6uA" },
            { titulo: "Andromeda", url: "https://www.youtube.com/watch?v=9W44NWYwa1g" }
        ]
    },
    {
        id: 2,
        artista: "KoRn",
        imagen: "./img/KoRn.jpg",
        canciones: [
            { titulo: "Blind", url: "https://www.youtube.com/watch?v=SGK00Q7xx-s" },
            { titulo: "Freak On a Leash", url: "https://www.youtube.com/watch?v=jRGrNDV2mKc" }
        ]
    },
    {
        id: 3,
        artista: "Joji",
        imagen: "./img/Joji.jpg",
        canciones: [
            { titulo: "Afterthought", url: "https://www.youtube.com/watch?v=ujriV3vkC9w" }
        ]
    },
    {
        id: 4,
        artista: "System of a Down",
        imagen: "./img/System Of A Down.jpg",
        canciones: [
            { titulo: "Chop Suey!", url: "https://www.youtube.com/watch?v=CSvFpboCt8w" },
            { titulo: "Toxicity", url: "https://www.youtube.com/watch?v=iywaBOMvYLI" }
        ]
    }
];

// 2. Componente: SaludoArtista
const SaludoArtista = (props) => {
    return (
        <div style={{ border: '1px solid white', margin: '10px', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
            <h3>{props.nombre}</h3>
        </div>
    );
};

// 3. Componente: TarjetaMusica
const TarjetaMusica = ({ banda }) => {
    const [likes, setLikes] = React.useState(0);

    return (
        <article style={{ textAlign: 'center' }}>
            <h2>Musica de {banda.artista}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {banda.canciones.map((cancion, index) => (
                    <li key={index}>
                        <a href={cancion.url} target="_blank" style={{ color: '#fdf5f7' }}>{cancion.titulo}</a>
                    </li>
                ))}
            </ul>
            <img src={banda.imagen} width="250" height="250" alt={banda.artista} style={{ borderRadius: '10px', objectFit: 'cover' }} />
            <br />
            <button 
                onClick={() => setLikes(likes + 1)}
                style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}
            >
                ❤️ Likes: {likes}
            </button>
        </article>
    );
};

// 4. ÚNICO Componente Principal (App)
const App = () => {
    const [busqueda, setBusqueda] = React.useState("");

    // Lógica de filtrado
    const bandasFiltradas = MIS_BANDAS.filter(banda => 
        banda.artista.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Panel de Artistas</h1>

            {/* Barra de Búsqueda */}
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <input 
                    type="text" 
                    placeholder="🔍 Buscar artista favorito..." 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ 
                        padding: '12px', borderRadius: '25px', width: '80%', maxWidth: '400px',
                        border: '1px solid #ff2e63', background: 'rgba(0,0,0,0.5)', color: 'white'
                    }}
                />
            </div>

            {/* Sección de Saludos (Filtrados) */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {bandasFiltradas.map((banda) => (
                    <SaludoArtista key={`saludo-${banda.id}`} nombre={banda.artista} />
                ))}
            </div>

            <hr style={{ border: '0.5px solid rgba(255,255,255,0.1)', margin: '40px 0' }} />

            {/* Sección de Tarjetas (Filtradas) */}
            <div className="container">
                {bandasFiltradas.length > 0 ? (
                    bandasFiltradas.map((banda) => (
                        <TarjetaMusica key={`tarjeta-${banda.id}`} banda={banda} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', width: '100%' }}>No se encontraron artistas.</p>
                )}
            </div>
        </div>
    );
};

// 5. Renderizado Final (Único y al final del archivo)
const root = ReactDOM.createRoot(document.getElementById('root-musica'));
root.render(<App />);