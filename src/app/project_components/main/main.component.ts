import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  template:`
 <router-outlet></router-outlet>`
})
export class MainComponent {
  
}
