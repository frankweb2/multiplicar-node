const argv = require('./config/yargs').argv;

var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `, colors.green(archivo)))
            .catch(e => console.log(e))
        break;
    default:
        console.log('comando no reconocido');
}

// let base = 8;

// let argv2 = process.argv;

// console.log('limite', argv.limite);
// console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]