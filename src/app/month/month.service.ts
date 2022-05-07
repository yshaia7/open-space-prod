
import { Week } from "./week.model";


export class MonthService {
  month: Week[] = [];


  initializeMonth() {
    for (let week = 0; week < 4; week++) {
      this.month.push(new Week(week.toString(2)));
    }
  }

  getMonth() {
    return this.month;
  }

}

