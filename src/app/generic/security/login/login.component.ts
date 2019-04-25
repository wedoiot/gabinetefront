import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserLogin } from './models/login';
import { LoginService } from './shared/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [LoginService]
})

export class LoginComponent implements OnInit {
    closeResult: string;
	userLogin: UserLogin;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loginService: LoginService,
		private modalService: NgbModal
	) { }

	ngOnInit() {
		this.userLogin = new UserLogin();
	}

	onSubmit() {
		this.userLogin.password = this.b64EncodeUnicode(this.userLogin.password);

		this._loginService.login(this.userLogin).subscribe(
			response => {
				if(response.entity == null){
					console.log(response.message);
					this.userLogin.password = this.b64DecodeUnicode(this.userLogin.password);
					//notification
				}
				else{
					localStorage.setItem('identity', JSON.stringify(response.entity.user));
					localStorage.setItem('token', response.entity.token);
					this._router.navigate(['/']);
				}
			},
			error => {
				console.log(error)
				this.userLogin.password = this.b64DecodeUnicode(this.userLogin.password);
			});
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

	open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}