import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../../services/global';
import { User } from '../models/user';
import { LoginService } from '../../login/shared/login.service';

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

    modifyUser(user:User):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders()
                                    .set('Content-Type', 'application/json')
                                    .set('Authorization', this._login.getToken());

        return this._http.put(`${this.server}${this.url.Modify}`, params,{ headers: headers});
    }

    getUserByToken():Observable<any>{
        let headers = new HttpHeaders()
                                    .set('Content-Type', 'application/json')
                                    .set('Authorization', this._login.getToken());
        return this._http.get(`${this.server}${this.url.UserByToken}`, { headers:headers});

    }
}