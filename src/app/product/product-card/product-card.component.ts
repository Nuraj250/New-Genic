import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../storage/class/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // product: Product[];
  Product: any;


  constructor(private router: Router,private  productService:ProductService) {
    // this.product=[
    //   new Product(
    //   //   {
    //   //     name: 'MYSHOES',
    //   //     type: 'Black Running Shoes',
    //   //     img: '/assets/img/nike.jpeg',
    //   //     category:  ['Men', 'Shoes', 'Runings'],
    //   //     price:109.99
    //   //   }
    //   //   ,
    //   //   ...
    //   // ),
    //   // new Product(),
    //   // new Product()
    //
    // ];
  }

  ngOnInit(): void {
  }
  quickView():Promise<any>{
    return new Promise<any>(resolve => {
      this.productService.getProductView().subscribe((res)=>{
        console.log(res);
      },error => {
        console.log(error);
      });

      resolve(1)
    })
  }
  addToWishlist():Promise<any>{
    return new Promise<any>(resolve => {
      this.productService.postWishlist().subscribe((res)=>{
        console.log(res);
      },error => {
        console.log(error);
      });

      resolve(1)
    })
  }
  addToCart():Promise<any>{
    return new Promise<any>(resolve => {
      this.productService.postCart().subscribe((res)=>{
        console.log(res);
      },error => {
        console.log(error);
      });

      resolve(1)
    })
  }
}
