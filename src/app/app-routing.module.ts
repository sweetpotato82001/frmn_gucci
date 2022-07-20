import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClubComponent } from './admin/add-club/add-club.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { EditClubForm1Component } from './admin/edit-club-form1/edit-club-form1.component';
import { EditClubComponent } from './admin/edit-club/edit-club.component';
import { LookForAccountComponent } from './admin/look-for-account/look-for-account.component';
import { LookForClubComponent } from './admin/look-for-club/look-for-club.component';
import { RegisterComponent } from './admin/register/register.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { ViewClubsComponent } from './admin/view-clubs/view-clubs.component';
import { ViewdetailformComponent } from './admin/viewdetailform/viewdetailform.component';
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
     {
      path:'addClub',
      component: AddClubComponent,
     },
     {
      path:'viewClub',
      component: ViewClubsComponent,
     },
     {
      path:'filterClub',
      component:LookForClubComponent,
     },
     {
      path:'ClubDetails',
      component:ViewdetailformComponent,
     },
     {
      path:'editClub',
      component:EditClubComponent,
     },
     {
      path:'editClubForm',
      component:EditClubForm1Component,
     },
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
