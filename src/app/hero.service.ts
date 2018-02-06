import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

// Using RxJS to implement Observable
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    // Returns an Observable
    return of(HEROES);
  }

}
