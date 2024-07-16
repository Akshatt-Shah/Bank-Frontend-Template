import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { StatementsComponent } from './statements/statements.component';
import { loginauthGuard } from '../core/guards/loginauth.guard';
import { accountguardGuard } from '../core/guards/accountguard.guard';
import { adminguardGuard } from '../core/guards/adminguard.guard';
import { loginGuard } from '../core/guards/login.guard';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'users', canActivate:[adminguardGuard],component: UserComponent },
  { path: 'accounts',canActivate:[loginauthGuard], component: AccountComponent },
  { path: 'Allaccounts',canActivate:[adminguardGuard], component: AccountsComponent },
  { path: 'profile',canActivate:[loginGuard], component: ProfileComponent },
  {
    path: 'fund',
    canActivate: [loginauthGuard, accountguardGuard],
    component: FundtransferComponent,
  },
  {
    path: 'statement',
    canActivate: [loginauthGuard, accountguardGuard],
    component: StatementsComponent,
  },
  {
    path: 'allstatement',
    canActivate: [loginGuard],
    component: StatementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
