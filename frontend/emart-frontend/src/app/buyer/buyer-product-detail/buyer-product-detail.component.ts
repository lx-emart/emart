import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Product} from '../../models/Product';
import {CartService} from '../../services/cart.service';
import {BuyerProductService} from "../../services/buyer-product.service";
import {Cart} from '../../models/Cart';

@Component({
  selector: 'app-buyer-product-detail',
  templateUrl: './buyer-product-detail.component.html',
  styleUrls: ['./buyer-product-detail.component.css']
})
export class BuyerProductDetailComponent implements OnInit {

  product: Product;
  count: number;
  userId: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private buyerProductService: BuyerProductService
    ) {
  }

  ngOnInit(): void {
    this.getProduct();
    this.count = 1;
  }

  getProduct(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.buyerProductService.getDetail(code).subscribe(
        prod => {
          console.log(prod);
          const info: any = prod;
          this.product = info.resultBody;
        },
        _ => console.log('Get Cart Failed')
    );
  }

  addCart(){
    this.cartService.addCart(this.product, this.count).subscribe(
      data => {
        this.router.navigate(['/cart']);
      }, _ => console.log('Add Cart Failed')
    );
  }

  validate() {
    const max = this.product.stock;
    if (this.count > max) {
      this.count = max;
    } else if (this.count < 1) {
      this.count = 1;
    }
  }
}
