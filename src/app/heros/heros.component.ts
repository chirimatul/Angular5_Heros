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
  constructor(private heroService:HeroService, private route:ActivatedRoute) {
    debugger;
    var id:number;
    this.route.params.subscribe( params => id=params.id );

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
