import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

// Define your routes
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }, // Fallback route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,  // Add FormsModule here for ngModel
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
