import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tdf-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practice-angular-material';
  contact: Contact = {
    firstname: '',
    lastname: '',
  };
}

interface Contact {
  firstname: string;
  lastname: string;
}
