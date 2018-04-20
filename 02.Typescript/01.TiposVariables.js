//var nombre = 'Luis';
var nombre = 'Luis';
var segundoNombre = 'Daniel';
var cedula = '17220709941';
segundoNombre = 'Pedrito';
//cedula='99';  Error read-only
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123; //Duck Typing
var edad = 28;
var fecha = new Date();
var casado = false;
//let mascotas: object ={};
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Templade Strings
        console.log("EL usuario se llama: " + this.mNombre + ", la cedula del usuario es: " + this.mCedula + ", la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Luis', 22, '1722706994');
var usuarioOtro = {
    mNombre: 'Luis',
    mEdad: 22,
    mCedula: '16'
};
console.log(usuarioOtro);
console.log(usuario);
usuario.imprimirEnConsola();
function noHagoNada() {
}
console.log('No hago nada:', noHagoNada());
var usuarioCuatro;
