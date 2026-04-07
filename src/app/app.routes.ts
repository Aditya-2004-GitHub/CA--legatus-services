import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'service/:id',
    loadComponent: () => import('./pages/service-detail/service-detail').then(m => m.ServiceDetail)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
