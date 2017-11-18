import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {CepService} from '../integrations/cep/cep.service';
import {LoadingIconComponent} from '../shared/loading-icon/loading-icon.component';
import {SharedModule} from '../shared/shared.module';

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
    ShoppingHistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
    FormsModule,
    SharedModule,
  ],
  providers: [AuthGuard, UserService, CepService],
})
export class UserModule { }
