import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'hero-list',
  templateUrl: '../templates/hero-list.component.html',
  styleUrls: ['../stylesheets/hero-list.component.css']
})

export class HeroListComponent {
  @Input() heroes: Hero[];
  @Output() notify: EventEmitter<Hero> = new EventEmitter<Hero>();
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.notify.emit(hero);
  }
}
