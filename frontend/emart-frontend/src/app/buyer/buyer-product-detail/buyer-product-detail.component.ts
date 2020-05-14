import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buyer-product-detail',
  templateUrl: './buyer-product-detail.component.html',
  styleUrls: ['./buyer-product-detail.component.css']
})
export class BuyerProductDetailComponent implements OnInit {

  buyerDetailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

}
