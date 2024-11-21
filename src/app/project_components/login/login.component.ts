import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  goToMainPage() {
    if(this.logemail==="motravel@gmail.com" &&this.logpassword==="123456asd"||this.logemail==="Rotravel@gmail.com"&&this.logpassword==="0987654321")
    {
    localStorage.setItem("currentuser",JSON.stringify(this.logemail));
    localStorage.setItem("pass",JSON.stringify(this.logpassword));
    this.router.navigate(['main']); // Adjust the route as per your setup
    }
    else
    {
      localStorage.setItem("currentuser",JSON.stringify("User"));
      localStorage.setItem("pass",JSON.stringify("password"));
      this.router.navigate(['main']);
    }
  }
  error:string="";
   email:string="";
   password:string="";
   name:string="";
   logemail:string="";
   logpassword:string="";
    showNextImage():void {
      let images = document.querySelectorAll(" .gallery img");
      let currentIndex = 0;
      setInterval(function()
      {
        images[currentIndex].classList.add("none"); 
        images[currentIndex].classList.remove("block");
        currentIndex = (currentIndex + 1) % (images).length; 
        images[currentIndex].classList.add("block");  
        images[currentIndex].classList.remove("none"); // Show next image
      }, 3000);
    
   }
   valid():void
   {
    console.log(this.name);
    let valid = true;
    let errorMessage = "";

    if (this.name.length < 3) {
      errorMessage += "Name must be at least 3 characters long.\n";
      valid = false;
    }

    if (!this.email.includes('@')) {
      errorMessage += "Please enter a valid email address.\n";
      valid = false;
    }

    if (this.password.length < 6) {
      errorMessage += "Password must be at least 6 characters long.\n";
      valid = false;
    }

    if (!valid) {
      alert(errorMessage);
    }
   
   }

  ngOnInit(): void
  {
    this.showNextImage();
  }
  
}
