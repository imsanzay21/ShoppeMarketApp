import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';

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

  constructor(private Jarwis: JarwisService) { }

  onSubmit(){
    this.Jarwis.register(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error){
    this.error = error.error.errors
  }

  ngOnInit() {
  }

}
