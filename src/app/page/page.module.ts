import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatementsComponent } from './statements/statements.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PageComponent,
    UserComponent,
    AccountComponent,
    StatementsComponent,
    FundtransferComponent,
    AccountsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageRoutingModule,
    TableModule,
    ButtonModule,
  ]
})
export class PageModule { }
