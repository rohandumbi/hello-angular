import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'hero-list',
  templateUrl: '../templates/hero-list.component.html',
  styleUrls: ['../stylesheets/hero-list.component.css'],
  providers: [HeroService]
})

export class HeroListComponent {
  @Input() heroes: Hero[];
  @Output() notify: EventEmitter<Hero> = new EventEmitter<Hero>();
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.notify.emit(hero);
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
