import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import { PipesModule } from './pipes/pipes.module';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    CurriculumVitaeComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    NgxGoogleAnalyticsModule.forRoot(environment.analyticsId)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
