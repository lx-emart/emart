import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SellerProductEditComponent} from './seller-product-edit.component';

describe('SellerProductEditComponent', () => {
  let component: SellerProductEditComponent;
  let fixture: ComponentFixture<SellerProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellerProductEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
