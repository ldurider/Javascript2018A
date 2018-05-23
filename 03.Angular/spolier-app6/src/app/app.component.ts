import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {

  mostrarHola= true;
  arregloNumero=[1,2,3,4,5];

  arregloPeliculas=[
  {
    nombre:'Tomb Raider',
    descripcion: 'Peliculon',
    esEstreno: false,
    urlImagen: 'http://hallyunation.com/wp-content/uploads/2018/04/readyOne-1-500x300.jpg',
  },

    {
      nombre:'Ready Play One',
      descripcion: 'Peliculon',
      esEstreno: true,
      urlImagen: 'http://hallyunation.com/wp-content/uploads/2018/04/readyOne-1-500x300.jpg',
    },

  ];

  alert(evento){
    console.log(evento);
    alert('Dio click en es estreno');
  }











  // nombre = 'Adrian';
  // apellido = 'Eguez';
  // edad = 28;
  // sueldo = 3411234.13;
  // fechaNacimiento = new Date('1989-06-10');
  // nombreBoton = 'Cambiar color';
  // nombreClase = 'sa-titulo';
  // clase ='dad';
  //
  // cambiarClaseDeTitulo() {
  //   const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
  //   if (nombreClaseEsTitulo) {
  //     this.nombreClase = 'sa-subtitulo';
  //   } else {
  //     this.nombreClase = 'sa-titulo';
  //   }
  // }
  //
  // aplicarClase(valorInput: string){
  //   this.nombreClase = valorInput;
  // }
}
