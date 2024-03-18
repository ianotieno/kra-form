import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextContent } from '../../../interfaces/text-content';

@Component({
  selector: 'app-grouped-inputs',
  templateUrl: './grouped-inputs.component.html',
  styleUrl: './grouped-inputs.component.css'
})
export class GroupedInputsComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() inputs!: TextContent[];
}
