import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { DataTableModule } from "angular-6-datatable";
import { NgxPaginationModule } from "ngx-pagination";
import { MultiFiltroModule } from "src/app/shared/multi-filtro/multi-filtro.module";
import { UserService } from "../../security/user/shared/user.service";
import { UserComponent } from "./user/user.component";
import { UserEditGuard } from "./user/user-edit-guard.service";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'users/create', component: UserComponent},
    { path: 'users/edit/:id', component: UserComponent}
    //CONFIGURAR EL USER EDIT GUARD PARA MANEJAR STRING 
    //{ path: 'users/edit/:id', canActivate: [UserEditGuard], component: UserComponent}

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        RouterModule,
        NgbModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        FormsModule,
        DataTableModule,
        NgxPaginationModule,
        MultiFiltroModule,
        NgMultiSelectDropDownModule.forRoot(),
    ],
    declarations: [
        UserListComponent,
        UserComponent
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        UserService,
        UserEditGuard
    ]
})
export class UserModule { }
