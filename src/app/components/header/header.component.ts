import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';
import {
  faMagnifyingGlass,
  faEllipsis,
  faBell,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public searchstat: boolean = false;

  faAlignJustify = faAlignJustify;
  faBell = faBell;
  faEllipsis = faEllipsis;
  faMagnifyingGlass = faMagnifyingGlass;
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
  menuToggler() {
    this.userService.toggler();
    console.log('tıklandı');
    console.log(this.userService.toggle.value);
  }
}
