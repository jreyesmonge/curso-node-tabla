//Importar el fileSystem
const fs = require('fs');
const colors = require('colors');

//Se hace una promeso poniendo async en la arrow function crearArchivo
const crearArchivo = async(base = 5,listar = false,hasta = 10) =>{
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            let operacion = (base * i);
            salida += `${base} X ${i} = ${operacion}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${operacion}\n`;
        }
        
        if(listar){
            console.log("============".green);
            console.log('Tabla del '.green+colors.blue(base));
            console.log("============".green);

            

            console.log(salida);
        }
        //writeFile sirve para grabar un archivo, en este caso se esta creando un archivo
        //primer argumento es el nombre del archivo
        //segundo argumento es lo que se va a grabar en el archivo
        //tercer argumento es un callback para mostrar un error en caso de que lo haya
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
        return `Tabla-${base}.txt`;
    }
    catch (err) {
        throw err;
    }   
}

//Sirve para poder exportar el archivo
module.exports = {
    crearArchivo
    
}