import { Day } from "./day.model";

export class WeekService {
  days: Day[] = [];


  initializeWeek() {
    for (let day = 0; day < 7; day++) {
      this.days.push(new Day(day.toString(2)));
    }
  }

  getWeek() {
    return this.days;
  }


}
