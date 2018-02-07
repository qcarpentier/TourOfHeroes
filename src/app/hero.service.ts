import { Injectable } from '@angular/core';

// Using RxJS to implement Observable
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of"
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable()
export class HeroService {

  // Service-in-service scenario > inject the MessageService into the HeroService which is injected into the HeroesComponent
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // Returns an Observable
    return of(HEROES);
  }

}
