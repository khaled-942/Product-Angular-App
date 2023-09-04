import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { RequestInterceptor } from './request.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModuleModule,
    ProductsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
