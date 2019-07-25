import { LoginComponent } from "./generic/security/login/login.component";
import { AuthGuardService as AuthGuard} from './generic/security/login/shared/auth-guard.service';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    {
    
        path: '',
        component: AdminLayoutComponent,
        children: [
            {path: '',loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
          ]},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
      ],
      exports: [
      ],
      providers:[AuthGuard]
})

export class AppRoutingModule {}