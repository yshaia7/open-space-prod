import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"; 
import { Observable } from "rxjs";

export interface LoginUser{
    email: string;
    password: string;
}

// export class LoginResolver implements Resolve<LoginUser> {
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoginUser> | Promise<LoginUser> | LoginUser {
//         const loginUser: LoginUser  = { email: 'as', password: "hello" };
//         return loginUser;
//     }
// }