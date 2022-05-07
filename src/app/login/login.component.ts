import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginRegisterText } from '../html-texts/login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerText = LoginRegisterText;

  constructor(private router: Router,
    private route: ActivatedRoute, private auth: AuthService) { }

  @ViewChild('f') form: NgForm | undefined;
  answer = '';
  submitted = false;

  user = {
    email: '',
    password: '',
    loginShare: ''
  }

  questionAnswer = '';
  ngOnInit(): void {
    // initilaize Email get from register component
    this.user.email = this.route.snapshot.queryParams['email'];
    this.user.password = this.route.snapshot.queryParams['password'];

  }

  onSubmit() {

    // console.log(this.form);
    // console.log(this.form?.valid);

    this.copyUsersDetail();

    this.form?.reset();

    // relative rout is rebundant, only example
    //this.router.navigate(['table'], { relativeTo: this.route });
    this.auth.login();
    this.router.navigate(['table'], {queryParams: {username: this.user.email}});
  }

  copyUsersDetail() {
    this.submitted = true;
    this.user.email = this.form?.value.userData.email;
    this.user.password = this.form?.value.userData.password;
    this.user.loginShare = this.form?.value.questionAnswer;
  }

}
