import { Component, OnInit } from '@angular/core';
import {
  faFileZipper,
  faCircleCheck,
  faClock,
} from '@fortawesome/free-regular-svg-icons';
import { faTrophy, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  faLocationDot = faLocationDot;
  faCircleCheck = faCircleCheck;
  faTrophy = faTrophy;
  faFileZipper = faFileZipper;
  faClock = faClock;
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
