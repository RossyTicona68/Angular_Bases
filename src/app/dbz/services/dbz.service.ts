import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[{
    id:uuid(),
    name: 'Krillin',
    power: 10
  },
  {
    id:uuid(),
    name: 'Goku',
    power: 2434
  },
  {
    id:uuid(),
    name:'Vegeta',
    power:5000
  }
];
  addCharacter(character: Character):void{
    const newCharacter:Character={
      id:uuid(),...character //toma todas sus propiedades y esparcelas en el nuevo objeto: newCharacter

    };

    this.characters.push(newCharacter);
  }
  // onDeleteCharacter(index:number){
  //   this.characters.splice(index, 1);
  // }
   deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id!==id);
  }
}
