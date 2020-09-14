import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { aboutMeComponent } from './AboutMe/aboutMe.component';
import { ProjectsComponent } from './Projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { MirloComponent } from './Projects/Mirlo/mirlo.component'
import { PostsComponent } from './posts/posts.component';
import { PostCountComponent } from './post-count/post-count.component';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './data/reducer';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    aboutMeComponent,
    ProjectsComponent,
    MirloComponent,
    PostsComponent,
    PostCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(AppReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(blogService: BlogService) {
    blogService.getPosts();
  }
}
