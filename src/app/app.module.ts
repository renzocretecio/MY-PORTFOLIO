import { BrowserModule, Title, Meta } from '@angular/platform-browser';
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
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SlickCarouselModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule

  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
