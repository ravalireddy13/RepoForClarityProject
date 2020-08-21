import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { aboutMeComponent } from './AboutMe/aboutMe.component';
import { ProjectsComponent } from './Projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { MirloComponent } from './Projects/Mirlo/mirlo.component'
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    aboutMeComponent,
    ProjectsComponent,
    MirloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
