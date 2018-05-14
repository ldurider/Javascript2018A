import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  urlImagen='https://hipertextual.com/files/2018/03/tomb_raider_roar_uthaug-1000x667.jpg';
  estado='proximamente';
  tituloPelicula='Tomb Rider';
  descripcionPelicula='Alicia Vikander';
  esEstreno=true;
  textoEstreno:string;
  claseEstreno:string;

  constructor() { }

  ngOnInit() {
    if(this.esEstreno){
      this.textoEstreno='Estreno';
      this.claseEstreno='sa-color-estado-rosado';
    }else{
      this.textoEstreno='Proximamente';
      this.claseEstreno='sa-color-estado-amarillo';
    }

  }

}
