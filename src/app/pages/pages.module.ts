import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, LoginComponent, SignupComponent],
  imports: [CommonModule],
})
export class PagesModule {}
