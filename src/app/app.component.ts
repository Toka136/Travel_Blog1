import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogListComponent } from "./project_components/blog-list/blog-list.component";
import { LoginComponent } from "./project_components/login/login.component";
import { MainComponent } from "./project_components/main/main.component";
import { Router } from '@angular/router';
import { HeaderComponent } from "./project_components/header/header.component";
import { Page1Component } from "./project_components/page1/page1.component";
import { Page2Component } from "./project_components/page2/page2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogListComponent, LoginComponent, MainComponent, HeaderComponent, Page1Component, Page2Component],
  
  styleUrl: './app.component.css',
  template:`
  <app-header></app-header>
  <app-main></app-main>
  `
})
export class AppComponent {
  title = 'final';
 
}
