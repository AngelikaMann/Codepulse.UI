import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { response } from 'express';
import { error } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(
    private categoryService: CategoryService,
    private router: Router) {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
  onFormSubmit() {
    this.addCategorySubscription = this.categoryService
      .addCategory(this.model)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        },
        error: (error) => {},
      });
  }
}
