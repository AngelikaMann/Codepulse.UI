import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideMarkdown } from 'ngx-markdown';

export const AppRoutes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideMarkdown(),
    provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
