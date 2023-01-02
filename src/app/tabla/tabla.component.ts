import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  arrayDatos: any [] = [];
  arrayEnero: any [] = [];
  arrayFebrero:any [] = [];
  arrayMarzo:any[] = [];
  arrayAbril:any[] = [];
  arrayMayo:any[] = [];
  arrayJunio:any[] = [];
  arrayJulio:any[] = [];
  arrayAgosto:any[] = [];
  arraySeptiembre:any[] = [];
  arrayOctubre:any[] = [];
  arrayNoviembre:any[] = [];
  arrayDiciembre:any[] = [];
  arrayFinal: any[] = [];

  

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

    this.arrayDatos.forEach((item) => {
        this.estructurador(item);  
    })
    this.RefactorizarMeses();
  }

  estructurador(item:any) {
      const {id, mes, valor1, valor2} = item;
     
      
      switch(mes){
        case 1:
          this.arrayEnero.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 2:
          this.arrayFebrero.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 3:
          this.arrayMarzo.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 4:
          this.arrayAbril.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 5:
          this.arrayMayo.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 6:
          this.arrayJunio.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 7:
          this.arrayJulio.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 8:
          this.arrayAgosto.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 9:
          this.arraySeptiembre.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 10:
          this.arrayOctubre.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 11:
          this.arrayNoviembre.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
        case 11:
          this.arrayDiciembre.push({id: id, mes:mes, valor1: valor1, valor2: valor2}); 
        break;
      }
  }

  RefactorizarMeses() {
    //enero
    let totalHaberEnero = this.arrayEnero.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeEnero = this.arrayEnero.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberEnero != 0 && totalDebeEnero != 0){
      let arrayNuevoEnero = [{id: "", mes: "", valor1: totalHaberEnero, valor2: totalDebeEnero}]
      this.arrayEnero = [ ...this.arrayEnero, ...arrayNuevoEnero]
    }
    //febrero
    let totalHaberFebrero = this.arrayFebrero.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeFebrero = this.arrayFebrero.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberFebrero != 0 && totalDebeFebrero != 0){
      let arrayNuevoFebrero = [{id: "", mes: "", valor1: totalHaberFebrero, valor2: totalDebeFebrero}]
      this.arrayFebrero = [ ...this.arrayFebrero, ...arrayNuevoFebrero]
    }
    //marzo
    let totalHaberMarzo = this.arrayMarzo.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeMarzo = this.arrayMarzo.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberMarzo != 0 && totalDebeMarzo != 0){
      let arrayNuevoMarzo = [{id: "", mes: "", valor1: totalHaberMarzo, valor2: totalDebeMarzo}]
      this.arrayMarzo = [ ...this.arrayMarzo, ...arrayNuevoMarzo]
    }
    //abril
    let totalHaberAbril = this.arrayAbril.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeAbril = this.arrayAbril.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberAbril != 0 && totalDebeAbril != 0){
      let arrayNuevoAbril = [{id: "", mes: "", valor1: totalHaberAbril, valor2: totalDebeAbril}]
      this.arrayAbril = [ ...this.arrayAbril, ... arrayNuevoAbril]
    }

    
    //mayo
    let totalHaberMayo = this.arrayMayo.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeMayo = this.arrayMayo.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberMayo != 0 && totalDebeMayo != 0){
      let arrayNuevoMayo = [{id: "", mes: "", valor1: totalHaberMayo, valor2: totalDebeMayo}]
      this.arrayMayo = [ ...this.arrayMayo, ...arrayNuevoMayo]
    }
    
    //junio
    let totalHaberJunio = this.arrayJunio.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeJunio = this.arrayJunio.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberJunio != 0 && totalDebeJunio != 0){
      let arrayNuevoJunio = [{id: "", mes: "", valor1: totalHaberJunio, valor2: totalDebeJunio}]
      this.arrayJunio = [ ...this.arrayJunio, ...arrayNuevoJunio]
    }
    
    //julio
    let totalHaberJulio = this.arrayJulio.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeJulio = this.arrayJulio.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberJulio != 0 && totalDebeJulio != 0){
      let arrayNuevoJulio = [{id: "", mes: "", valor1: totalHaberJulio, valor2: totalDebeJulio}]
      this.arrayJulio = [ ...this.arrayJulio, ...arrayNuevoJulio]
    }
    //agosto
    let totalHaberAgosto = this.arrayAgosto.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeAgosto = this.arrayAgosto.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberAgosto != 0 && totalDebeAgosto != 0){
      let arrayNuevoAgosto = [{id: "", mes: "", valor1: totalHaberAgosto, valor2: totalDebeAgosto}]
      this.arrayAgosto = [ ...this.arrayAgosto, ...arrayNuevoAgosto]
    }
    //septiembre
    let totalHaberSeptiembre = this.arraySeptiembre.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeSeptiembre = this.arraySeptiembre.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberSeptiembre != 0 && totalDebeSeptiembre != 0){
      let arrayNuevoSeptiembre = [{id: "", mes: "", valor1: totalHaberSeptiembre, valor2: totalDebeSeptiembre}]
      this.arraySeptiembre = [ ...this.arraySeptiembre, ...arrayNuevoSeptiembre]
    }
    //octubre
    let totalHaberOctubre = this.arrayOctubre.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeOctubre = this.arrayOctubre.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberOctubre != 0 && totalDebeOctubre != 0){
      let arrayNuevoOctubre = [{id: "", mes: "", valor1: totalHaberOctubre, valor2: totalDebeOctubre}]
      this.arrayOctubre = [ ...this.arrayOctubre, ...arrayNuevoOctubre]
    }
    //noviembre
    let totalHaberNoviembre = this.arrayNoviembre.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeNoviembre = this.arrayNoviembre.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberNoviembre != 0 && totalDebeNoviembre != 0){
      let arrayNuevoNoviembre = [{id: "", mes: "", valor1: totalHaberNoviembre, valor2: totalDebeNoviembre}]
      this.arrayNoviembre = [ ...this.arrayNoviembre, ...arrayNuevoNoviembre]
    }
    //dicimebre
    let totalHaberDiciembre = this.arrayDiciembre.reduce((acumulador, valor) => acumulador + valor.valor1, 0);
    let totalDebeDiciembre = this.arrayDiciembre.reduce((acumulador, valor) => acumulador + valor.valor2, 0);
    if(totalHaberDiciembre != 0 && totalDebeDiciembre != 0){
      let arrayNuevoDiciembre = [{id: "", mes: "", valor1: totalHaberDiciembre, valor2: totalDebeDiciembre}]
      this.arrayDiciembre = [ ...this.arrayDiciembre, ...arrayNuevoDiciembre]
    }
    //array final
    this.arrayDatos = [ ...this.arrayEnero, ...this.arrayFebrero, ...this.arrayMarzo, ...this.arrayAbril,
      ...this.arrayMayo, ...this.arrayJunio, ...this.arrayJulio, ...this.arrayAgosto, ...this.arraySeptiembre,
      ...this.arrayOctubre, ...this.arrayNoviembre, ...this.arrayDiciembre]
    console.log(this.arrayFinal)
  }

  

}
