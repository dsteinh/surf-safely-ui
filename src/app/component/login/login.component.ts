import {Component} from '@angular/core';
import {AuthenticationService, UserDto} from "../../service/authentication.service";
import { FormGroup, FormControl, Validators, Form,ReactiveFormsModule } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { USER_TOKEN_NAME } from '../../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError:string="";
  user = new UserDto();
  token: string = '';
  constructor(private loginService: AuthenticationService,
    private formBuilder:FormBuilder,
    private cookieService:CookieService,
    private router:Router
    ) { }
  
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      usernameInput: [''],
       passwordInput: ['']
     });
  }


  login() {

    this.user.username=this.loginForm.value.usernameInput;
    this.user.password=this.loginForm.value.passwordInput;
    
    this.loginService.login(this.user)
      .subscribe({
        next: (response) => {
          this.token = response.data.token;
         //1 @param expires  Number of days until the cookies expires or an actual `Date`
          this.cookieService.set(USER_TOKEN_NAME, this.token,0.5);
          this.router.navigate(['']).then(()=>{window.location.reload();});

          //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

        },
        error: (e) => {
          console.error(e);
          this.loginError="Error: Incorrect password or username ";
        }
      }
      );
      
  }
  logout(){
    this.loginService.logout()
  }
}
