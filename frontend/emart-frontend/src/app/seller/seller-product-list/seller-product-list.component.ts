import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {SellerProductService} from "../../services/seller-product.service";
import {Role} from "../../enum/Role";
import {ProductStatus} from "../../enum/ProductStatus";
import {CategoryType} from "../../enum/CategoryType";
import {Category} from '../../models/Category';
import {Product} from '../../models/Product';
import {JwtResponse} from "../../response/JwtResponse";
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;

  constructor(private productService: SellerProductService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }
  

  CategoryType = CategoryType;
  ProductStatus = ProductStatus;
  Role = Role;
  currentUser: JwtResponse;
  page: any;
  private querySub: Subscription;
  categorys: Category[];

  ngOnInit(): void {
    this.searchForm = this.fb.group(
      {
        searchTerm: ['', []], categorytype: ['', []]
      });
    this.productService.getCategorys().subscribe(data => {
      console.log(JSON.stringify(data));
      const info: any = data;
      this.categorys = info.resultBody;
    });
    this.querySub = this.route.queryParams.subscribe(() => {
      this.getAllProduct();
    });
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }

  get searchTerm(): AbstractControl {
    return this.searchForm.get('searchTerm');
  }
  get categorytype(): AbstractControl {
    return this.searchForm.get('categorytype');
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

  getAllList(page: number = 1, size: number = 5) {
    this.productService.getAllPage(+page, +size)
        .subscribe(page => {
          console.log(page.resultBody);
            this.page = page.resultBody;
        });
  }

  search() {

    // all empty, full search
    if (this.searchTerm.value == "" && this.categorytype.value == "") {
      this.getAllProduct();
    } else {
      // When one is not empty, code search
      if (this.route.snapshot.queryParamMap.get('page')) {
        const currentPage = +this.route.snapshot.queryParamMap.get('page');
        const size = +this.route.snapshot.queryParamMap.get('size');
        this.getSearch(currentPage, size, this.searchTerm.value, this.categorytype.value);
      } else {
        this.getSearch(1, 5, this.searchTerm.value, this.categorytype.value);
      }
    }
  }

  getSearch(page: number = 1, size: number = 5, code : String, type: String) {

    const data: any = {
       page: +page,
       size: +size,
       code: code,
       type: type
    };

    this.productService.search(data)
        .subscribe(page => {
          const info: any = page;
            console.log(info.resultBody);
            this.page = info.resultBody;
    });
  }

  remove(products: Product[], product) {
    this.productService.delelte(product).subscribe(_ => {
        products = products.filter(e => e.code != product);
    },
    err => {});
  }

}
