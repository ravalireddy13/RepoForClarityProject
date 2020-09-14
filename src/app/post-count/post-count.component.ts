import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-count',
  templateUrl: './post-count.component.html',
  styles: ['./post-count.component.scss']
})
export class PostCountComponent {
  postCount$ = this.service.postCount$;
  constructor(private service: BlogService) {}
}