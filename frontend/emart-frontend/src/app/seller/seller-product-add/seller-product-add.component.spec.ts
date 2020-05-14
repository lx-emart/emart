import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SellerProductAddComponent} from './seller-product-add.component';

describe('SellerProductAddComponent', () => {
  let component: SellerProductAddComponent;
  let fixture: ComponentFixture<SellerProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellerProductAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
