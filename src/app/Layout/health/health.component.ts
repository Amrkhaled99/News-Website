import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Service/news.service';
import { News } from '../../Interface/news';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  allNews: News[]=[];

  constructor(public newsService:NewsService){}

ngOnInit(): void {
   
  this.newsService.getHealthNews().subscribe((data)=>{
    this.allNews= data.articles;
    console.log(data);

  }
);

}

viewDetails(link:string){
  window.open( link, '_blank');
}

}
