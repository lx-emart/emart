import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Role} from "../../enum/Role";
import {JwtResponse} from "../../response/JwtResponse";

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  Role = Role;
  currentUser: JwtResponse;
  page: any;
  private querySub: Subscription;

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
    });
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }

  update() {
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

}
