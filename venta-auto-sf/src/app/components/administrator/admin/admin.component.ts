import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isLogged: boolean = false;

  constructor() {
  }
  
  handleLogin(event: boolean){
    this.isLogged = event;
  }
}
