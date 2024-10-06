import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { errorTailorImports } from '@ngneat/error-tailor';

@Component({
  selector: 'app-form-test-ngneat-error-tailor',
  standalone: true,
  imports: [CommonModule, errorTailorImports, ReactiveFormsModule],
  templateUrl: './form-test-ngneat-error-tailor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormTestNgneatErrorTailorComponent {
  private readonly _fb = inject(FormBuilder);

  public form: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  reset() {
    this.form?.reset();
  }
}
