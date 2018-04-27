//Operadores de arreglos
var arregloNumero = [1, 2, 3, 4, 5, 6];
var arregloDeudas = [100, 2, 52, 22, 26];
//let arregloUsuarios: Array<UsuarioArreglo> =[
var arregloUsuarios = [
    { nombre: 'Adrian', edad: 28 },
    { nombre: 'Luis', edad: 10 },
    { nombre: 'Juan', edad: 70 },
    { nombre: 'Juana', edad: 32 },
    { nombre: 'Vicent', edad: 25 }
];
//nueva forma cambio de function por => para funciones anonimas
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroDos + numeroUno;
};
var totalEdades = function (arreglo) {
};
var facultadesDos = function (a) {
    return ['Facultad1', 'Facultad2'];
};
var facultades = function (a, b) { return ['Facultad1', 'Facultad2']; }; //omitir return //?para parametros no requeridos
facultades(1);
var sumar = 0;
var resultado = arregloNumero.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
//console.log(resultado);
var resultadoSuma = arregloNumero.reduce(function (totalAcumulado, valorArreglo) { return totalAcumulado - valorArreglo; }, 40);
;
var resultadoEdades = arregloUsuarios.reduce(function (totalEdadAcumulado, arreglo) { return totalEdadAcumulado + arreglo.edad; }, 20);
console.log(resultadoEdades);
//mutar un arreglo
var usuarioCincoAniosMenos = arregloUsuarios.map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calculoDeudaUsuario(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    //TRUE se devuelve
    return (usuario.deuda < 100);
});
console.log(usuarioCincoAniosMenos);
function calculoDeudaUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + ((edad / 100) * deuda);
    }, 0);
}
//filter
