import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  username:string="";
  password:string="";
  ngOnInit(): void {
    setInterval(() => {
      this.displayheader();
    }, 50);  // Execute displayheader every 1 second
  }
  displayheader(): void {
    // Get the current URL path
    let url=(this.router.url);
    let header=document.querySelector(".main-header");
    if(url==="/login")
    {
      header?.classList.add("hidden");
    }
    else
    {
      header?.classList.remove("hidden");
    }
  }
  mainpage()
  {
    this.router.navigate(['main']);
    
  }
  change():void
  {
    let x=localStorage.getItem("currentuser");
    let y=localStorage.getItem("pass");
    if(x)
    {
     this.username=JSON.parse(x);
     console.log(this.username);
    }
    if(y)
    {
      this.password=JSON.parse(y);
    }
    
    if(this.username==="motravel@gmail.com" &&this.password==="123456asd")
    {console.log("true");
      this.router.navigate(['motravel']);
    }
    else
      {
        this.router.navigate(['Rotravel']);
      }
  }
}
