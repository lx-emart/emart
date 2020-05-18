import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {JwtInterceptor} from './interceptor/jwt.interceptor';
import {UserService} from './services/user.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SignupComponent} from './signup/signup.component';
import {PasswordComponent} from './password/password.component';
import {SellerProductListComponent} from './seller/seller-product-list/seller-product-list.component';
import {SellerProductEditComponent} from './seller/seller-product-edit/seller-product-edit.component';
import {SellerProductAddComponent} from './seller/seller-product-add/seller-product-add.component';
import {BuyerProductListComponent} from './buyer/buyer-product-list/buyer-product-list.component';
import {BuyerProductDetailComponent} from './buyer/buyer-product-detail/buyer-product-detail.component';
import {PurchaseHistoryComponent} from './buyer/purchase-history/purchase-history.component';
import {EvaluateComponent} from './buyer/evaluate/evaluate.component';
import {CartComponent} from './buyer/cart/cart.component';
import {PricePipe} from './pipe/price.pipe';
import {HomeComponent} from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    PasswordComponent,
    SellerProductListComponent,
    SellerProductEditComponent,
    SellerProductAddComponent,
    BuyerProductListComponent,
    BuyerProductDetailComponent,
    PurchaseHistoryComponent,
    EvaluateComponent,
    CartComponent,
    PricePipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
