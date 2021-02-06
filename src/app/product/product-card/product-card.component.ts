import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {ProductCard} from '../../storage/class/product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: any[] | undefined;
  private id: string | undefined;
  isDisabled = false;
  isDisabled1=false;


  constructor(private router: Router, private  productService: ProductService) {
  }

  ngOnInit(): void {
    // this.product = this.productService.getProductView();
    // this.cart = this.cartService.getCart();
  }

  quickView(id: string | undefined): Promise<any> {
    this.id = id;
    return new Promise<any>(resolve => {
      this.productService.getProductView(this.id).subscribe((resid) => {

      }, error => {
        console.log(error);
      });

      resolve(1);
    });
  }

  addToWishlist(): Promise<any> {
    return new Promise<any>(resolve => {
      this.productService.postWishlist().subscribe((res) => {
        console.log(res);
        this.isDisabled=true;
      }, error => {
        console.log(error);
      });

      resolve(1);
    });
  }


  addToCart(): Promise<any> {
    return new Promise<any>(resolve => {
      this.productService.postCart().subscribe((res) => {
        console.log(res);
        this.isDisabled1=true;
      }, error => {
        console.log(error);
      });

      resolve(1);
    });
  }
}

