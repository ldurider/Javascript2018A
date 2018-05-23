import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit, OnChanges {

  @Input() urlImagen:string;
  @Input() tituloPelicula:string;
  @Input()descripcionPelicula:string;
  @Input()esEstreno:boolean;

  @Output() dioClickEstado:EventEmitter<boolean> = new EventEmitter();


  textoEstreno:string;
  claseEstreno:string;

  constructor() {
    //variables undefined
  }

  ngOnInit() {
    console.log("INICIO Y SETEO COLOR", this.tituloPelicula);
    this.setearColor()

  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno) {
      this.setearColor();
    }
  }

  setearColor(){

      if(this.esEstreno){
        this.textoEstreno='Estreno';
        this.claseEstreno='sa-color-estado-rosado';
      }else{
        this.textoEstreno='Proximamente';
        this.claseEstreno='sa-color-estado-amarillo';
      }
  }

  hizoClickEnEstado(){
    this.dioClickEstado.emit(true);
  }


}

