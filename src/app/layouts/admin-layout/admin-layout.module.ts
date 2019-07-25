import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuardService as AuthGuard} from '../../generic/security/login/shared/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { UserModule } from 'src/app/generic/configurations/user/user.module';
import {DataTableModule} from "angular-6-datatable";
import {NgxPaginationModule} from 'ngx-pagination';
//import { SharedModule } from '../../shared/shared.module';
//import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    //NgxLoadingModule.forRoot({}),
    NgxPaginationModule,
    DataTableModule,

  ],
  declarations: [
  ],
  exports:[
  ],
  providers:[AuthGuard]
})

export class AdminLayoutModule {}
