import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'history', component: ShoppingHistoryComponent },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProfileComponent,
    UserComponent,
    ShoppingHistoryComponent
  ],
  providers: [AuthGuard, UserService],
})
export class UserModule { }
