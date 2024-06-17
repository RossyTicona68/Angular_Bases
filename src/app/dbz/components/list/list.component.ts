import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name : 'Trunks',
    power: 10
  }
]
  // @Output()
  // public onDelete:EventEmitter<number>=new EventEmitter();
  @Output()
  public onDeleteId:EventEmitter<string>=new EventEmitter();


  // onDeleteCharacter(index:number):void{
  // //TODO:Emitir el id del personaje
  // console.log(index);
  // this.onDelete.emit(index);
  // }


  onDeleteCharacterId(id?:string):void{
    //TODO:Emitir el id del personaje
    if(!id)
      return;
    this.onDeleteId.emit(id);
    }
}
