import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './features/calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'average-calculator';
}
