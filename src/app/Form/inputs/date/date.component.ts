import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() hint!: string;
 
}

