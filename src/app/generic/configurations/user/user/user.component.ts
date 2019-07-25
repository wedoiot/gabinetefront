import { UserService } from "../shared/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/generic/security/user/models/user";
import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { Role } from "../models/role";

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    providers:[UserService]
})

export class UserComponent implements OnInit {
    id: number;
    user: User;
    userOfficial: User;
    roles: Array<Role>;
    sub: any;
    isEdit = false;
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _userService:UserService,
        ) {}

    ngOnInit() {
        this.roles = new Array<Role>();
        this.getRoles();
        
          this.selectedItems = [
            //Aquí debo cargar el rol del usuario actual.    
          ];
          this.dropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            //selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
          };


        this.user = new User();
        this.userOfficial = new User();
        this.sub = this.route.params.subscribe(
            params => {
                const id = params['id'];
                if(id) {
                    this.isEdit = true;
                    //this.getUser(id);
                    this.selectedItems = [
                        //Aquí debo cargar el rol del usuario actual.    
                      ];
                }
                else {
                    this.isEdit = false;
                }
            }
        )
    }

    onItemSelect(item: any) {
        console.log(item);
      }
      onSelectAll(items: any) {
        console.log(items);
      }

    getRoles(){
        this._userService.getAllRoles().subscribe(
            response => {
                this.dropdownList = response.entity.map(x => {
                    return {
                        item_id: x._id,
                        item_text: x.name
                    }
                })
                
                console.log(response);
            },
            error => {
                console.log(error);
            }
        )
    }

    save(){
        console.log("Save")
        if(this.isEdit){

        }
    }

    withoutChanges() {
        if (this.isEdit) {
            return _.isEqual(this.userOfficial, this.user);
        } else {
            return false;
        }
    }

    volver(){
        this.router.navigate(['/configurations/users']);
    }
} 