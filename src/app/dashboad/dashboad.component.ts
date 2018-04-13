import { Component, OnInit } from '@angular/core';
import { HeroService } from '../servies/hero.service';
import { Hero } from '../models/hero';
import { UserService } from '../servies/user.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css'],
  providers: [UserService],

})

export class DashboadComponent implements OnInit {

  Heros: Hero[];
  flyingHero: string = "herofly.gif";
  constructor(private heroService: HeroService, private userService: UserService) { }

  ngOnInit() {
    this.Heros = this.heroService.GetHeros();
  }

  removeHero(id: number) {
    this.heroService.removeHero(id);

  }

  editHero(id: number) {

  }

  calledFromChild(str) {
    alert(str);
  }

}
