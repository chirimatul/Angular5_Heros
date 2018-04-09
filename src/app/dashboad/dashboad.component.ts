import { Component, OnInit } from '@angular/core';
import { HeroService } from '../servies/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})

export class DashboadComponent implements OnInit {

  Heros: Hero[];
  flyingHero: string = "herofly.gif";
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.Heros = this.heroService.GetHeros();
  }

  removeHero(id: number) {
    this.heroService.removeHero(id);
    
  }

  editHero(id: number) {

  }

}
