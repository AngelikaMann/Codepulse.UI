import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-post/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
blogs$?:Observable<BlogPost[]>;


constructor (private blogPostService:BlogPostService){

}
  ngOnInit(): void {
    this.blogs$=this.blogPostService.getAllBlogPosts();
  }


}
