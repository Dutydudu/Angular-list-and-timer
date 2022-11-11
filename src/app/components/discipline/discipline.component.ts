import { Component, OnInit, Input } from '@angular/core';
import { DisciplinesService } from '../../services/disciplines.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css'],
})
export class DisciplineComponent implements OnInit {
  @Input() name: string;
  @Input() hour: string;
  @Input() day: string;

  constructor(public disciplines: DisciplinesService) {}
  ngOnInit() {}
}
