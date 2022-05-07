import { Component, OnInit } from '@angular/core';
import { Day } from './day.model';
import { WeekService } from './week.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
  providers: [WeekService]
})
export class WeekComponent implements OnInit {
  days: Day[] = [];
  constructor(private weekService: WeekService) {

  }

  ngOnInit(): void {
    this.weekService.initializeWeek();
    this.days = this.weekService.getWeek();
  }

}
