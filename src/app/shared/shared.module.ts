import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '../currency.pipe';
import { HighlightDirective } from '../highlight.directive';


@NgModule({
  declarations: [
    CurrencyPipe,
    HighlightDirective,
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
    HighlightDirective
  ]
})
export class SharedModule { }
