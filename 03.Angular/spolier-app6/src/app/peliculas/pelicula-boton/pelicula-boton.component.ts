import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-boton',
  templateUrl: './pelicula-boton.component.html',
  styleUrls: ['./pelicula-boton.component.css']
})
export class PeliculaBotonComponent implements OnInit {


  arregloAlert=["alert alert-warning","alert alert-success","alert alert-danger"];
  textoColor:number;

  constructor() { }

  ngOnInit() {
    this.textoColor=0;
  }

cambiarColor(){
    this.textoColor++;
    if(this.textoColor==this.arregloAlert.length){this.textoColor=0}
}

}
