import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('qwerqwer'),
    price: new FormControl(45),
    qty: new FormControl(12),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
  }
}
