import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Luis Eduardo';
  lastname: string = 'Duarte';
  ra: string = '0050832021022';
}
