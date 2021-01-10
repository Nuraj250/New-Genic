import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {AuthGuard} from './AuthGuard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard],canActivateChild:[AuthGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-details', component: ProductDetailsComponent },
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
