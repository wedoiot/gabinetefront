import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from '../generic/security/user/user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../generic/security/user/shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    UserComponent 
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    UserComponent
  ],
  providers:[
    UserService
  ]
})
export class ComponentsModule { }
