import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {

    this.loadProducts();  }

  loadProducts() {
    // this.productService.getCategory().subscribe(
    //   productData => {
    //     // this.products = productData;
    //
    //   }
  }
}
