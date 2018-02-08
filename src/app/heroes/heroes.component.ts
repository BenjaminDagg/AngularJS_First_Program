import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //current hero the user clicked on
  selectedHero: Hero;
  
  
  //array of every hero
  heroes: Hero[];

  //creates heroService property and sets it to the singleton of HeroService
  constructor(private heroService: HeroService) { 
    
  }

  ngOnInit() {
    this.getHeroes()
  }
  
  //when click on a hero in the list item set that hero the selected hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}
