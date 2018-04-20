//var nombre = 'Luis';
let nombre: String = 'Luis';
let segundoNombre = 'Daniel';
const cedula = '17220709941';

segundoNombre = 'Pedrito';
//cedula='99';  Error read-only

const URL_POLI = 'http://www.epn.edu.ec'

//segundoNombre = 123; //Duck Typing

let edad: Number = 28;
let fecha: Date = new Date();
let casado: boolean = false;

//let mascotas: object ={};

class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String
    ) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola(){
        //Templade Strings
        console.log(`EL usuario se llama: ${this.mNombre}, la cedula del usuario es: ${this.mCedula}, la edad del usuario es: ${this.mEdad}`);
    }
}

let usuario: Usuario = new Usuario('Luis',22, '1722706994');

let usuarioOtro = {
    mNombre: 'Luis',
    mEdad: 22,
    mCedula: '16'
};
console.log(usuarioOtro);
console.log(usuario);

usuario.imprimirEnConsola();

function noHagoNada() {

}

console.log('No hago nada:',noHagoNada());

interface Usuario2 {
    mNombre: String;
    mEdad: Number;
    mCedula: String;
}

let usuarioCuatro: Usuario2;
