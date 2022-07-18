import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAccountComponent } from './admin/dashboard-account/dashboard-account.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { RegisterComponent } from './admin/register/register.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [

  {
    path: 'admin',
    component:DashboardComponent,
    children: [
    
      {
         path:'register',
         component: RegisterComponent,
         
      },
      {
        path:'home',
        component: WelcomeComponent,
     },
     {
      path:'ViewAccount',
      component: ViewAccountComponent,
     },
     {
      path:'filterAccount',
      component: TestComponent,
     },
     {
      path:'editAccount',
      component: EditAccountComponent,
     },
     {
      path:'editAccountForm',
      component: EditAccountFormComponent,
     },
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
