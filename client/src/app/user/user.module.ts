import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ClientService} from '../integrations/clients/client.service';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'history', component: ShoppingHistoryComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'history', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    ShoppingHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
  ],
  providers: [AuthGuard, UserService, ClientService],
})
export class UserModule { }
