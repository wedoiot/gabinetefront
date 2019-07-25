import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../../services/global';
import { User } from '../models/user';
import { LoginService } from '../../../security/login/shared/login.service';

@Injectable()
export class UserService {

    private url:any;
    private server:string;
    constructor(
        private _login:LoginService,
        public _http: HttpClient
        ) {
        this.url = GLOBAL.User;
        this.server = GLOBAL.server;
    }

    getAllUsers():Observable<any>{
        let headers = new HttpHeaders()
                                    .set('Content-Type', 'application/json')
                                    .set('Authorization', this._login.getToken());
        return this._http.get(`${this.server}${this.url.Users}`, { headers:headers});
    }

    getAllRoles():Observable<any>{
        let headers = new HttpHeaders()
                                    .set('Content-Type', 'application/json')
                                    .set('Authorization', this._login.getToken());
        return this._http.get(`${this.server}${this.url.Roles}`, { headers:headers});
    }
}