import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {AuthGuard} from './AuthGuard';
import {ProductCardComponent} from './product/product-card/product-card.component';
import {CartComponent} from './list/cart/cart.component';
import {WishlistComponent} from './list/wishlist/wishlist.component';
import {PaymentComponent} from './payment/payment.component';
import {SignupComponent} from './signup/signup.component';
import {GamingComponent} from './gaming/gaming.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},//,canActivate:[AuthGuard],canActivateChild:[AuthGuard]
  {path: 'profile', component: ProfileComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:item_id', component: ProductDetailsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent },
  {path: 'product-card', component: ProductCardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'payment', component: PaymentComponent},
  {path:'gaming', component:GamingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
