import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-product-add',
  templateUrl: './seller-product-add.component.html',
  styleUrls: ['./seller-product-add.component.css']
})
export class SellerProductAddComponent implements OnInit {

  sellerProductAddForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
  }

}
