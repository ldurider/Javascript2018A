//Ejercicio 2

var generadoresPrendidos= 'pares' // 'impares' 'todos'

var arregloGeneradores=[
    {nombre: 'Generador', potencia: 62, cantidad: 4},
    {nombre: 'Generador', potencia: 124, cantidad: 15}
];

var aux=1;
var totalPotencia=0;

function esPar(numero){
    if(numero%2 ==1){
        return false;
    }else {
        return true;
    }
}

function calculoEstado(numero) {
    if(generadoresPrendidos=='pares' && esPar(numero)==true){
        return 'prendido';
    }else if(generadoresPrendidos=='impares' && esPar(numero)==false){
        return 'prendido';
    }else if(generadoresPrendidos=='todos'){
        return 'prendido';
    }else{
        return 'apagado';
    }
}


while(aux <= arregloGeneradores[0].cantidad){
    estado=calculoEstado(aux);
    if(estado==='apagado'){
        console.log('Generador #%o está %o',aux,estado);
    }else{
        totalPotencia= totalPotencia+arregloGeneradores[0].potencia;
        console.log('Generador #%o esta %o, añadiendo %o MW para un total de %o MW',aux,estado,arregloGeneradores[0].potencia,totalPotencia);
    }

    aux++;
}

for(aux2=aux;aux2<=arregloGeneradores[1].cantidad+aux-1;aux2++){
    estado=calculoEstado(aux2)
    if(estado==='apagado'){
        console.log('Generador #%o está %o',aux2,estado);
    }else{
        totalPotencia= totalPotencia+arregloGeneradores[1].potencia;
        console.log('Generador #%o esta prendido, añadiendo %o MW para un total de %o MW',aux2,arregloGeneradores[1].potencia,totalPotencia);
    }
}

