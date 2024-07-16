import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss'],
})
export class StatementsComponent implements OnInit {
  transactionhistory: any = [];
  constructor(private transaction: TransactionService) {}
  ngOnInit(): void {
    this.transaction.getTransaction().subscribe({
      next: (accounts: any) => {
        this.transactionhistory = accounts.data;
        // console.log(this.transactionhistory)
      },
      error: (error) => {
        console.error('Error fetching accounts', error);
      },
    });
  }
}
