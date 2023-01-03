import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  arrayDatos: any [] = [];

  

  constructor() { }

  ngOnInit(): void {
    this.arrayDatos.push(
      {id: 1, mes: 1, valor1: 50, valor2: 50},
      {id: 2, mes: 1, valor1: 100, valor2: 100},
      {id: 3, mes: 1, valor1: 150, valor2: 150},
      {id: 4, mes: 1, valor1: 200, valor2: 200},
      {id: 5, mes: 1, valor1: 250, valor2: 250},
      {id: 6, mes: 5, valor1: 300, valor2: 300},
      {id: 7, mes: 5, valor1: 350, valor2: 350},
      {id: 8, mes: 5, valor1: 400, valor2: 400},
      {id: 9, mes: 8, valor1: 450, valor2: 450},
      {id: 10, mes: 8, valor1: 500, valor2: 500}
    )

    this.refactorizacion(this.arrayDatos)
    

   
  }

  refactorizacion(dataArray:any[]){
    let dataFilter = [];
    for(let index = 1; index < 12; index++){
      let mes: any[] = [];
      mes = dataArray.filter(x => x.mes === index);
      if(mes.length === 0) continue;
      let totalHaber = mes?.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
      let totalDebe = mes?.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
      dataFilter.push(...mes,{id:"",mes:"", valor1: totalHaber, valor2:totalDebe})
    
    }
    this.arrayDatos = dataFilter;
  }



}
