import { Component } from '@angular/core';
import Character from './Character'
import {DoublePipe} from './pipes/double.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   show = false;
   local_Arr : any[];
   names : string = "Kripa,Krishna,Kabir";
  characters: Character[] = [
    {
      actor_name: 'Robert Dawney Junior',
      character_name: 'Iron Man',
      gender: 'Male',
      status: 'Dead'
    },
    {
      actor_name: 'Scarlett Johanson',
      character_name: 'Natasha',
      gender: 'Female',
      status: 'Dead'
    },
    {
      actor_name: 'Chris Hemsworth',
      character_name: 'Thor',
      gender: 'Male',
      status: 'Alive'
    },
    {
      actor_name: 'Unkown',
      character_name: 'Thanos',
      gender: 'Male',
      status: 'Dead'
    }
  ];

  addItem(value : any){
    let arr = this.names.split(",");
    arr.push(value);
    this.names = arr.toString();
  }

}
