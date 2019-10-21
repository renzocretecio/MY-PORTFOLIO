import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './body/resume/resume.component';
import { HomeComponent } from './body/home/home.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {path: '', component: NavigationComponent,
children: [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
