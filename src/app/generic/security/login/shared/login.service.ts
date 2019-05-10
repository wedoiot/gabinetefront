import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/login';
import { GLOBAL } from '../../../services/global';

@Injectable()
export class LoginService {

    private identity;
    private token;
    private url:any;
    private server:string;
    constructor(public _http: HttpClient) {
        this.url = GLOBAL.Auth;
        this.server = GLOBAL.server;
    }

    login(user:UserLogin):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(`${this.server}${this.url.Login}`, params,{ headers: headers});
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');

        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }

    isTokenValid():Observable<any>{
        let headers = new HttpHeaders()
                                    .set('Content-Type', 'application/json')
                                    .set('Authorization', this.getToken());

        return this._http.get(`${this.server}${this.url.IsTokenValid}`,{ headers: headers});
    }

    closeSession(){
        localStorage.clear();
    }
}