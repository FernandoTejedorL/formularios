const rootStyles = document.documentElement.style;

const formElement = document.getElementById('form');
const validate = event => {
    event.preventDefault(); //básico para que no se envíe la info del evento
    console.log('HOLA');
}
formElement.addEventListener('submit', validate)

const validate2 = event => {
    event.preventDefault(); //básico para que no se envíe la info del evento
    console.dir(event.target.user.value); // con esto accedemos al valor de lo introducido en el campo del formulario
}
formElement.addEventListener('submit', validate2)

//manipular css desde JS

const boxElement = document.getElementById('box');
const buttonElement = document.getElementById('button');

const changeColor = () => {
    //boxElement.classList.add('blue') // sirve para añadir clases, tienen que estar en el CSS
    //boxElement.classList.add('red'); // al estar en el CSS se añade
    //boxElement.classList.add('red', 'box-big', 'box-rounded') // se añadirían todas las clases
    //boxElement.classList.remove('red', 'box-big', 'box-rounded') // quita todas las clases
    //boxElement.classList.remove('box') // quita una clase
    //boxElement.classList.toggle('red', 'box-big', 'box-rounded') // si tiene la clase se la quita y si no la tiene se la pone
    if (boxElement.classList.contains('red')) {
        console.log(`tiene la clase red`)
    } else {
        console.log(`no tiene la clase red`)
    }
    //if (!boxElement.classList.contains('red')) // para comprobar si no la tiene se pone ! al principio
}

buttonElement.addEventListener('click', changeColor)