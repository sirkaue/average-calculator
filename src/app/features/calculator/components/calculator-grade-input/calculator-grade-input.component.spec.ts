import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorGradeInputComponent } from './calculator-grade-input.component';

describe('CalculatorGradeInputComponent', () => {
  let component: CalculatorGradeInputComponent;
  let fixture: ComponentFixture<CalculatorGradeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorGradeInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorGradeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
