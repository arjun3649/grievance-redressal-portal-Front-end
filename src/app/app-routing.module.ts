// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'grievance-form', loadComponent: () => import('./grievance-form/grievance-form.component').then(m => m.GrievanceFormComponent) },
  { path: 'track-grievance', loadComponent: () => import('./track-grievance/track-grievance.component').then(m => m.TrackGrievanceComponent) },
  { path: '', redirectTo: '/grievance-form', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/grievance-form' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
