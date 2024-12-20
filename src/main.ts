import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  
  
  { path: '**', redirectTo: '' } // Redirection en cas de route inconnue
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
