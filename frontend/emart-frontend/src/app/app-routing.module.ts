import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './login/login.component';
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
import {PaymentComponent} from './buyer/payment/payment.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  //{path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'seller-product-list', component: SellerProductListComponent, canActivate: [AuthGuard]},
  {path: 'seller-product-edit/:code', component: SellerProductEditComponent, canActivate: [AuthGuard]},
  {path: 'seller-product-add', component: SellerProductAddComponent, canActivate: [AuthGuard]},
  {path: 'buyer-product-list', component: BuyerProductListComponent, canActivate: [AuthGuard]},
  {path: 'buyer-product-detail/:code', component: BuyerProductDetailComponent, canActivate: [AuthGuard]},
  {path: 'purchase-history', component: PurchaseHistoryComponent, canActivate: [AuthGuard]},
  {path: 'evaluate/:id', component: EvaluateComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
