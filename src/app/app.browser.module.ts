import { BrowserModule, Title, Meta, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './body/home/home.component';
import { ResumeComponent } from './body/resume/resume.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    SlickCarouselModule,
    AppModule,
    BrowserTransferStateModule

  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
