import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  product: any;

  constructor() { }

  ngOnInit(): void {
  }
  quickView():void{
  }
  addToWishlist():void{
  }
  addToCart():void{
  }
}
