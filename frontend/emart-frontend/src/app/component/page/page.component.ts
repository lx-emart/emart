import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() currentPage: any;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i = 1) {
    return new Array(i);
  }
}
