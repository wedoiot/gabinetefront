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

const routes: Routes = [
    { path: 'user/userlist', component: UserListComponent },

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
    ],
    declarations: [
        UserListComponent
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
