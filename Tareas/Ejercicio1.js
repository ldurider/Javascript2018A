// Ejercicio 1

function validarNumeroDeStringsEnArreglo(arreglo) {
    numeroString=0;
    for (var aux = 0; aux < arreglo.length; aux++) {
         tipo= typeof arreglo[aux];
        if (tipo == 'string'){
            numeroString++;
        }
    }
    return numeroString;
}

var arregloDeMuestra = [1,'2',3,'4',5,'6'];

console.log(validarNumeroDeStringsEnArreglo(arregloDeMuestra));