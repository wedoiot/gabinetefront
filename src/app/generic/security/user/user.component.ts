import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../login/shared/login.service';
import { User } from './models/user';
import * as _ from 'lodash';
import { UserService } from './shared/user.service';

@Component({
	selector: 'usermodify',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	providers: [LoginService,UserService]
})

export class UserComponent implements OnInit {

	user: User;
	officialUser :User;
	private pass = '********';
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loginService: LoginService,
		private _userService: UserService
	) { }

	ngOnInit() {
		this.user = this.officialUser = new User();
		this.getUser();
	}

	getUser(){
		this._userService.getUserByToken().subscribe(
			response => {
				this.officialUser= response.entity;
				this.officialUser.password = this.pass;
				console.log(this.officialUser)
				this.user = _.clone(this.officialUser,true);
			},
			error => {
				//mensaje de advertencia con indicando problema obteniendo los datos
			}
		);
	}

	saveChanges() {
		var userModify = _.clone(this.user,true);
		if(!this.withoutChanges()){
			if(userModify.password === this.pass){
				delete userModify['password'];
			}
			else {
				userModify.password = this.b64EncodeUnicode(userModify.password);
			}
			this._userService.modifyUser(userModify).subscribe(
				response => {
					console.log(response);
				},
				error => {
					console.log(error);
				}
			)
		}
		else {
			//Notificación "SIN MODIFICACIONES"
		}
	}

	withoutChanges() {
        return _.isEqual(this.officialUser, this.user);
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