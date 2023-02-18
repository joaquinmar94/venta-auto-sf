import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  @Output() logged = new EventEmitter<boolean>();
  constructor(private _router: Router) {}

  entrar(){
   this.logged.emit(true);
  }
}
