import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {

  urlEnlace='https://www.simpsonizados.org';
  titulo='Audio ';

  constructor() { }

  ngOnInit() {
  }

}
