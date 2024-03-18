import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupedInputsContent } from '../interfaces/grouped-inputs-content';
import { TextAreaContent } from '../interfaces/text-area-content';
import { TextContent } from '../interfaces/text-content';
import { SelectContent } from '../interfaces/SelectContent';


@Component({
  selector: 'app-kra-form',
  templateUrl: './kra-form.component.html',
  styleUrl: './kra-form.component.css'
})
export class KraFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  formContents: Array<TextContent | TextAreaContent | GroupedInputsContent |  SelectContent > = [
    
    {type: 'text', name: 'tin', placeHolder: 'Referring Doctor ', label: 'Referring Doctor '},
    {type: 'text', name: 'bhfId', placeHolder: 'Diagnosis', label: 'Diagnosis'},
    {type: 'text', name: 'trdInvcNo', placeHolder: 'Chief Complains/Subjective History:', label: 'Chief Complains/Subjective History:'},
    {type: 'text', name: 'invcNo', placeHolder: 'Past Medical History', label: 'Past Medical History'},
 //   {type: 'text', name: 'orgInvcNo', placeHolder: 'Surgical History 1', label: 'Surgical History1'},
   // {type: 'text', name: 'custTin', placeHolder: 'Surgical History 2', label: 'Surgical History2'},
  //  {type: 'text', name: 'custNm', placeHolder: 'Surgical History 3', label: 'Surgical History3'},
    {
      type: 'select',
      name: 'salesTyCd',
      label: 'KRA TRANSACTION TYPE',
      options: [
        { value: '', label: 'Sales Type Code' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ],
      placeholder: 'Sales Type Code',
    }
  ];
  

  profileForm = this.formBuilder.group({
    tin: ['P051139047B', Validators.required],
    bhfId: ['00', Validators.required],
    trdInvcNo: ['', Validators.required],
    invcNo: ['', Validators.required],
    orgInvcNo: ['', Validators.required],
    custTin: [''],
    custNm: [],
    salesTyCd:['']
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}


