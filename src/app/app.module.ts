import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './admin/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { CarouselModule } from './admin/carousel/carousel.module';
import { SidebarAccountComponent } from './admin/sidebar-account/sidebar-account.component';
import { DashboardAccountComponent } from './admin/dashboard-account/dashboard-account.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { HttpClientModule } from '@angular/common/http';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { DatatestComponent } from './admin/datatest/datatest.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { TestComponent } from './test/test.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ButtonCellRendererComponent } from './button-cell-renderer/button-cell-renderer.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomeComponent,
    SidebarAccountComponent,
    DashboardAccountComponent,
    ViewAccountComponent,
    DatatestComponent,
    TestComponent,
    EditAccountComponent,
    ButtonCellRendererComponent,
    EditAccountFormComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    AgGridModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
