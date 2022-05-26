

const fs = require('fs');  //se importa el modulo(paquete) require para usarlo( se puede usar otro nombre de const... fs )
let salida=''; // va cambiando


const crararchivo=async(base) => {
    try {
        console.log('=======================')
console.log('=====multiplicacion====')
console.log('=======================')

for ( let b=1;b<=10;b++) {
    let c = base*b
    salida += `${base}x${b}=${c}\n`;        /// salida lo usa para acumular sumando  (queda todo en la variable salida lo que se va a grabar)   tambien se escribe salida = salida + `       `     \n salto de linea
}
console.log(salida)
fs.writeFileSync(`./salida/tabla de multiplicacion ${base}.txt`,salida)    //cuando a una funcion no se le asigna un nombre no se llama se ejecuta ahi mismo funcion flecha

    return (`tabla creada ${base}`);
    }catch(err){
        throw err;
    }


}


module.exports = {          // creando objeto
    crararchivo
}


