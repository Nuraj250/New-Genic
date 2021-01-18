import {Component, OnInit} from '@angular/core';
import {Wishlist} from '../../storage/class/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  head = ['', 'Name', 'Code', 'Stock', 'Unitprice','Action'];
  body: Wishlist[] = [{image: 'wxsxsxs', name: 'cedce', product_code: '21', stock: '42', unit_price: '144'},
    {image: 'wxsxsxs', name: 'cedce', product_code: '21', stock: '42', unit_price: '144'}];

  constructor() {
  }

  ngOnInit(): void {
  }


}
