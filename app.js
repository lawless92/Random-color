const boton = document.querySelector('button');
const color = document.getElementById('color');


function generarColor() {

    let digitos = '0123456789ABCDEF';
    let colorHtml = '#';

    for(let i = 0; i < 6; i++) {
      let indiceAleatorio = Math.floor(Math.random() * 16);
      colorHtml += digitos[indiceAleatorio];

    }

    return colorHtml;
}

boton.addEventListener('click' , function() {
  let colorAletorio = generarColor();

  color.textContent = colorAletorio;
  document.body.style.backgroundColor = colorAletorio;

});