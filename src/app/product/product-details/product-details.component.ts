import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isDisabled2= false;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }
  addToWishlist(): Promise<any> {
    return new Promise<any>(resolve => {
      this.productService.postWishlist().subscribe((res) => {
        console.log(res);
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
        this.isDisabled2=true;
      }, error => {
        console.log(error);
      });

      resolve(1);
    });
  }
}
