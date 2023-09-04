import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '../currency.pipe';


@NgModule({
  declarations: [
    CurrencyPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipe,
  ]
})
export class SharedModule { }
