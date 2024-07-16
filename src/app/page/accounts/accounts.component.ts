import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AccountsService } from 'src/app/core/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  Accountdata: any = [];
  viewaccountdata: any = [];
  constructor(
    private accountservice: AccountsService,
    private _toast: ToastService
  ) {}
  ngOnInit(): void {
    this.accountservice.getAccounts().subscribe({
      next: (data: any) => {
        if (data.status === true) {
          this.Accountdata = data.data;
          // console.log(this.Accountdata);
        } else {
          this._toast.error(data.message);
        }
      },
      error: (error: any) => {
        this._toast.error(error.message);
      },
    });
  }

  viewdata(data: any) {
    console.log(data);
    this.viewaccountdata = data;
  }
}
