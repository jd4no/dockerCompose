import { Component, OnInit } from '@angular/core';
import { ClickerService } from '../services/clicker.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

  constructor(private clicker: ClickerService) { }

  ngOnInit() {
  }

  onClick(): void {
    console.log('Button clicked');
    this.clicker.sendClick();
  }

}
