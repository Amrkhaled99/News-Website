import { Component, Input, OnInit } from '@angular/core';
// import { NewsService } from 'news.service';
import { NewsService } from 'src/app/Service/news.service';
import { News } from 'src/app/Interface/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allNews: News[]=[];

    constructor(public newsService:NewsService){}
  
  ngOnInit(): void {
     
    this.newsService.getNews().subscribe((data)=>{
      this.allNews= data.articles;
      console.log(data);

    }
  );

}


viewDetails(link:string){
  window.open( link, '_blank');
  //  window.open( "https://arabic.cnn.com/world/article/2022/12/15/sam-brinton-department-of-energy",'_blank');

  // window.open('https://' + link, "_blank");


}

}
