import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UtlisateursComponent} from './utlisateurs/utlisateurs.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' }, // Redirection par défaut
  { path: 'courses', component: CoursesComponent },        // Page des cours
  { path: 'utilisateurs', component:  UtlisateursComponent }, // Page des utilisateurs
  { path: '**', component: NotFoundComponent },    
  { path: '', redirectTo: '/courses', pathMatch: 'full' },        // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
