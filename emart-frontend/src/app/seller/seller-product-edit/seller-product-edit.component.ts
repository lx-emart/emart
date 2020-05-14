import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seller-product-edit',
  templateUrl: './seller-product-edit.component.html',
  styleUrls: ['./seller-product-edit.component.css']
})
export class SellerProductEditComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

}
