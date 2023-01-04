import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
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
},{
  path:'cv',
  component: CurriculumVitaeComponent
}, {
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


function isCv(url: UrlSegment[]) {
  debugger;
  return url.length === 1 && url[0].path.endsWith('.html') ? ({consumed: url}) : null;
}