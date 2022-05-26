











const {crararchivo} = require('./helpers/multi'); //desestructuro y con el require encuentro la ubicacion del objeto.


const argv=require('yargs')
.option('b',{
    alias:'base',
   type:'number',
   demandOption:true

})
.check ((argv,options) => {
    if (isNaN(argv.base)) { 
        throw ' ingrese numeros'
    
    }
    return true;
})
.argv;


console.clear();



console.log(process.argv);
console.log(argv);
console.log('base:yargs', argv.b);





const base=9



crararchivo(argv.b)
.then (nombrenuvo=> console.log(nombrenuvo))
.catch(err => console.log(err));