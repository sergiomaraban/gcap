import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { UserComponent } from './user/user.component';
import { AccountStatusComponent } from './account-status/account-status.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
    DashboardComponent, 
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
      { path: 'dashboard', component: DashboardComponent},
      { path: 'user', component: UserComponent},
      { path: 'account-status', component: AccountStatusComponent},
      { path: 'announcements', component: AnnouncementsComponent},
    ])     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

