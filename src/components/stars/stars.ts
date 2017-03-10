import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-stars',
  templateUrl: 'stars.html'
})
export class StarsComponent {

  public average: number;


  @Input()
  set avg(avg: number) {
    // Here you can do what you want with the variable
    this.average = avg;
  }


  constructor() {

  }

}
