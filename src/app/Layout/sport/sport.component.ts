import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Service/news.service';
import { News } from 'src/app/Interface/news';


@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit{
  public pic:any;
  sportNews: News | any ;
  constructor(public newsService:NewsService){

  }
  ngOnInit(): void {
      this.newsService.getSportNews().subscribe((data)=>{
          this.sportNews=data.articles;
      })
  }

  viewDetails(link:string){
    window.open( link, '_blank');
  }
  
 
}

