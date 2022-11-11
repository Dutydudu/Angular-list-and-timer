import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './services/timer.service';
import { DisciplineComponent } from './components/discipline/discipline.component';
import { DisciplinesService } from './services/disciplines.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'timer', component: TimerComponent },
      { path: 'disciplines', component: DisciplineComponent },
    ]),
  ],
  declarations: [AppComponent, TimerComponent, DisciplineComponent],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinesService],
})
export class AppModule {}
