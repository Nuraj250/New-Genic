import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../storage/class/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  isDisabled2= false;
  item_id: any;
  productData: Product[]|undefined;
  relatedProducts:Product[]|undefined;
  constructor(private router: Router,private activeRouter:ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // this.loadProductDetails(this.item_id);
    const routeParams = this.activeRouter.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('item_id'));
    // this.product = this.productService.getProductView('item_id'=> product.item_id === productIdFromRoute) ;
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

  loadProductDetails(productID: string | undefined){
    this.productService.getProductView(productID).subscribe(product => {
      this.productData = product;
      this.getRelatedProducts();

    //   this.galleryImages = [];
    //   this.galleryImages.push({ small: this.data.img, medium: this.data.img, big: this.data.img });
    //   // insert gallery images
    //   for (const img of this.data.gallery) {
    //     this.galleryImages.push({ small: img, medium: img, big: img });
    //   }
    });
  }
  getRelatedProducts() {
    this.productService.getRelatedProducts().subscribe(product => {
      this.relatedProducts = product;

    })
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
