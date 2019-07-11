import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  _id: string = '_' + Math.random().toString(36).substr(2, 6);

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    user_code: 'user' + this._id,
    role: 'admin'
  }

  public error = [];

  constructor(private Jarwis: JarwisService, private Token: TokenService, private router: Router, private Auth: AuthService) { }

  onSubmit(){
    this.Jarwis.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true)
    this.router.navigateByUrl('/dashboard/home')
  }

  handleError(error){
    this.error = error.error.errors
  }

  ngOnInit() {
  }

}
