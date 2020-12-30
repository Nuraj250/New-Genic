import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isScrolled = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // @HostListener('window:scroll')
  // // tslint:disable-next-line:typedef
  // scrollEvent() {
  //   window.pageYOffset >= 650 ? (this.isScrolled = true) : (this.isScrolled = false);
  // }

  test() {
    this.router.navigate(['/profile']);
  }
}
