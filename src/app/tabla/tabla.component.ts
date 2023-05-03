import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  arrayDatos: any [] = [];
  arrayCodigo:any [] = [];

  

  constructor() { }

  ngOnInit(): void {
      var peticion = false;
    fetch(`https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=${this.dato.ruc}`).then(response => {
     response.json() 
    }).then(data =>  JSON.stringify(data));
   
  }

  

}
