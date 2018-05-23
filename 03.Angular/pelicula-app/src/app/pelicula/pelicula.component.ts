import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;
  @Input() esEstreno: boolean;

  textoEstreno: string;
  claseEstreno: string;

  constructor() { }

  ngOnInit() {
    this.setearColorYClase();
  }

  setearColorYClase() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

}
