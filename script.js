const cronometro = document.getElementById("cronometro");
const botonInicio = document.getElementById("boton-inicio-pausa");
const botonPausa = document.getElementById("boton-reiniciar");

let[horas, minutos, segundos] = [0,0,0];

let intervaloDT;
let estadoCrontomentro = 'pausado';

function  actualizarCronometro(){
  segundos ++;
  if(segundos / 60 === 1){
  segundos = 0;
  minutos++;

  if(minutos / 60 === 1){
    minutos = 0;
   horas ++;
}
}

const segundosConF = asignarFormato(segundos);
const minutosConF = asignarFormato(minutos);
const horasConF = asignarFormato(horas);
cronometro.innerText = `${horasConF}:${minutosConF}:${segundosConF}`;


}

function asignarFormato(unidadDeTiempo){
  return unidadDeTiempo <  10 ? '0' + unidadDeTiempo : unidadDeTiempo;
  
};

botonInicio.addEventListener('click', function(){
  if (estadoCrontomentro == 'pausado') {
    intervaloDT = window.setInterval(actualizarCronometro,1000 );
    botonInicio.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicio.classList.remove("iniciar");
    botonInicio.classList.add("pausar"); 
    estadoCrontomentro = "andando";
  }
   else{
    window.clearInterval(intervaloDT);
    botonInicio.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicio.classList.remove("pausar");
    botonInicio.classList.add("iniciar");
    estadoCrontomentro = 'pausado';
  }
});

botonPausa.addEventListener('click', function(){
  window.clearInterval(intervaloDT);
  horas = 0;
  segundos = 0;
  minutos = 0 ;
  cronometro.innerText = '00:00:00';
  botonInicio.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicio.classList.remove("pausar");
  botonInicio.classList.add("iniciar");
  estadoCrontomentro = 'pausado';
});