import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { UpdateBlogPost } from '../models/update-blog-post.model';
@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  createBlogPost(data: AddBlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(
      `${environment.apiBaseUrl}/api/blogposts`,
      data
    );
  }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `${environment.apiBaseUrl}/api/blogposts/${id}`
    );
  }

  updateBlogPost(
    id: string,
    updateBlogPost: UpdateBlogPost
  ): Observable<BlogPost> {
    return this.http.put<BlogPost>(
      `${environment.apiBaseUrl}/api/blogposts/${id}`,
      updateBlogPost
    );
  }

  deleteBlogPost(id:string):Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
  }


}
