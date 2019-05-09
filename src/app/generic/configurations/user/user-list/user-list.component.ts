import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../../../security/login/shared/login.service';
import { User } from '../../../security/user/models/user';
import * as _ from 'lodash';
import { UserService } from '../shared/user.service';

@Component({
	selector: 'userlist',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
	providers: [LoginService, UserService]
})

export class UserListComponent implements OnInit {
	campos = [{
		Id: 'name',
		Nombre: 'Nombre',
		Valor: ''
	}, {
		Id: 'surname',
		Nombre: 'Apellido',
		Valor: '',
		//Tipo: 'Fecha'
	}, {
		Id: 'username',
		Nombre: 'Nombre de Usuario',
		Valor: '',
	}, {
		Id: 'email',
		Nombre: 'Correo Electrónico',
		Valor: '',
	}
	];

	users = Array<User>();
	allUsers = Array<User>();
	user: User;
	officialUser: User;
	private pass = '********';
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loginService: LoginService,
		private _userService: UserService
	) {
		this.users = [];
	}

	ngOnInit() {

		this.user = this.officialUser = new User();
		this.getUsers();
	}

	getUsers() {
		this._userService.getAllUsers().subscribe(
			response => {
				this.users = this.allUsers = response.entity;
				console.log(response)
			},
			error => {
				//mensaje de advertencia con indicando problema obteniendo los datos
			}
		);
	}

	b64EncodeUnicode(str) {
		return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
			return String.fromCharCode(parseInt(p1, 16));
		}));
	}
	b64DecodeUnicode(str) {
		return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	}

	variable() {
		console.log("hola")
	}

	filtrado(entidad: any[]) {
		this.users = entidad;
	}
}