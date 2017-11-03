import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './user.service';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProfileComponent, UserComponent],
  providers: [AuthGuard, UserService],
})
export class UserModule { }
