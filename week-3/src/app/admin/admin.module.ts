import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageUserDetailComponent } from './manage-user-detail/manage-user-detail.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageUserComponent,
    ManageUserDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
