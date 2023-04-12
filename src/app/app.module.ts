import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { UserComponent } from './user/user.component';
import { AccountStatusComponent } from './account-status/account-status.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,     
    UserComponent, 
    AccountStatusComponent, 
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot([      
       { path: 'login', component: LoginComponent },      
       { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
       { path: 'account-status', component: AccountStatusComponent, canActivate: [AuthGuard]},
       { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthGuard]},
       { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },      
    ])     
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

