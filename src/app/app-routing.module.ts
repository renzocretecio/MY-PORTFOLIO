import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './body/resume/resume.component';
import { HomeComponent } from './body/home/home.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './body/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: NavigationComponent,
    children: [
      { path: '', component: HomeComponent, data: { animation: 'Home' } },
      { path: 'resume', component: ResumeComponent, data: { animation: 'Resume' } },
      { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: "enabled", onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled', useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
