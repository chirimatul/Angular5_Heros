import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../servies/hero.service';
import {  ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero:Hero;
  test:number=60;
  constructor(private heroService:HeroService, private activeRoute:ActivatedRoute) {
    debugger;
    let id:number;
    this.activeRoute.params.subscribe( params => id=params.id ); // way 1
    id = +this.activeRoute.snapshot.paramMap.get('id'); // way
    //this.route.snapshot.params.get("id"); ?
    //id=+"90";
    
    let str:string;
    if(id > 0){
      this.hero = heroService.GetHero(Number(id));
      if(this.hero == null) this.hero = new Hero();
    }
    else  {
      this.hero = new Hero();
    }
   }

  ngOnInit() {

  }

  AddNewHero(){
    
    this.heroService.AddNewHero(this.hero);
    this.hero= new Hero();
  }
}
