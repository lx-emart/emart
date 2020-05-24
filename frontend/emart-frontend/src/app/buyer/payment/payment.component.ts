import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  titel: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.titel = "Successful payment"
  }

  history(){
    this.router.navigate(['/purchase-history']);
  }

}
