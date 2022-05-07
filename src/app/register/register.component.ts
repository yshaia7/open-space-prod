import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegisterText } from '../html-texts/login.component';
import { LoginUser } from '../login/login-resolver.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') form: NgForm | undefined;
  answer = '';
  submitted = false;
  loginText = LoginRegisterText;
  questionAnswer = '';
  // loginUser: LoginUser = {email: '', password: ''}

  user = {
    email: '',
    password: '',
    loginShare: ''
  }


  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }


  onSubmit() {


    // console.log(this.form);
    // console.log(this.form?.valid);
    console.log(this.user.email);

    this.submitted = true;
    this.user.email = this.form?.value.userData.email;
    this.user.password = this.form?.value.userData.password;
    this.user.loginShare = this.form?.value.questionAnswer;

    this.form?.reset();

    this.router.navigate(['login'], { queryParams: { email: this.user.email, password: this.user.password} } );
  }
}
