import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  private navbarDash: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  openDropDown(event: Event) {
    if (this.navbarDash.nativeElement.offsetWidth > 1007) {
      this.isDropdownOpen = true;
    }
  }
  closeDropDown(event: Event) {
    this.isDropdownOpen = false;
  }
}
