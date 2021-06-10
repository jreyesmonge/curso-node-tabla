//Se importa y se hace una destructuracion de la funcion crear archivo desde el
//archivo multiplicar de la carpeta helpers
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

colors.setTheme({
    error: 'red',
    info: 'green',
    warning: 'yellow'
})

const argv = require('./config/yargs');

console.clear();    

//muestra en forma de arreglo la informacion de lo que se ingreso a la consola
/*console.log(process.argv);
//Destructuracion del tercer elemento del arreglo de la consola
const [,,arg3 = 'base=5']=process.argv;
//Se vuelve a destructurar pero ahora el arg3, pero se utiliza la funcion split
//para cortar solamente lo que este despues del igual =
const [, base] = arg3.split('=');*/


crearArchivo(argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));