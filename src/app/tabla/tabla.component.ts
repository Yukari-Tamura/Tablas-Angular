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
    this.arrayCodigo.push(
      {id:1, codigo: '1.1.1.1'},
      {id:1, codigo: '1.1'},
      {id:1, codigo: '1.1.2'},
      {id:1, codigo: '1.1.2.1'},
      {id:1, codigo: '1.1.3'},
      {id:1, codigo: '1.1.3.1'},
      {id:1, codigo: '1.1.3.2'}
      )
      
    this.arrayDatos.push(
      {id: 1, mes: 1, codigo: '1.1.1.1', valor1: 50, valor2: 50},
      {id: 2, mes: 1, codigo: '1.1.1.1', valor1: 100, valor2: 100},
      {id: 3, mes: 2, codigo: '1.1.1.1', valor1: 150, valor2: 150},
      {id: 4, mes: 2, codigo: '1.1.1.1', valor1: 150, valor2: 150},
      {id: 5, mes: 1, codigo: '1.1', valor1: 200, valor2: 200},
      {id: 6, mes: 5, codigo: '1.1', valor1: 300, valor2: 300},
      {id: 7, mes: 5, codigo: '1.1', valor1: 350, valor2: 350},
      {id: 8, mes: 1, codigo: '1.1.2', valor1: 250, valor2: 250},
      {id: 9, mes: 5, codigo: '1.1.3.1', valor1: 400, valor2: 400},
      {id: 10, mes: 8, codigo: '1.1.3.1', valor1: 450, valor2: 450},
      {id: 11, mes: 8, codigo: '1.1.3.2', valor1: 500, valor2: 500}
    )

   

    this.refactorizacion(this.arrayDatos, this.arrayCodigo)
    

   
  }

  refactorizacion(dataArray:any[], dataCodigo:any[]){
    let dataFil = [] as any;
   
        
    for(let index = 1; index < 12; index++){
      dataCodigo.forEach((item) => {
        let codigo:any[] = [];
        let contador =0;
        codigo = dataArray.filter(x => x.codigo === item.codigo && x.mes === index);
        if(codigo.length === 0) return;
        let totalHaber = codigo?.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
       
        let totalDebe = codigo?.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
       
       
        dataFil.push(...codigo, {id:"",mes:'', valor1: totalHaber, valor2:totalDebe}) 
      })
let subtotales = dataFil.filter(x=> x.mes=== index)
let totalHaberFinal = subtotales.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeFinal = subtotales.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
dataFil.push({id:"",mes:"",valor1:totalHaberFinal,valor2:totalDebeFinal}l
      console.log(dataFil)
      
    }
    this.arrayDatos = dataFil;
    let totalHaberFinal = this.arrayDatos.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeFinal = this.arrayDatos.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    this.arrayDatos = [...this.arrayDatos, {id:"", mes:"", valor1: totalHaberFinal, valor2: totalDebeFinal}]
  }



}
