import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CalculatorGradeInputComponent } from './components/calculator-grade-input/calculator-grade-input.component';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorGradeInputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  protected readonly grade1 = signal<number | null>(null);
  protected readonly grade2 = signal<number | null>(null);
  protected readonly average = signal<number | null>(null);

  setGrade1(value: number) {
    this.grade1.set(value);
  }

  setGrade2(value: number) {
    this.grade2.set(value);
  }

  calculateAverage() {
    const g1 = this.grade1();
    const g2 = this.grade2();

    if (g1 !== null && g2 !== null) {
      this.average.set(Number(((g1 + g2) / 2).toFixed(2)));
    } else {
      this.average.set(null);
    }
  }
}
