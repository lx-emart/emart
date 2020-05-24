import {Component, OnInit, AfterContentChecked} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Product} from '../../models/Product';
import {Cart} from '../../models/Cart';
import {CartService} from '../../services/cart.service';
import {PurchaseHistoryService} from '../../services/purchase-history.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked  {

  carts = [];
  total: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private purchaseHistoryService: PurchaseHistoryService
  ) {
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(prods => {
      const info: any = prods;
      this.carts = info.resultBody;
    });
  }

  ngAfterContentChecked() {
    this.total = this.carts.reduce(
        (prev, cur) => prev + cur.quantity * cur.price, 0);
  }

  remove(cart: Cart){
    this.cartService.remove(cart).subscribe(prods => {
      this.carts = this.carts.filter(e => e.productCode != cart.productCode);
      console.log('Cart: ' + this.carts);
    });
  }

  payment(){
    this.purchaseHistoryService.payment(this.carts).subscribe(_ => {
        this.carts = [];
        this.router.navigate(['/payment']);
    }, error => {
        console.log('Checkout Cart Failed');
    });
  }

  validate(cart: Cart) {
    const max = cart.stock;
    if (cart.quantity > max) {
      cart.quantity = max;
    } else if (cart.quantity < 1) {
      cart.quantity = 1;
    }
  }

}
