import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrusel-peliculas',
  templateUrl: './carrusel-peliculas.component.html',
  styleUrls: ['./carrusel-peliculas.component.css']
})
export class CarruselPeliculasComponent implements OnInit {

  @Input() titulo;
  @Input() imagenes;


  constructor() { }

  ngOnInit() {
  }

}
