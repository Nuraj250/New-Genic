import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Cart} from '../../storage/class/Cart';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[];
  // ca: Cart['totalProductPrice'];
  head: string[] = ['', 'Product', 'Qty', 'Unit Price', 'Price'];
  Show= false;
  onClick(){
    this.Show = !this.Show;
  }
  onClick1(){
   return  this.Show ;
  }
  constructor(private router: Router, private productService: ProductService) {
    this.carts = [
      {
        product_list: [{
          product_id: 'ss',
          product_code: 'ss',
          name: 'ss',
          description: 'ss ',
          color: 'ss',
          weight: 'ss',
          sale_price: 3,
          retail_price: 33,
          isFreeShipping: false,
          qty: 5,
          qtyPrice: 5
        }],
        totalWeight: 3,
        totalProductPrice: 4,
      }
    ];
  }

  ngOnInit(): void {
    let Cart = this.productService.getCart();
  }

}



