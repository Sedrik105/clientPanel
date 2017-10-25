import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from  'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';
//import components
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
//service import
import { ClientService } from './services/client.service';

const appRoutes: Routes = [
    {path: '' , component: DashboardComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'add-client', component: AddClientComponent}
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase,'clientpanel'),
    AngularFireAuthModule

  ],
  providers: [AngularFireAuth,
    AngularFireDatabase,
              ClientService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
