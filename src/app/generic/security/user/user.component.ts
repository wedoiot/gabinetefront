import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../login/shared/login.service';
import { User } from './models/user';
//import { UserLogin } from './models/login';
//import { LoginService } from './shared/login.service';

@Component({
	selector: 'usermodify',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	providers: [LoginService]
})

export class UserComponent implements OnInit {

	user: User;
	private pass = '********';
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loginService: LoginService
	) { }

	ngOnInit() {
		this.user = new User();
		this.getUser();
	}

	getUser(){
		this.user = this._loginService.getIdentity();
		this.user.password = this.pass;
		console.log(this.user)
	}

	onSubmit() {
		console.log('holaaa')
	}

	b64EncodeUnicode(str) {
		return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
			return String.fromCharCode(parseInt(p1, 16));
		}));
	}
	b64DecodeUnicode(str) {
		return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			}).join(''));
	}
}