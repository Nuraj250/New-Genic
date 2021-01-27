import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from '../service/home.service';
import {ProductService} from '../service/product.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
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

  imageObject: Array<object> = [{
    image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ',
  }, {
    image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ', // Support base64 image
  }
  ];
  // isScrolled = false;

  // imageObject : Image[]=[];

  constructor(private router: Router, private homeService: HomeService, private  productService: ProductService) {

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
  }

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
