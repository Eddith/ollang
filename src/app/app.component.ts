import { Component } from '@angular/core';
import { UserService } from './services/UserService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public userSer: UserService) {}
}
