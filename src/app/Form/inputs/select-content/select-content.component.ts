import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-content',
  templateUrl: './select-content.component.html',
  styleUrl: './select-content.component.css'
})
export class SelectContentComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeHolder!: string;
  


}
