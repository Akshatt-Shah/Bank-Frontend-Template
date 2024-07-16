import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'page',
    component: HomeComponent,
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
