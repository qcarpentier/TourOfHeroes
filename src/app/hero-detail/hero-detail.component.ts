import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  changeName = false;
  buttonText: string = "Update name";

  constructor() { }

  ngOnInit() {
  }

  updateName(): void{
    if(!this.changeName){
      this.changeName = true;
      this.buttonText = "Save";
    }
    else{
      this.changeName = false;
      this.buttonText = "Update name";
    }
  }
}
