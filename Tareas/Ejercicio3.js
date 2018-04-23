//Ejercicio 3
// Autor: Luis Daniel Unapanta

var numeroMeses= 8;
var totalOsos= 2;
var sobretasa= 10000;


for(aux=1; aux<=numeroMeses; aux++){
    //totalOsos= numeroOsos*Math.pow(4,aux);
    totalOsos=totalOsos*4;
    if(totalOsos>=sobretasa){
        totalOsos=totalOsos/2;
        console.log('Removiendo %o osos de anteojos de la población',totalOsos);
    }
    console.log('Van a existir %o osos de anteojos después del mes %o',totalOsos,aux);
}

