import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from '../service/home.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../dto/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isScrolled = false;

  // }

  // imageObject : Image[]=[];

  constructor(private router: Router,private homeService:HomeService) {
  }

  // @HostListener('window:scroll')
  // // tslint:disable-next-line:typedef
  // scrollEvent() {
  //   window.pageYOffset >= 650 ? (this.isScrolled = true) : (this.isScrolled = false);
  // userForm=new FormGroup({
  //   username:new FormControl('',[Validators.required]),
  //   name:new FormControl('',[Validators.required]),
  //   date:new FormControl(''),
  //   address: new FormGroup({
  //     lane1:new FormControl('')
  //   })
  // });

  ngOnInit(): void {
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

  }

  test() {this.router.navigate(['/product']);}

  getAllData():Promise<any>{
    return new Promise<any>(resolve => {
      this.homeService.getAllDetails().subscribe((res)=>{
        console.log(res);
      },error => {
        console.log(error);
      });

      resolve(1)
    })

  }

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
