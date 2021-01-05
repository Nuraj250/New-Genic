import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isScrolled = false;

  // }
  imageObject: Array<object> = [{
    image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ',
  }, {
    image: 'https://i.pinimg.com/originals/87/5f/79/875f79f681ef1c79d4551fa8ddd4d6fe.jpg ', // Support base64 image
  }
  ];

  constructor(private router: Router) {
  }

  // @HostListener('window:scroll')
  // // tslint:disable-next-line:typedef
  // scrollEvent() {
  //   window.pageYOffset >= 650 ? (this.isScrolled = true) : (this.isScrolled = false);

  ngOnInit(): void {

  }

  test() {
    this.router.navigate(['/product']);
  }
}
