import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public clicks: number = 0;

  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

  getClicks(): void {
    this.counter.getClicks().then((clicks) => {
      console.log('Got clicks returned');
      console.log(clicks);
      this.clicks = clicks;
    });
  }

  onClick(): void {
    this.getClicks();
  }

}
