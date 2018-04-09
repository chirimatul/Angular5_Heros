import { Injectable } from '@angular/core';

import { Hero } from "../models/hero";

@Injectable()
export class HeroService {

  heros: Hero[] = [
    { id: 1, name: 'Mr. Nice', description: " this is some description", canFly: false },
    { id: 2, name: 'Narco', description: " this is some description", canFly: true },
    { id: 3, name: 'Bombasto', description: " this is some description", canFly: false },
    { id: 4, name: 'Celeritas', description: " this is some description", canFly: false },
    { id: 5, name: 'Magneta', description: " this is some description", canFly: true },
    { id: 6, name: 'RubberMan', description: " this is some description", canFly: false },
    { id: 7, name: 'Dynama', description: " this is some description", canFly: false },
    { id: 8, name: 'Dr IQ', description: " this is some description", canFly: true },
    { id: 9, name: 'Magma', description: " this is some description", canFly: false },
    { id: 10, name: 'Tornado', description: " this is some description", canFly: true }
  ];

  constructor() { }

  GetHeros() {

    return this.heros;
  }

  GetHero(id: number) {

    let hero: Hero;
    this.heros.forEach((item, index) => {
      debugger
      if (item.id == id) {
        hero = item;
        return false;
      }
    });
    debugger
    return hero;
  }

  AddNewHero(hero: Hero) {
    if (hero.id > 0) {
      this.heros.forEach((item,index)=>{
        if(item.id == hero.id){
          item = hero;
          return false;
        }
      });
    }
    else {
      hero.id = this.heros.length + 1;
      this.heros.push(hero);
    }
  }

  removeHero(id: number) {
    this.heros.forEach((item, index) => {
      if (item.id === id) {
        this.heros.splice(index, 1);
        return false;
      }
    });
  }

}
