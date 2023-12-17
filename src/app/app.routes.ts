import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { NgModule } from '@angular/core';

import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './features/blog-post/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './features/public/home/home.component';
import { BlogDetailsComponent } from './features/public/blog-details/blog-details.component';
import { MarkdownModule } from 'ngx-markdown';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:url', component: BlogDetailsComponent },
  { path: 'admin/categories', component: CategoryListComponent },
  { path: 'admin/categories/add', component: AddCategoryComponent },
  { path: 'admin/categories/:id', component: EditCategoryComponent },
  { path: 'admin/blogposts', component: BlogpostListComponent },
  { path: 'admin/blogposts/add', component: AddBlogpostComponent },
  { path: 'admin/blogposts/:id', component: EditBlogpostComponent },
  { path: 'login', component: LoginComponent },
];
NgModule({
  imports: [RouterModule.forRoot(routes),MarkdownModule.forRoot()],
  exports: [RouterModule, MarkdownModule],
});
export class AppRoutingModule {}
