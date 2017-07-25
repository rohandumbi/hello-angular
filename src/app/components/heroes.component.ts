import { Component, OnInit  } from '@angular/core';
import { Router  } from '@angular/router';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: '../templates/heroes.component.html',
  styleUrls: ['../stylesheets/heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onNotify(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //noinspection TypeScriptUnresolvedFunction
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
