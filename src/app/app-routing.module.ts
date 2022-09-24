import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [ {
  path: 'experience',
  component: ExperienceComponent
}, {
  path: 'projects',
  component: ProjectsComponent
}, {
  path: 'home',
  component: HomeComponent
}, { 
  path: '',
  redirectTo: '/home', 
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
