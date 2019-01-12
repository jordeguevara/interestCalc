import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOutputUIComponent } from './loan-output-ui.component';

describe('LoanOutputUIComponent', () => {
  let component: LoanOutputUIComponent;
  let fixture: ComponentFixture<LoanOutputUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOutputUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOutputUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
