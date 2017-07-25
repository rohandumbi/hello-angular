import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../templates/dashboard.component.html',
  styleUrls: ['../stylesheets/dashboard.component.css'],
  providers: [HeroService]
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
