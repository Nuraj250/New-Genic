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
  product: ProductCard[] = [];

  constructor(private router: Router, private  productService: ProductService) {
  }

  ngOnInit(): void {
    this.product = [
      {
      item_id: 1,
      image: 'http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg',
      name: 'MYSHOES',
      retail_price: 109.99,
      sale_price: 109.99
    },
      {
        item_id: 1,
        image: 'http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg',
        name: 'MYSHOES',
        retail_price: 109.99,
        sale_price: 109.99
      },
      {
        item_id: 1,
        image: 'http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg',
        name: 'MYSHOES',
        retail_price: 109.99,
        sale_price: 109.99
      },
      {
        item_id: 1,
        image: 'http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg',
        name: 'MYSHOES',
        retail_price: 109.99,
        sale_price: 109.99
      },
      {
        item_id: 1,
        image: 'http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg',
        name: 'MYSHOES',
        retail_price: 109.99,
        sale_price: 109.99
      },
    ];
  }

  quickView(): Promise<any> {
    return new Promise<any>(resolve => {
      this.productService.getProductView().subscribe((res) => {
        console.log(res);
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
      }, error => {
        console.log(error);
      });

      resolve(1);
    });
  }
}
