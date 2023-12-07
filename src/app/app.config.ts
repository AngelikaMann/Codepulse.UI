import { ApplicationConfig } from '@angular/core';
import { provideRouter , Routes} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { provideHttpClient } from '@angular/common/http';

export const AppRoutes: Routes = [{
  path: 'admin/categories', component: CategoryListComponent
}

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
     provideClientHydration(),
     provideHttpClient(),
    ]
};
