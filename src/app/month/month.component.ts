import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { MonthText } from '../html-texts/login.component';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { MonthService } from './month.service';
import { Week } from './week.model';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
  providers: [MonthService]
})

export class MonthComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  month: Week[] = [];
  userName = '';
  monthText = MonthText;
  paramsSubscription: Subscription = new Subscription;
  shiftFlag = false;
  leavePage = false;

  constructor(private monthService: MonthService,
              private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService) {

  }

  ngOnInit(): void {
    this.monthService.initializeMonth();
    this.month = this.monthService.getMonth();

    // initialization from out of the component
    //if( this.route.snapshot.params['username'] !== undefined)
      this.userName = this.route.snapshot.queryParams['username'];


    console.log('username: ' + this.userName);

    // track on any change of the parrams if already in the component
    // component reload from isnside the component
    // this.paramsSubscription = this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.userName = params['username'].value;
    //     }
    //   )
  }

  ngOnDestroy() {
    // rebundent here, only for example
    this.paramsSubscription.unsubscribe();
  }

  Logout(){
    //Todo - add time out 
    this.auth.logout();
    this.router.navigate(['login']);

  }

  // Todo - move that boolean to child components 
  // for mark when shift as chosen
  setAShift(){
    this.shiftFlag = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.shiftFlag)
    {
      this.leavePage = confirm("You didn't set a shift yet ");
      if(this.leavePage)
        this.auth.logout();
        return this.leavePage; 
    }
    this.auth.logout();
      return true;
  }
    
}
