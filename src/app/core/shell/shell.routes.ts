import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginGuardGuard, AdminGuard, VerificaTokenGuard } from '../../services/services.index';


const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [VerificaTokenGuard],
    data: { titulo: 'Dashboard' },
    loadChildren: '../dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'progress',
    data: { titulo: 'Progress' },
    loadChildren: '../progress/progress.module#ProgressModule'
  },
  {
    path: 'graficas1',
    data: { titulo: 'Graficas' },
    loadChildren: '../../graficas1/graficas1.module#Graficas1Module'
  },
  {
    path: 'promesas',
    data: { titulo: 'Progresas' },
    loadChildren: '../../pages/promesas/promesas.module#PromesasModule'
  },
  {
    path: 'rxjs',
    data: { titulo: 'Rxjs' },
    loadChildren: '../../pages/rxjs/rxjs.module#RxjsModule'
  },
  {
    path: 'account-settings',
    data: { titulo: 'Account Settings' },
    loadChildren: '../../pages/account-settings/account-settings.module#AccountSettingsModule'
  },

  //Mantenimiento
  {
    path: 'profile',
    data: { titulo: 'Prerfil de Usuario' },
    loadChildren: '../../pages/profile/profile.module#ProfileModule'
  },
  {
    path: 'usuarios',
    canActivate: [AdminGuard],
    data: { titulo: 'Mantenimiento de Usuario' },
    loadChildren: '../../pages/usuarios/usuarios.module#UsuariosModule'
  },
  {
    path: 'medicos',
    data: { titulo: 'Mantenimiento de Medicos' },
    loadChildren: '../../pages/medicos/medicos.module#MedicosModule'
  },
  {
    path: 'medico/:id',
    data: { titulo: 'Mantenimiento de Medicos' },
    loadChildren: '../../pages/medicos/medicos.module#MedicosModule'
  },
  {
    path: 'hospitales',
    data: { titulo: 'Mantenimiento de Hospitales' },
    loadChildren: '../../pages/hospitales/hospitales.module#HospitalesModule'
  },
  {
    path: 'busqueda/:termino',
    data: { titulo: 'Buscador' },
    loadChildren: '../../pages/busqueda/busqueda.module#BusquedaModule'
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // Otros
  {
    path: 'about',
    loadChildren: '../../about/about.module#AboutModule'
  },
  {
    path: 'users',
    loadChildren: '../../users/users.module#UsersModule'
  },
  {
    path: 'cash',
    loadChildren: '../../cash/cash.module#CashModule'
  },
  {
    path: 'cars',
    loadChildren: '../../cars/cars.module#CarsModule'
  }
];

export const SHELL_ROUTES = RouterModule.forChild(routes);
