import { Form, NgForm } from '@angular/forms';
import {LoginUser} from '../login/login-resolver.service'


export class RegisterService {
    loginUser: LoginUser = {email: '', password: ''};

    initializeRegisterDetail(form: NgForm | undefined){
        this.loginUser.email = form?.value.userData.email;
        this.loginUser.password = form?.value.userData.password;
        console.log("initilaize method, login detail ")
        console.log(this.loginUser);
        return this.loginUser;
    }

    getLoginUser(){
        return this.loginUser;
    }
    
}