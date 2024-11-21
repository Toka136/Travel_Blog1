
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blog } from '../../classes/blog';
import data from '../../files/data.json';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  // BlogList:{imgurl:string,title:string,name:string,comment:string,CategoryID:number,date:string}[]=data;
  BlogList:any[];
  CategoryList:any[];
  cat:number=0;
  searchvalue:string="none";
  send:boolean=false;
  imgurl:string="";
  nameperosn:string="";
  blogtitle:string="";
  commentblog:string="";
  cat_blog:number=0;
  isMore:boolean=true;
  maxLength:number=150;
  constructor()
  {
    this.BlogList=[
      {
        imgurl:"/pyramids.jpeg",
        title:"Visiting the Pyramids of Giza",
        name:"Jack Tom",
       comment:"Visiting the Pyramids of toka Giza was an awe-inspiring experience! The ancient structures are truly breathtaking, and the history surrounding them is incredible. The views, especially at sunset, are unforgettable. A must-visit for anyone interested in history and culture!",
       CategoryID:1,
       date:"Jan 18, 2019 at 2:00 pm",
       more:"1"
     },
     {
         imgurl:"/turkey1.jpg",
         title:"Visiting the Sumela Monastery",
         name:"Ali Hossam",
         comment:"Visiting the Sumela Monastery toka was an unforgettable experience! Nestled in the cliffs of the Pontic Mountains, the monastery's location and breathtaking views are as impressive as its rich history. The blend of nature and ancient architecture creates a serene and mystical atmosphere. It's a must-visit for anyone exploring Turkey!",
         CategoryID:2,
         date:"Jan 18, 2019 at 2:00 pm",
         more:"1"
     },
     {
         imgurl:"/eiffel1.jpeg",
         title:"Visiting the Eiffel Tower",
         name:"Ronaldo",
         comment:"Visiting the Eiffel Tower was a dream come true! The iconic structure offers stunning panoramic views of Paris, especially at sunset. Whether you admire it from the ground or venture to the top, the experience is unforgettable. A must-see landmark that captures the romance and charm of Paris! "
         ,CategoryID:4,
         date:"Jan 18, 2019 at 2:00 pm",
         more:"1"
     },
         {imgurl:"/espana.jpeg",
         title:"Visiting Spain is an unforgettable experience",
         name:"Noran Hindy",
         comment:"Visiting Spain is an unforgettable experience, offering a perfect blend of rich history, vibrant culture, stunning architecture, and world-class cuisine. Whether exploring the lively streets of Barcelona, soaking in the artistic charm of Madrid, or relaxing on the pristine beaches of Costa del Sol, Spain has something for every traveler. Its warm, welcoming atmosphere and diverse attractions make it a top destination for adventure and relaxation alike.",
         CategoryID:6,
         date:"Dec 22, 2023 at 5:00 pm",
         more:"1"
     },
     {
         imgurl:"/BurjKhalifa.jpg",
         title:"Visiting Burj Khalifa",
         name:"Mohamed Hassna",
         comment:"Visiting Burj Khalifa was absolutely breathtaking! Standing at the top of the world’s tallest building offers unparalleled views of Dubai’s skyline and the vast desert beyond. The sleek architecture and modern design are impressive, and the experience of watching the sunset from the observation deck is unforgettable. A must-see for anyone visiting Dubai!",
         CategoryID:5,
         date:"Dec 15, 2019 at 7:00 pm",
         more:"1"
     },
     {
         imgurl:"/rome3.jpeg",
         title:"Visiting Rome was an incredible experience!",
         name:"Jana Ali",
         comment:"Visiting Rome was an incredible experience! The city's rich history, from the grandeur of the Colosseum to the beauty of the Vatican, is awe-inspiring. Every corner is filled with stunning architecture, delicious food, and vibrant culture. Rome truly feels like an open-air museum—it's a must-visit for anyone who loves history, art, and adventure!",
         CategoryID:3,
         date:"Jan 18, 2019 at 2:00 pm",
         more:"1"
     },
     {
         imgurl:"turkey2.jpg",
         title:"Visiting the Lycian Tombs was a fascinating experience!",
         name:"Toka Karam",
         comment:"Visiting the Lycian Tombs was a fascinating experience! Carved into the cliffs, these ancient tombs are a testament to the ingenuity and artistry of the Lycian civilization. The setting, overlooking the beautiful Turkish landscape, adds to the mystical charm. A must-see for history and nature lovers!",CategoryID:2,
         date:"May 18, 2022 at 5:00 pm",
         more:"1"
     },
  
     {
         imgurl:"/Luxor1.jpeg",
         title:"Visiting Luxor was a remarkable journey",
         name:"Mariam Ahmed",
         comment:"Visiting Luxor was a remarkable journey through ancient history! The temples and tombs are stunning, especially the Valley of the Kings and Karnak Temple. The intricate carvings and sheer scale of these monuments are unforgettable. It's a must-see for history lovers! ",
         CategoryID:1,
         date:"Oct 28, 2020 at 6:00 pm",
         more:"1"
     },
     
    {
         imgurl:"Louver3.jpeg",
         title:"Visiting the Louvre Museum",
         name:"Kareem Karam",
         comment:"Visiting the Louvre Museum was an extraordinary experience! Home to world-famous masterpieces like the Mona Lisa and the Venus de Milo, the museum is a treasure trove of art and history. The architecture itself is stunning, and exploring its vast galleries feels like stepping into a different era. A must-visit for any art lover!",
         CategoryID:4,
         date:"Jan 18, 2019 at 2:00 pm",
         more:"1"
     },
    {
         imgurl:"/espana2.jpeg",
         title:"La Sagrada Familia in Barcelona",
         name:"Bishoy",
         comment:"La Sagrada Familia in Barcelona is a breathtaking masterpiece of architectural genius. Designed by Antoni Gaudí, this iconic basilica captivates visitors with its intricate details, towering spires, and unique blend of Gothic and Art Nouveau styles. The way light filters through the stunning stained-glass windows creates an ethereal atmosphere inside, leaving everyone in awe. Visiting La Sagrada Familia is not just sightseeing; it's experiencing one of the most extraordinary creations in the world, a true symbol of Barcelona's artistic heritage.",
         CategoryID:6,
         date:"Jan 18, 2019 at 2:00 pm",
         more:"1"
     },
    {
         imgurl:"/dubai.jpg",
         title:"Dubai Mall",
         name:"Borak",
         comment:"Dubai Mall is more than just a shopping destination—it's an extraordinary experience. As one of the largest malls in the world, it offers a wide range of luxury and high-street brands, dining options, and unique entertainment attractions like the Dubai Aquarium and the VR Park. Whether you're shopping, dining, or exploring the diverse attractions, the mall’s stunning architecture and world-class facilities make it a must-visit for anyone in Dubai.",
         CategoryID:5,
         date:"Mar 18, 2024 at 2:00 pm",
         more:"1"
     },
  
    {
         imgurl:"/venice2.jpeg",
         title:"Venice is a magical city like no other",
         name:"Ramy Mina",
         comment:"Venice is a magical city like no other! The canals, charming bridges, and historic architecture create a dreamlike atmosphere. Exploring the city by gondola and strolling through its narrow streets is an unforgettable experience. Venice’s beauty, culture, and romance make it a must-visit destination!",CategoryID:3,
         date:"Feb 20, 2024 at 2:00 pm",
         more:"1"
     }
    ]
   
   this.CategoryList=[
    {id:1,name:"Egypt"},
    {id:2,name:"Turkey"},
    {id:3,name:"Italey"},
    {id:4,name:"France"},
    {id:5,name:"The UAE"},
    {id:6,name:"Espana"}
   ]
  //  this.saveblogs();
  }
  togglebutton(ismore:string):string
  {
    
    if(ismore==="1")
    {
      ismore="2";
    }
    else if(ismore==="2")
      {
        ismore="1";
      }
      // console.log(ismore);
      return ismore;
  }
 littleText(text :string):string
 {
  if(text.length>150)
  {
    return text.substring(0, this.maxLength) + '...';
  }
  return text;
 }

  search(x:string)
  {
   this.searchvalue=x;
   this.cat=0;
   console.log(this.searchvalue);
    
  }
  showaddblog()
  {
   document.querySelector(".blogform")?.classList.remove("hidden");
  }
  addblog(img:string,name:string,title:string,comment:string)
  {
    let date : string=this.formatDate();
    let more:string="0";
    if(comment.length>300)
    {
      more="1";
    }
   let newBlog:Blog = new Blog(img,title,name,comment,this.cat_blog,date,more);
   console.log(newBlog.more);
   this.BlogList.push(newBlog);
   document.querySelector(".blogform")?.classList.add("hidden");
   this.imgurl="";
   this.nameperosn="";
   this.commentblog="";
   this.blogtitle="";
   this.saveblogs();
 }
 saveblogs()
 {
  window.localStorage.setItem("blogs",JSON.stringify(this.BlogList));
 }
 getdata()
 {
   let storedBlogData2:any[]
   let storedBlogData = localStorage.getItem('blogs');
   if (storedBlogData) {
      storedBlogData2= JSON.parse(storedBlogData);
      console.log("Retrieved blogs:", this.BlogList);
       // Parse JSON back into an object/array
      // console.log("st");
   } else {
       storedBlogData2 = []; // Initialize as an empty array if no data found
   }
   
   this.BlogList= storedBlogData2;
   console.log(this.BlogList)
 }
 gotoblog():void
 {
  let blog=document.getElementById("blog");
  blog?.scrollIntoView({ behavior: 'smooth' });
 }
 ngOnInit(): void {
  // this.saveblogs();
  // window.localStorage.clear();
   this.getdata();
 }
 formatDate(): string {
  const date: Date = new Date(Date.now());
  
  // Options for toLocaleString
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };
  
  // Format the date and time
  const result: string = date.toLocaleString('en-US', options).replace(',', '') ;
  
  return result;
}
}
