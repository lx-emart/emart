import {Component, OnInit} from '@angular/core';
import {PurchaseHistoryService} from "../../services/purchase-history.service";
import {PurchaseHistory} from '../../models/PurchaseHistory';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  page: any;

  constructor(
    private purchaseHistoryService : PurchaseHistoryService
  ) {
  }

  ngOnInit(): void {
    this.purchaseHistoryService.getAllPage(1, 3)
      .subscribe(page => {
        console.log(page.resultBody);
        this.page = page.resultBody;
      });
  }

}
