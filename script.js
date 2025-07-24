let tiempoRestante = 60;
let temporizador = null;

function actualizarDisplay() {
  document.getElementById("timer-display").textContent = tiempoRestante + " seg";
}

function iniciarTemporizador() {
  if (!temporizador) {
    temporizador = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante--;
        actualizarDisplay();
      } else {
        clearInterval(temporizador);
        temporizador = null;
        document.getElementById("alarma").play();
      }
    }, 1000);
  }
}

function pausarTemporizador() {
  clearInterval(temporizador);
  temporizador = null;
}

function resetearTemporizador() {
  clearInterval(temporizador);
  temporizador = null;
  tiempoRestante = 60;
  actualizarDisplay();
}

const rutina = {
  lunes: {
    grupo: "Espalda + Bíceps + Core",
    ejercicios: [
      "Dominadas – 4x8-10",
      "Remo con barra Z – 4x10",
      "Remo con mancuerna – 3x12",
      "Curl bíceps con barra Z – 3x10",
      "Martillo con mancuerna – 3x12",
      "Rueda abdominal – 3x12-15"
    ]
  },
  martes: {
    grupo: "Pecho + Hombros + Tríceps",
    ejercicios: [
      "Press banca con barra – 4x10",
      "Press inclinado con mancuernas – 3x10",
      "Fondos – 3x12",
      "Press militar – 4x8",
      "Elevaciones laterales – 3x12",
      "Extensión tríceps – 3x12"
    ]
  },
  miercoles: {
    grupo: "Piernas (Fuerza) + Core",
    ejercicios: [
      "Sentadilla con barra – 4x8",
      "Peso muerto rumano – 4x10",
      "Zancadas – 3x12 por pierna",
      "Elevación de talones – 4x20",
      "Crunch abdominal con disco – 3x15"
    ]
  },
  jueves: {
    grupo: "Espalda + Bíceps + Core (Volumen)",
    ejercicios: [
      "Jalón al pecho – 4x10",
      "Remo con mancuerna – 4x12",
      "Pullover – 3x15",
      "Curl concentración – 3x12",
      "Curl tipo 21 – 3 series",
      "Planchas laterales – 3x30 seg"
    ]
  },
  viernes: {
    grupo: "Tríceps + Core + Hombro (Volumen – nuevo enfoque)",
    ejercicios: [
      "Fondos en paralelas o entre bancos – 3x15",
      "Rompecráneos con barra Z – 3x12",
      "Patada de tríceps con mancuerna – 3x15",
      "Elevaciones laterales con mancuernas – 3x15",
      "Plancha frontal – 3x40 seg",
      "Planchas laterales – 3x30 seg por lado",
      "Crunch con giro (oblicuos) – 3x15"
    ]
  },
  sabado: {
    grupo: "Boxeo (Cardio y Técnica)",
    ejercicios: [
      "Saco de boxeo – 5x3 min",
      "Sombra con guantes – 3 min",
      "Rodillas al pecho",
      "Bicicleta abdominal"
    ]
  },
  domingo: {
    grupo: "Descanso total",
    ejercicios: ["No hay ejercicios hoy."]
  }
};

document.getElementById("selector-dia").addEventListener("change", function () {
  const dia = this.value;
  const contenedor = document.getElementById("contenido-dia");
  const titulo = document.getElementById("grupo-muscular");
  contenedor.innerHTML = "";
  titulo.innerHTML = "";

  if (rutina[dia]) {
    titulo.innerHTML = `<h2>${rutina[dia].grupo}</h2>`;
    const lista = document.createElement("ul");
    rutina[dia].ejercicios.forEach(ejercicio => {
      const item = document.createElement("li");
const nombre = ejercicio.split("–")[0].trim();
const enlace = `https://www.youtube.com/results?search_query=ejercicio+${encodeURIComponent(nombre)}`;
item.innerHTML = `<label><input type='checkbox'> ${ejercicio} <a href="${enlace}" target="_blank">Ver</a></label>`;

      lista.appendChild(item);
    });
    contenedor.appendChild(lista);
  }
});

actualizarDisplay();
