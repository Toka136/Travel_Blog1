import { Routes } from '@angular/router';
import { BlogListComponent } from './project_components/blog-list/blog-list.component';
import { LoginComponent } from './project_components/login/login.component';
import { Page1Component } from './project_components/page1/page1.component';
import { Page2Component } from './project_components/page2/page2.component';

export const routes: Routes = [
    {
        path:"main",
        component:BlogListComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"motravel",
        component : Page1Component
    },
    {
        path:"Rotravel",
        component : Page2Component
    },
   
    {
        path:"",
        pathMatch:'full',
        redirectTo:"login"
    },
    
];
