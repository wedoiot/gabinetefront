import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserEditGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = +route.url[2].path;
        if (isNaN(id) || id < 1) {
            this.router.navigate(['/configurations/user']);
            return false;
        };
        return true;
    }
}