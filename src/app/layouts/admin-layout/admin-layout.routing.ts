import { Routes } from '@angular/router';

import { AuthGuardService as AuthGuard} from '../../generic/security/login/shared/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
  { path: 'home', canActivate: [AuthGuard] },
  { path: '', canActivate: [AuthGuard] },
  { path: 'permisos' },
  { path: 'permisos2' },
  { path: 'permisos3' },
  {
    path: '',
    children: [
      { path: 'configurations', canActivate: [AuthGuard], loadChildren: '../../generic/configurations/user/user.module#UserModule' }
    ]
  }
];
