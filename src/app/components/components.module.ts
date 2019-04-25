import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from '../generic/security/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    SidebarComponent
  ],
  providers:[
  ]
})
export class ComponentsModule { }
