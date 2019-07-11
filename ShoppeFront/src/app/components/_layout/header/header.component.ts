import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean

  constructor(private Auth: AuthService, private router: Router, private Token: TokenService) { }
  
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value)
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false)
    this.router.navigateByUrl('/login')
  }

}
