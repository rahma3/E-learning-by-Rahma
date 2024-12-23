import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Add a CSS file for styling
})
export class LoginComponent {
  loginModel = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.loginModel.email && this.loginModel.password) {
      console.log('Form Submitted', this.loginModel);
      // Here, you can add the logic to handle the login request, like calling an API
    }
  }
}
