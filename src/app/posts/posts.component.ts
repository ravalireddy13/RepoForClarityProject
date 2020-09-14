import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styles: ['./posts.component.scss']
})
export class PostsComponent {
    posts$ = this.service.posts$;
    constructor(private service: BlogService) { }

    deletePost(id: number) {
        this.service.deletePost(id);
    }
}