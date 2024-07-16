import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.scss'],
})
export class FundtransferComponent implements OnInit {
  transactionForm!: FormGroup;
  submitted: Boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _toast: ToastService,
    private transactionservice: TransactionService
  ) {}
  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      amount: ['', Validators.required],
      sender_account_no: ['', Validators.required],
      receiver_account_no: ['', Validators.required],
      description: ['', Validators.required],
      transactionType: ['', Validators.required],
    });
  }
  get f() {
    return this.transactionForm.controls;
  }

  transaction() {
    this.submitted = true;
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value);
      this.transactionservice
        .transaction(this.transactionForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            if (data.status === true) {
              console.log(data);
              this._toast.success(data.message);
              this.router.navigate(['/page/statement']);
            } else {
              console.log(data);
              this._toast.error(data.message);
              // console.error(data.message);
            }
          },
          error: (error) => {
            this._toast.error(error.error.message);
            console.error(error);
          },
        });
    } else {
      console.log('Error In Form');
    }
  }
  // console.log(this.transactionForm.value);
}
