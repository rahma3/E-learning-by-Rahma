import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [], // Add any additional imports here if necessary, e.g., CommonModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Fixed the typo here
})
export class NavbarComponent {
  openModal() {
    console.log("Modal opened");
    // Add logic to open the modal here
  }

  // Define similar methods for other buttons:
  search() {
    console.log("Search clicked");
  }

  openContact() {
    console.log("Contact clicked");
  }

  switchLanguage() {
    console.log("Language switch clicked");
  }

  openProfile() {
    console.log("Profile clicked");
  }

  openMoreOptions() {
    console.log("More options clicked");
  }
}
