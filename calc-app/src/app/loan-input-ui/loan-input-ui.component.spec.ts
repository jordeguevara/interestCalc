import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInputUIComponent } from './loan-input-ui.component';

describe('LoanInputUIComponent', () => {
  let component: LoanInputUIComponent;
  let fixture: ComponentFixture<LoanInputUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInputUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInputUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
