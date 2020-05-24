import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Evaluate} from '../../models/Evaluate';
import {EvaluateService} from "../../services/evaluate.service";
import {PurchaseHistoryService} from "../../services/purchase-history.service";

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  evaluate: Evaluate;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private evaluateService: EvaluateService,
    private purchaseHistoryService: PurchaseHistoryService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.purchaseHistoryService.getDetail(id).subscribe(
      prod => {
        console.log(prod);
        const info: any = prod;
        this.evaluate = info.resultBody;
      },
      _ => console.log('Get evaluate Failed')
    );
  }

  onSubmit(){
    if (this.evaluate.commentContent == "" 
        || this.evaluate.commentContent == undefined
        || this.evaluate.commentContent == null) {
          alert("Please input comment content");
          return;
    } 
    this.evaluateService.addEvaluate(this.evaluate).subscribe(
      data => {
        this.router.navigate(['/buyer-product-list']);
      }, _ => console.log('evaluate Failed')
    ); 
  }
}
