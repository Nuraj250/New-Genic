import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {Category} from '../storage/class/Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  private navbarDash: any;
  category_list: Category[];

  constructor(private router: Router, private productService: ProductService) {
    this.category_list = [
      {
        category_id: '1',
        name: 'd',
        description: 'dcdcd',
       main_sub_categories: [{
          main_sub_category_id: 'string | undefined',
          name: 'string | undefined',
          description: 'string | undefined',
          sub_categories: [{sub_category_id: 'string | undefined', name: 'string | undefined', description: 'st'}]
        }]
      },
      {
        category_id: '1',
        name: 'd',
        description: 'dcdcd',
        main_sub_categories: [{
          main_sub_category_id: 'string | undefined',
          name: 'string | undefined',
          description: 'string | undefined',
          sub_categories: [{sub_category_id: 'string | undefined', name: 'string | undefined', description: 'st'}]
        }]
      },
      {
        category_id: '1',
        name: 'd',
        description: 'dcdcd',
        main_sub_categories: [{
          main_sub_category_id: 'string | undefined',
          name: 'string | undefined',
          description: 'string | undefined',
          sub_categories: [{
            sub_category_id: 'string | undefined',
            name: 'string | undefined',
            description: 'st'
          }]
        }]
      }]
  }

  ngOnInit(): void {


  }
}

