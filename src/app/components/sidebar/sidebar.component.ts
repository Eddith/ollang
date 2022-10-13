import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faEnvelope,
  faAddressBook,
  faCircleUser,
  faMoneyBill1,
  faFileExcel,
  faFolderClosed,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faFolderClosed = faFolderClosed;
  faMagnifyingGlass = faMagnifyingGlass;
  faBookBookmark = faBookmark;
  faEnvelope = faEnvelope;
  faAddressBook = faAddressBook;
  faCircleUser = faCircleUser;
  faMoneyBill1 = faMoneyBill1;
  faFileLines = faFileExcel;
  constructor() {}

  ngOnInit(): void {}
}
