import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Mega Electronix';
  subtitle: string = 'Edit task';

  activeView: string = 'Details'; // Default view

  // Method to handle view change
  onViewChange(view: string) {
    this.activeView = view;
    console.log('View changed to: ', this.activeView); // Log the change for debugging
  }
}
