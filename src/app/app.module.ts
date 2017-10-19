import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsDetailComponent } from './components/clients-detail/clients-detail.component';
import { LoginComponent } from './components/login/login.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    NavbarComponent,
    ClientsDetailComponent,
    LoginComponent,
    EditClientComponent,
    SidebarComponent,
    RegisterComponent,
    AddClientComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
