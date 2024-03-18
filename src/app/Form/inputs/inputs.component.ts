import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input() form!: FormGroup;
  @Input() formContent!: Record<any, any>;
}
