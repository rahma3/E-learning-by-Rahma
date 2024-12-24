import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule, // Nécessaire pour [(ngModel)]
    RouterModule.forChild([
      { path: '', component: LoginComponent }, // Route pour ce module
    ]),
  ],
})
export class LoginModule {}
