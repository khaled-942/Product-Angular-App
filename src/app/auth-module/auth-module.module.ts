import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, AuthModuleRoutingModule,SharedModule],
  exports: [LoginComponent, SignUpComponent],
})
export class AuthModuleModule {}
