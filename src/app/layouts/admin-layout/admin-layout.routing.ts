import { Routes } from '@angular/router';

import { AuthGuardService as AuthGuard} from '../../generic/security/login/shared/auth-guard.service';
import { UserComponent } from 'src/app/generic/security/user/user.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'home', canActivate: [AuthGuard] },
  { path: '/', /*canActivate: [AuthGuard]*/ },
  { path: 'user-profile', component: UserComponent, /*canActivate: [AuthGuard]*/},
  { path: 'permisos' },
  { path: 'permisos2' },
  { path: 'permisos3' }
  //{
  //  path: '',
  //  children: [
  //    { path: 'configuraciones', canActivate: [AuthGuard], loadChildren: '../../gestion-eventos/configuraciones/configuraciones.module#ConfiguracionesModule' }
  //  ]
  //}
];
