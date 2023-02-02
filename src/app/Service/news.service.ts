import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public httpClient:HttpClient) {

   }


   public getNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=0a1705906f66435eb224d4ef067df1a8");
      // https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=0a1705906f66435eb224d4ef067df1a8
      // return this.httpClient.get("https://newsapi.org/v2/top-headlines?language=tr&apiKey=0a1705906f66435eb224d4ef067df1a8");


    }

    // Get Sport News    
    public getSportNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=0a1705906f66435eb224d4ef067df1a8");
    }

    // Get Science News    
    public getScienceNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=0a1705906f66435eb224d4ef067df1a8");
    }

    // Get Health News    
    public getHealthNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=0a1705906f66435eb224d4ef067df1a8");
    }

    // Get Entertainment News    
    public getEntertainmentNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=0a1705906f66435eb224d4ef067df1a8");
    }

    // Get Business News    
    public getBusinessNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=0a1705906f66435eb224d4ef067df1a8");
    }
 
    // Get Technology News
    public getTechnologyNews():Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=0a1705906f66435eb224d4ef067df1a8");
    }

}
