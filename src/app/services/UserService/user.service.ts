import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: any;
  public toggle = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}
  toggler() {
    this.toggle.next(!this.toggle.value);
  }

  getUser(id: number) {
    this.http
      .get('https://6255745f52d8738c6922364f.mockapi.io/users/' + id)
      .subscribe((data) => {
        this.user = data;
      });
  }
}
