import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { loginPage } from './login.page';

import { loginPageRoutingModule} from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    loginPageRoutingModule
  ],
  declarations: [loginPage]
})
export class loginPageModule {}
