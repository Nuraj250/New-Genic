import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {SliderCarouselModule} from 'slider-carousel';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {ProductCardComponent} from './product/product-card/product-card.component';
import {WishlistComponent} from './list/wishlist/wishlist.component';
import {CartComponent} from './list/cart/cart.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PaymentComponent} from './payment/payment.component';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {GamingComponent} from './gaming/gaming.component';
import {MatTooltipModule} from '@angular/material/tooltip';
// import {FacebookModule} from 'ngx-facebook';
// @ts-ignore
// import { CountdownTimerModule } from 'ngx-countdown-timer-date';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    WishlistComponent,
    CartComponent,
    PaymentComponent,
    GamingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    SliderCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    MatTooltipModule,
    // CountdownTimerModule.forRoot()
    // FacebookModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
