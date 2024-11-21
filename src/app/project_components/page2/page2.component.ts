import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  postTitle: string = '';
  postText: string = '';
  image:string='';
 
  
  onSubmit(): void {
   
    if (!this.postTitle || !this.postText) {
     let alert= <HTMLElement>document.getElementById("alert");
     alert.textContent="Please fill in all fields.";
      return;
    }
    
  this.addpost();
    this.resetForm();
  }
  
  addpost()
  {
    console.log(this.image);
    let  posts=document.querySelector(".post-grid");
    let newpost=document.createElement("div");
    let image=document.createElement("img");
    let card=document.createElement("div");
    let words=document.createElement("div");
    let placement=document.createElement("div");
    let heart=document.createElement("div");
    let h5=document.createElement("h5");
    let p=document.createElement("p");
  
    newpost.classList.add("post");
    newpost.classList.add("card");
    newpost.classList.add("shadow");
    words.classList.add("words");
    card.classList.add("card-body");
    h5.classList.add("card-title");
    p.classList.add("text-title");
    image.classList.add("img-fluid");
    image.classList.add("post-image");
    placement.classList.add("placement");
    heart.classList.add("heart");
    image.setAttribute("src",this.image);
    
    h5.innerHTML=this.postTitle;
    p.innerHTML=this.postText;
    newpost.append(image);
    words.append(h5);
    words.append(p);
    placement.append(heart);
    card.append(words);
    card.append(placement);
    newpost.append(card);
    posts?.append(newpost);
   
   

  }
  active(id:number):void
  {
    let x=document.querySelectorAll(".heart");
    x[id].classList.toggle("is-active");
  }


  resetForm(): void {
    this.postTitle = '';
    this.postText = '';
    this.image = '';
  }
}
