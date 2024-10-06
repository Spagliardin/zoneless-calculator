import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent: () => import('@/calculator/views/calculator-view/calculator-view.component'),
  },
  {
    path: 'form',
    loadComponent: () => import('@/form/views/form-test-ngneat-error-tailor/form-test-ngneat-error-tailor.component'),
  },
  {
    path: '**',
    redirectTo: 'calculator',
  }
];
