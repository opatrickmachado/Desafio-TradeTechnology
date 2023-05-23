import { AuthService } from '../../../services/authentication/auth.service';
import { Component } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/userData';
import { Router } from '@angular/router';
import { HttpResponse} from '@angular/common/http';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  infoIcon = faInfo
  statusInfo: boolean = false
  acessKey:string=''
  userData: User | undefined
  errorAuthentication : boolean = false
  inputValid: boolean = false
  permission:boolean = false

  constructor(private authService:AuthService, private router:Router){

  }
  ngOnInit(): void {
    localStorage.clear()
  }

  changeInfo() : void{
    this.statusInfo = !this.statusInfo
  }

  check(){

    if(this.acessKey.length < 10){
      setTimeout(()=>{this.inputValid = true},1)
      setTimeout(()=>{this.inputValid = false},5000)
    
    } else{
          this.authService.login(this.acessKey).subscribe((res:HttpResponse<any>)=>{
            

            if(res.body.response.length === 0) {
              setTimeout(()=>{this.errorAuthentication = true},1)
              setTimeout(()=>{this.errorAuthentication = false},5000)
            } else {
      
              this.userData = {
                firstName :  res.body.response.account.firstname,
                lastName :  res.body.response.account.lastname,
                email :  res.body.response.account.email
              }

              this.authService.autorizationCheck(true)
              localStorage.setItem('acess',this.acessKey)
              this.acessKey =''
              this.router.navigate(['/feed'])
            }
          })
    }
  }
}
