import { Routes , RouterModule} from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { NgModule } from '@angular/core';

import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';

export const routes: Routes = [
  { path: 'admin/categories', component: CategoryListComponent},
  {path: 'admin/categories/add', component: AddCategoryComponent},
  {path: 'admin/categories/:id', component: EditCategoryComponent},

];
NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
});
export class AppRoutingModule {}
