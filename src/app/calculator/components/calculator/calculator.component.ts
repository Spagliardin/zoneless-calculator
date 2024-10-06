import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CalculatorButtonComponent],
  styles: `
    .is-command {
      @apply bg-indigo-700 bg-opacity-20
    }
  `,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {
  private _calculatorService = inject(CalculatorService);
  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  // get resultText() {
  //   return this._calculatorService.resultText;
  // }

  public resultText = computed(() => this._calculatorService.resultText());
  public subResultText = computed(() =>
    this._calculatorService.subResultText()
  );
  public lastOperator = computed(() => this._calculatorService.lastOperator());

  handleClick(key: string) {
    this._calculatorService.constructNumber(key);
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    const { key } = event;
    const keyEquivalents: Record<string, string> = {
      Enter: '=',
      clear: 'C',
      Escape: 'C',
      '*': 'x',
      '/': '÷',
    };

    this.handleClick(keyEquivalents[key] ?? key);
    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStle(keyEquivalents[key] ?? key);
    });
  }
}
