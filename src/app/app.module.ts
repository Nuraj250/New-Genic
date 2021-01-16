import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SingupComponent } from './singup/singup.component';
import {SliderCarouselModule} from 'slider-carousel';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { WishlistComponent } from './list/wishlist/wishlist.component';
import { CartComponent } from './list/cart/cart.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SingupComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    WishlistComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    SliderCarouselModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
