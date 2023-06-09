import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './component/navbar/navbar.component';
import {RouterOutlet} from "@angular/router";
import {LoginComponent} from './component/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {NgOptimizedImage} from "@angular/common";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { QuizListComponent } from './component/quiz-list/quiz-list.component';
import { RouterModule,Routes } from '@angular/router';
import { QuizComponent } from './component/quiz/quiz.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import {CookieService} from 'ngx-cookie-service';
import { ScanComponent } from './component/scan/scan.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdatePersonalInfoComponent } from './component/profile/update-personal-info/update-personal-info.component';
import { DeleteAccountComponent } from './component/profile/delete-account/delete-account.component';
import { QuizAddComponent } from './component/quiz-add/quiz-add.component';
import { RegisterComponent } from './component/register/register.component';
import { LeaderboardComponent } from './component/leaderboard/leaderboard.component';
import { ChangePasswordComponent } from './component/profile/change-password/change-password.component';
import { AvatarChooseComponent } from './component/profile/avatar-choose/avatar-choose.component';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    QuizListComponent,
    QuizComponent,
    ScanComponent,
    ProfileComponent,
    UpdatePersonalInfoComponent,
    DeleteAccountComponent,
    QuizAddComponent,
    RegisterComponent,
    LeaderboardComponent,
    ChangePasswordComponent,
    AvatarChooseComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterOutlet,
    AppRoutingModule,
    NgOptimizedImage,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: 'quiz-list', component: QuizListComponent },
      { path:'quiz/add',component: QuizAddComponent},
      { path: 'quiz/:id', component: QuizComponent},
      { path:'scan',component: ScanComponent},
      { path:'profile',component: ProfileComponent},
      {path:'profile/update',component: UpdatePersonalInfoComponent},
      {path:'profile/delete',component: DeleteAccountComponent},
      {path:'profile/change-password',component: ChangePasswordComponent},
      {path:'profile/avatar-choose',component: AvatarChooseComponent},
      {path:'register',component: RegisterComponent},
      {path:'leaderboard',component: LeaderboardComponent}

    ],{onSameUrlNavigation: 'reload'}),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
