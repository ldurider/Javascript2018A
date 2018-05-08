//Operadores de arreglos

let arregloNumero = [1,2,3,4,5,6];

let arregloDeudas = [100,2,52,22,26];
//let arregloUsuarios: Array<UsuarioArreglo> =[
let arregloUsuarios: UsuarioArreglo[] =[
    {nombre: 'Adrian', edad: 28},
    {nombre: 'Luis', edad: 10},
    {nombre: 'Juan', edad: 70},
    {nombre: 'Juana', edad: 32},
    {nombre: 'Vicent', edad: 25}
];


//nueva forma cambio de function por => para funciones anonimas

let sumarDosNumeros = (numeroUno : number, numeroDos: number) => { //fat arrow funct
    return numeroDos+numeroUno;
};

let totalEdades= arreglo=>{

};

let facultadesDos = function (a){
    return['Facultad1','Facultad2'];
};

let facultades = (a: number, b?:number)=>['Facultad1','Facultad2']; //omitir return //?para parametros no requeridos

facultades(1);

let sumar = 0;
let resultado = arregloNumero.forEach(
    (valor,indice,arreglo)=>{
        sumar=sumar+valor;
        console.log(sumar);
    }
);

//console.log(resultado);

let resultadoSuma = arregloNumero.reduce(
    (totalAcumulado,valorArreglo) =>{ return totalAcumulado-valorArreglo; }, 40);

//console.log(resultadoSuma);

interface UsuarioArreglo{
  nombre: string;
  edad: number;
  deuda?: number;
};

let resultadoEdades = arregloUsuarios.reduce(
    (totalEdadAcumulado,arreglo:UsuarioArreglo) =>{ return totalEdadAcumulado+arreglo.edad; }, 20);

console.log(resultadoEdades);

//mutar un arreglo

let usuarioCincoAniosMenos = arregloUsuarios.map(
    (usuario: UsuarioArreglo) =>{
        usuario.edad = usuario.edad -5;
        usuario.deuda = calculoDeudaUsuario(usuario.edad);
        return usuario;
    }

).filter((usuario :UsuarioArreglo)=>{
    //TRUE se devuelve
    return(usuario.deuda<100 && usuario.edad>18)
}).every( //AND   //.some ( //OR
    (usuario: UsuarioArreglo) => {
        return(usuario.edad>18)
    }
);

console.log(usuarioCincoAniosMenos);

function calculoDeudaUsuario(edad) {
    return arregloDeudas.reduce( (totalAcumulado, deuda: number)=>{
        return totalAcumulado+((edad/100)*deuda);
    },0);

}


