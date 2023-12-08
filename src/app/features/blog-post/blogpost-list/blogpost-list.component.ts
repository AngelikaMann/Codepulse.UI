import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './blogpost-list.component.html',
  styleUrl: './blogpost-list.component.css'
})
export class BlogpostListComponent implements OnInit {
blogPosts$?: Observable<BlogPost[]>;
  constructor(private blogpostService:BlogPostService){}
  ngOnInit(): void {
   //get all blog posts from API
   this.blogPosts$=this.blogpostService.getAllBlogPosts();


  }

}
