import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Product} from '../../models/Product';
import {Category} from '../../models/Category';
import {Manufacturer} from '../../models/Manufacturer';
import {SellerProductService} from "../../services/seller-product.service";

@Component({
  selector: 'app-seller-product-edit',
  templateUrl: './seller-product-edit.component.html',
  styleUrls: ['./seller-product-edit.component.css']
})
export class SellerProductEditComponent implements OnInit {

  editForm: FormGroup;

  categorys: Category[];
  manufacturers: Manufacturer[];

  product: Product;
  productCode: string;
  aa : any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: SellerProductService) {
  }

  ngOnInit(): void {
    this.editForm = this.fb.group(
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
      // get product code
      this.productCode = this.route.snapshot.paramMap.get('code');
      if (this.productCode) {
          this.productService.getDetail(this.productCode).subscribe(prod => {
            const info: any = prod;
            this.product = info.resultBody;
            this.setValue(this.product);
          });
      }
  }

  get code(): AbstractControl {
    return this.editForm.get('code');
  }
  get name(): AbstractControl {
    return this.editForm.get('name');
  }
  get imageUrl(): AbstractControl {
    return this.editForm.get('imageUrl');
  }
  get manufacturer(): AbstractControl {
    return this.editForm.get('manufacturer');
  }
  get categoryType(): AbstractControl {
    return this.editForm.get('categoryType');
  }
  get price(): AbstractControl {
    return this.editForm.get('price');
  }
  get stock(): AbstractControl {
    return this.editForm.get('stock');
  }
  get description(): AbstractControl {
    return this.editForm.get('description');
  }
  get discount(): AbstractControl {
    return this.editForm.get('discount');
  }
  get active(): AbstractControl {
    return this.editForm.get('active');
  }

  hasError = (controlName: string, errorName: string) => {
    return this.editForm.controls[controlName].hasError(errorName);
  }

  setValue(product: Product){
    this.editForm.patchValue({code: product.code});
    this.editForm.patchValue({name: product.name});
    this.editForm.patchValue({description: product.description});
    this.editForm.patchValue({price: product.price});
    this.editForm.patchValue({stock: product.stock});
    this.editForm.patchValue({discount: product.discount});
    this.editForm.patchValue({active: product.active});
    this.editForm.patchValue({categoryType: product.categoryCode});
    this.editForm.patchValue({manufacturer: product.manufacturerCode});
    this.editForm.patchValue({imageUrl: product.imageUrl});
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
      active: this.active.value
    };

    this.productService.update(data).subscribe(data => {
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
