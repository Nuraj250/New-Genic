import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
userForm=new FormGroup({});
//   username:new FormControl('',[Validators.required]),
//   name:new FormControl('',[Validators.required]),
//   date:new FormControl(''),
//   address: new FormGroup({
//     lane1:new FormControl('')
//   })
// });

}
