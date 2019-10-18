import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './body/resume/resume.component';
import { HomeComponent } from './body/home/home.component';
import { ProjectsComponent } from './body/projects/projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
