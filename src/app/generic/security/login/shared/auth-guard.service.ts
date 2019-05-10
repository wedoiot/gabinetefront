import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: LoginService, public router: Router) { }
  canActivate(): boolean {
    this.auth.isTokenValid().subscribe(
      response => {
        return true;
      },
      error => {
        this.router.navigate(['login']);
        this.auth.closeSession();
        return false;
      }
    )
    return true;
  }
}