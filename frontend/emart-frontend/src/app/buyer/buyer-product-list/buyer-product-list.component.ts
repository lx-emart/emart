import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Category} from '../../models/Category';
import {Manufacturer} from '../../models/Manufacturer';
import {BuyerProductService} from "../../services/buyer-product.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-buyer-product-list',
  templateUrl: './buyer-product-list.component.html',
  styleUrls: ['./buyer-product-list.component.css']
})
export class BuyerProductListComponent implements OnInit {

  buyerSearchForm: FormGroup;

  page: any;
  categorys: Category[];
  manufacturers: Manufacturer[];
  product: Product;
  private querySub: Subscription;

  constructor(
    private productService: BuyerProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buyerSearchForm = this.fb.group(
    {
      searchTerm: ['', []], 
      manufacturer: ['', []],
      categoryType: ['', []],
      startPrice: ['', []],
      endPrice: ['', []]
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

    // get all
    this.querySub = this.route.queryParams.subscribe(() => {
      this.getAllProduct();
    });
  }

  get searchTerm(): AbstractControl {
    return this.buyerSearchForm.get('searchTerm');
  }
  get manufacturer(): AbstractControl {
    return this.buyerSearchForm.get('manufacturer');
  }
  get categoryType(): AbstractControl {
    return this.buyerSearchForm.get('categoryType');
  }
  get startPrice(): AbstractControl {
    return this.buyerSearchForm.get('startPrice');
  }
  get endPrice(): AbstractControl {
    return this.buyerSearchForm.get('endPrice');
  }

  getAllProduct() {
    if (this.route.snapshot.queryParamMap.get('page')) {
      const currentPage = +this.route.snapshot.queryParamMap.get('page');
      const size = +this.route.snapshot.queryParamMap.get('size');
      this.getAllList(currentPage, size);
    } else {
      this.getAllList();
    }
  }

  getAllList(page: number = 1, size: number = 3) {
    this.productService.getAllPage(+page, +size)
    .subscribe(page => {
      console.log(page.resultBody);
      this.page = page.resultBody;
    });
  }

  search(){

    if (this.searchTerm.value == "" 
        && this.categoryType.value == "" 
        && this.manufacturer.value == "" 
        && (this.startPrice.value == "" || this.startPrice.value == null)
        && (this.endPrice.value == "" || this.endPrice.value == null)) {
          this.getAllProduct();
    } else {
      // When one is not empty, code search
      if (this.route.snapshot.queryParamMap.get('page')) {
        const currentPage = +this.route.snapshot.queryParamMap.get('page');
        const size = +this.route.snapshot.queryParamMap.get('size');
        this.getSearch(currentPage, size, this.searchTerm.value, 
          this.categoryType.value, this.manufacturer.value, this.startPrice.value, this.endPrice.value);
      } else {
        this.getSearch(1, 3, this.searchTerm.value, 
          this.categoryType.value, this.manufacturer.value, this.startPrice.value, this.endPrice.value);
      }
    }
  }

  getSearch(page: number = 1, size: number = 3, 
    name : String, type: String, manu: String, startPrice: number, endPrice: number) {

    const data: any = {
       page: +page,
       size: +size,
       name: name,
       type: type,
       manu: manu,
       startPrice: startPrice,
       endPrice: endPrice
    };

    this.productService.search(data)
        .subscribe(page => {
          const info: any = page;
          console.log(info.resultBody);
          this.page = info.resultBody;
    });
  }

}
