import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Cart} from '../../storage/class/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  head: string[] = ['', 'Product', 'Qty', 'Unit Price', 'Price'];


  body: Cart[] = [
    {
      image: 'https://dummyimage.com/200x200/55595c/fff',
      name: 'wwwdwdw',
      description: 'deede',
      product_code: 'dede',
      color: 'dede',
      qty: 7,
      unit_price: '33',
      qty_price: '23',
      sub_price: '2323',
      shipping: '323',
      Total: '323223'
    },
    {
      image: 'https://dummyimage.com/200x200/55595c/fff',
      name: 'wwwdwdw',
      description: 'deede',
      product_code: 'dede',
      color: 'dede',
      qty: 7,
      unit_price: '33',
      qty_price: '23',
      sub_price: '2323',
      shipping: '323',
      Total: '323223'
    },
    {
      image: 'https://dummyimage.com/200x200/55595c/fff',
      name: 'wwwdwdw',
      description: 'deede',
      product_code: 'dede',
      color: 'dede',
      qty: 7,
      unit_price: '33',
      qty_price: '23',
      sub_price: '2323',
      shipping: '323',
      Total: '323223'
    },
    {
      image: 'https://dummyimage.com/200x200/55595c/fff',
      name: 'wwwdwdw',
      description: 'deede',
      product_code: 'dede',
      color: 'dede',
      qty: 7,
      unit_price: '33',
      qty_price: '23',
      sub_price: '2323',
      shipping: '323',
      Total: '323223'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}



