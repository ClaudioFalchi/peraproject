import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrdineComponent } from './confirm-ordine.component';

describe('ConfirmOrdineComponent', () => {
  let component: ConfirmOrdineComponent;
  let fixture: ComponentFixture<ConfirmOrdineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmOrdineComponent]
    });
    fixture = TestBed.createComponent(ConfirmOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
