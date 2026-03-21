
const imagenes = document.querySelectorAll("img");
imagenes.forEach(imagen => {


  imagen.addEventListener("mouseover", () => {
    imagen.style.transform = "scale(1.1)";
    imagen.style.transition = "0.3s";
  });

  imagen.addEventListener("mouseout", () => {
    imagen.style.transform = "scale(1)";
  });
});

const mainBtn = document.getElementById('button');
mainBtn.textContent = "¡Haz clic aquí!";

mainBtn.addEventListener('click', () => {
  const colores = ['#0f0c29', '#1a1a2e', '#2d3436', '#4834d4', '#130f40'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.background = randomColor;
  alert("¡Has cambiado el fondo!");
});

const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll('section, article').forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s ease-out";
  observer.observe(el);
});


document.addEventListener('DOMContentLoaded', () => {

  const horaLocal = new Intl.DateTimeFormat('es-CL', {
    timeZone: 'America/Santiago',
    hour: 'numeric',
    hour12: false
  }).format(new Date());

  const hors = parseInt(horaLocal);
  let mensaje = "";
  if (hors >= 6 && hors < 12) mensaje = "¡Buenos días!";
  else if (hors >= 12 && hors < 20) mensaje = "¡Buenas tardes!";
  else mensaje = "¡Buenas noches!";

  const h1inicio = document.querySelector('#inicio h1');
  h1inicio.textContent = `${mensaje} Bienvenido a mi Proyecto`;
});





