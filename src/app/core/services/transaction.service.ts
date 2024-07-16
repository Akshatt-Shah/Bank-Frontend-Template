import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  transaction(transactiondata: any) {
    return this.http.post(
      this.Url + '/Transaction/addTransaction',
      transactiondata,
      { withCredentials: true }
    );
  }
  getTransaction(id?: any) {
    if (id) {
      return this.http.get(this.Url + '/Transaction/getTransaction/' + id, {
        withCredentials: true,
      });
    } else {
      return this.http.get(this.Url + '/Transaction/getTransaction', {
        withCredentials: true,
      });
    }
  }
}
