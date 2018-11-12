//requireds
const fs = require('fs');

var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==========================='.green);
    console.log(`====Tabla de ${base}=======`.green);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {
        let resp = i * base;
        //data += `${base} * ${i} = ${base *i}\n`
        console.log(`multiplicación: ${i} X ${base}= ${resp}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resp = i * base;
            data += `${base} * ${i} = ${base *i}\n`
                //console.log(`multiplicación: ${i} X ${base}= ${resp}`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}