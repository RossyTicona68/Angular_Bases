import { Component } from "@angular/core";

@Component({
  selector: 'app-counter', //llamada del componente
  template: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <h3>Counter:{{counter}}</h3>
 <button (click)="increaseBy(1)">+1</button>
 <button (click)="resetBy()">Reset</button>
 <button (click)="increaseBy(-1)">-1</button>
  </body>
  </html>

  `,
}) //la clase se convierte cuando añado el decorador
export class CounterComponent{ //se declara este nombre en el modulo app.module.ts
  public title:string="Counter";
  public counter:number=10;
  public aux:number=this.counter;

  increaseBy(value:number):void{
    this.counter+=value;
  }
  resetBy():void{
    this.counter=this.aux;
  }

}
