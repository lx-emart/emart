import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Category} from '../../models/Category';
import {Manufacturer} from '../../models/Manufacturer';
import {SellerProductService} from "../../services/seller-product.service";
import {Product} from '../../models/Product';

@Component({
  selector: 'app-seller-product-add',
  templateUrl: './seller-product-add.component.html',
  styleUrls: ['./seller-product-add.component.css']
})
export class SellerProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(
    private productService: SellerProductService,
    private fb: FormBuilder,
    private router: Router) {
  }

  categorys: Category[];
  manufacturers: Manufacturer[];

  ngOnInit(): void {
      this.productAddForm = this.fb.group(
      {
        code: ['', [Validators.required]], 
        name: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
        manufacturer: ['', [Validators.required]],
        categoryType: ['', [Validators.required]],
        price: ['', [Validators.required]],
        stock: ['', [Validators.required]],
        description: ['', [Validators.required]],
        discount: ['', []],
        active: ['', []]
      });
      // category type
      this.productService.getCategorys().subscribe(data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        this.categorys = info.resultBody;
      });

      // manufacturer
      this.productService.getManufacturers().subscribe(data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        this.manufacturers = info.resultBody;
      });

      // default select first
      this.productAddForm.patchValue({manufacturer: '0'});
      this.productAddForm.patchValue({categoryType: '0'});
      this.productAddForm.patchValue({active: '0'});
  }

  get code(): AbstractControl {
    return this.productAddForm.get('code');
  }
  get name(): AbstractControl {
    return this.productAddForm.get('name');
  }
  get imageUrl(): AbstractControl {
    return this.productAddForm.get('imageUrl');
  }
  get manufacturer(): AbstractControl {
    return this.productAddForm.get('manufacturer');
  }
  get categoryType(): AbstractControl {
    return this.productAddForm.get('categoryType');
  }
  get price(): AbstractControl {
    return this.productAddForm.get('price');
  }
  get stock(): AbstractControl {
    return this.productAddForm.get('stock');
  }
  get description(): AbstractControl {
    return this.productAddForm.get('description');
  }
  get discount(): AbstractControl {
    return this.productAddForm.get('discount');
  }
  get active(): AbstractControl {
    return this.productAddForm.get('active');
  }

  hasError = (controlName: string, errorName: string) => {
    return this.productAddForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.checkValid(
      this.code,
      this.name,
      this.imageUrl,
      this.manufacturer,
      this.categoryType,
      this.price,
      this.stock,
      this.description,
      this.discount
    );

    const data: any = {
      code: this.code.value,
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      manufacturerCode: this.manufacturer.value,
      categoryCode: this.categoryType.value,
      price: this.price.value,
      stock: this.stock.value,
      description: this.description.value,
      discount: this.discount.value,
      active: this.active.value,
      salesVolume: 0
    };

    this.productService.create(data).subscribe(data => {
      this.router.navigate(['seller-product-list']);
    },
    error => {
      console.log(error); // log to console instead
    });
  }

  checkValid(...field: AbstractControl[]) {
    field.forEach(f => {
      if (f.invalid) {
        f.markAsTouched();
        f.markAsDirty();
        f.updateValueAndValidity();
      }
    });
  }

}
