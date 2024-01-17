import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail/book-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ManageUserDetailComponent } from './admin/manage-user-detail/manage-user-detail.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { 
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    children: [{
      path: '',
      children: [
        {path: '', component: AdminDashboardComponent},
        {path: 'user', component: ManageUserComponent},
        {path: 'user/:id', component: ManageUserDetailComponent}
      ],
    }]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
