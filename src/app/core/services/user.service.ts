import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  registerUser(user: any) {
    return this.http.post(this.Url + '/user/registerUser', user, {
      withCredentials: true,
    });
  }
  updateUser(user: any) {
    return this.http.put(this.Url + '/user/updateuser', user, {
      withCredentials: true,
    });
  }
  loginUser(user: any) {
    return this.http.post(this.Url + '/user/loginuser', user, {
      withCredentials: true,
    });
  }
  getusers() {
    return this.http.get(this.Url + '/user/getUser', {
      withCredentials: true,
    });
  }
}
