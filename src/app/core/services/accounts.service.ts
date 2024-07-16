import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get(this.Url + '/Account/getAccount', {
      withCredentials: true,
    });
  }

  createAccount(account: any) {
    return this.http.post(this.Url + '/Account/registerAccount', account, {
      withCredentials: true,
    });
  } 
}
