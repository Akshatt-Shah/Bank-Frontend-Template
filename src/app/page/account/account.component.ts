import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AccountsService } from 'src/app/core/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accountData: any = [];
  accountForm!: FormGroup;
  constructor(
    private accountservice: AccountsService,
    private fb: FormBuilder,
    private accservice: AccountsService,
    private _toast: ToastService,
    private router:Router
  ) {}

  getAccountdata() {
    this.accountservice.getAccounts().subscribe({
      next: (data: any) => {
        // console.log(data);
        this.accountData = data.data;
        console.log(this.accountData);
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
  ngOnInit(): void {
    this.accountForm = this.fb.group({
      type: ['', Validators.required],
    });
    this.getAccountdata();
  }

  selectacc(accountNo: any) {
    if (accountNo != null) {
      console.log(accountNo)
      localStorage.setItem('bankaccountno', accountNo);
      this.router.navigate(["/page/fund"])
    }
  }
  createAccount() {
    // console.log(this.accountForm.value)
    this.accountservice.createAccount(this.accountForm.value).subscribe({
      next: (data: any) => {
        if (data.status === true) {
          this._toast.success(data.message);
          this.getAccountdata();
        } else {
          this._toast.error(data.message);
        }
      },
      error: (err: any) => {
        this._toast.error(err);
      },
    });
  }
}
