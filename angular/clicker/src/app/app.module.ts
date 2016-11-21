import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClickerService } from './services/clicker.service';
import { CounterService } from './services/counter.service';

import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClickerService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
