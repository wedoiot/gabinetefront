import { Injectable } from '@angular/core';
import { LoginService} from './login.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    if (this.auth.getToken()===null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}