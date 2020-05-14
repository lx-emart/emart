import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuyerProductDetailComponent} from './buyer-product-detail.component';

describe('BuyerProductDetailComponent', () => {
  let component: BuyerProductDetailComponent;
  let fixture: ComponentFixture<BuyerProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerProductDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
