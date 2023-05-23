import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './pages/login/user-login/user-login.component';
import { CanActiveGuard } from './guards/can-active.guard';
import { AuthService } from './services/authentication/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [CanActiveGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
