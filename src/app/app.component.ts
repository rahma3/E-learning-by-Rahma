import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from @angular/material/sli

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elearning-frontend';
}
