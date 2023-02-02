import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Layout/home/home.component';
import { BreakingComponent } from './Layout/breaking/breaking.component';
import { SportComponent } from './Layout/sport/sport.component';
import { NewsCardComponent } from './Components/news-card/news-card.component';
import { SliderComponent } from './Components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReplacePipe } from './pipe/replace.pipe';
import { ScienceComponent } from './Layout/science/science.component';
import { HealthComponent } from './Layout/health/health.component';
import { EntertainmentComponent } from './Layout/entertainment/entertainment.component';
import { BusinessComponent } from './Layout/business/business.component';
import { TechnologyComponent } from './Layout/technology/technology.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'breaking', component: BreakingComponent },
  { path: 'sport', component: SportComponent },

  { path: 'Science', component: ScienceComponent },
  { path: 'health', component: HealthComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'technology', component: TechnologyComponent },


];



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BreakingComponent,
        SportComponent,
        NewsCardComponent,
        SliderComponent,
        ReplacePipe,
        ScienceComponent,
        HealthComponent,
        EntertainmentComponent,
        BusinessComponent,
        TechnologyComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
        ),
        NgbModule,
        // SliderComponent
    ]
})
export class AppModule { }
