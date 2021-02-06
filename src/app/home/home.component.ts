import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from '../service/home.service';
import {ProductService} from '../service/product.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../storage/class/Category';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import {ThemeService} from '../service/theme.service';
// import {Image} from '../dto/image';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDisabled = false;
  darkTheme = new FormControl(false);
  theme = {};
  category: Category[];


  imageObject: Array<any> = [
    {
    image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ',

  },
    {
    image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ', // Support base64 image
  },
    {
      image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ',

    },
    {
      image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ', // Support base64 image
    },
    {
      image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ',

    }

  ];
  // slideConfig = {
  //   "slidesToShow": 3,
  //   "slidesToScroll": 3,
  //   "dots": true,
  //   "infinite": true
  // };
  // isScrolled = false;

  // imageObject : Image[]=[];

  constructor(private router: Router, private homeService: HomeService, private  productService: ProductService) {
    this.category = [
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
    // @HostListener('window:scroll')
    // // tslint:disable-next-line:typedef
    // scrollEvent() {
    //   window.pageYOffset >= 650 ? (this.isScrolled = true) : (this.isScrolled = false);


    // this.imageObject = [{
    //   id:1,
    //   name:'nuraj',
    //   image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ',
    // }, {
    //   id:2,
    //   name: 'sham',
    //   image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ', // Support base64 image
    // }
    // ];


    //
    // test() {this.router.navigate(['/product']);}
    //
    // getAllData():Promise<any>{
    //   return new Promise<any>(resolve => {
    //     this.homeService.getAllDetails().subscribe((res)=>{
    //       console.log(res);
    //     },error => {
    //       console.log(error);
    //     });
    //
    //     resolve(1)
    //   })
    //
    // }
    //
    // saveUser() {
    //   console.log(this.userForm.value);
    //   this.userForm.patchValue({
    //     date:'12332'
    //   })
    //   console.log(this.userForm.value);
    //   const x ={
    //     name:'nuraj',
    //     address:'galle'
    //   };
    //
    //   localStorage.setItem('front',JSON.stringify(x));
    //
    //   console.log(JSON.parse(<string> localStorage.getItem('front')));
    // }


  ngOnInit(): void {
  }
  addToWishlist():Promise < any >{
    return new Promise<any>(resolve => {
      this.productService.postWishlist().subscribe((res) => {
        console.log(res);
        this.isDisabled = true;
      }, error => {
        console.log(error);
      });

      resolve(1);
    });
  }
}
