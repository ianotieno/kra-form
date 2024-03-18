import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeHolder!: string;
}
