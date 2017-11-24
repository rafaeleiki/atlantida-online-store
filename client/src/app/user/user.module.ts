import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { AddressComponent } from './address/address.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ClientService} from '../integrations/clients/client.service';
import {FormsModule} from "@angular/forms";
import {CepService} from '../integrations/cep/cep.service';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'history', component: ShoppingHistoryComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'address', component: AddressComponent },
      { path: '', redirectTo: 'history', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    ShoppingHistoryComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
    FormsModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    UserService,
    ClientService,
    CepService
  ],
})
export class UserModule { }
