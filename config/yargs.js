const argv = require('yargs')
                .option('b',{//Crea una opcion
                    alias: 'base',//es el alias para que tambien se puede escribir base en lugar de b
                    type: 'number',//tipo de datos que va a devolver
                    demandOption: true,//esta propiedad especifica si el campo es requerido
                    describe: 'Es la base de multiplicar de la tabla'//hace una descripcion de lo que hace el comando
                })
                //.check comprueba que se cumplan determinadas condiciones en los
                //argumentos proporcionados
                .check((argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Hasta que numero va a multiplicar'
                })
                .argv;

module.exports = argv;