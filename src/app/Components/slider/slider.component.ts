import { Component, OnDestroy, OnInit } from '@angular/core';
import { News } from 'src/app/Interface/news';
import { NewsService } from 'src/app/Service/news.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

})
export class SliderComponent implements OnInit {
	allNews: News[]=[]  ;

    constructor(public newsService:NewsService){}
	
	ngOnInit(): void {
	   
	  this.newsService.getNews().subscribe((data)=>{
		this.allNews= data.articles;
		console.log(data);
  
	  })
	}

}