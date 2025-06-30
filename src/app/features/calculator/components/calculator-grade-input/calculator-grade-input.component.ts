import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-calculator-grade-input',
  imports: [],
  templateUrl: './calculator-grade-input.component.html',
  styleUrl: './calculator-grade-input.component.css',
})
export class CalculatorGradeInputComponent {
  readonly label = input.required<string>();
  readonly id = input<string>('');
  readonly placeholder = input.required<string>();
  readonly value = input<number | null>(null);

  readonly valueChange = output<number>();

  onValueChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    if (!isNaN(value)) {
      this.valueChange.emit(value);
    }
  }
}
