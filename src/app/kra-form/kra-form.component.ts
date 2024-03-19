import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupedInputsContent } from '../interfaces/grouped-inputs-content';
import { TextAreaContent } from '../interfaces/text-area-content';
import { TextContent } from '../interfaces/text-content';
import { SelectContent } from '../interfaces/SelectContent';
import { KraService } from '../service/KraService';
import { transactiontype } from '../models/transactiontype';
import { salereceiptType } from '../models/salereceiptTypes';
import { transactionProgress } from '../models/transactionProgress';
import { DateContent } from '../interfaces/date';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-kra-form',
  templateUrl: './kra-form.component.html',
  styleUrl: './kra-form.component.css'
})
export class KraFormComponent implements OnInit  {

  transactionprogress!: transactionProgress[];
  transactionType!: transactiontype[];
  constructor(private formBuilder: FormBuilder,
    private Service: KraService,
    
  ) { }
  ngOnInit(): void {
    this. getTransaction();
    this.gettransactionprogress()
  }

  formContents: Array<TextContent | TextAreaContent | GroupedInputsContent |  SelectContent | DateContent> = [
    
    {type: 'text', name: 'tin', placeHolder: 'PIN', label: 'PIN'},
    {type: 'text', name: 'bhfId', placeHolder: 'Branch ID', label: 'Branch ID'},
    {type: 'text', name: 'trdInvcNo', placeHolder: 'Trader Invoice Number', label: 'Trader Invoice Number'},
    {type: 'text', name: 'invcNo', placeHolder: 'Invoice Number', label: 'Invoice Number'},

    {type: 'text', name: 'orgInvcNo', placeHolder: 'Original Invoice Number', label: 'Original Invoice Number'},
    {type: 'text', name: 'custTin', placeHolder: 'Customer PIN', label: 'Customer PIN'},
    {type: 'text', name: 'custNm', placeHolder: 'Customer Name', label: 'Customer Name'},
    {
      type: 'select',
      name: 'pchsSttsCd',
      label: 'KRA TRANSACTION TYPE',
      options: [
        { value: '', label: 'Purchase Status Code' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ],
      placeholder: 'Purchase Status Code',
    },
    {
      type: 'select',
      name: 'pchsSttsCd',
      label: 'Purchase Status Code',
      options: [
        { value: '', label: 'Purchase Status Code' },
       
      ],
      placeholder: 'Purchase Status Code',
    },
    {
      type: 'select',
      name: 'pchsTyCd',
      label: 'Purchase Type Code',
      options: [
        { value: '', label: 'Purchase Type Code' },
       
      ],
      placeholder: 'Purchase Status Code',
    },
    {
      type: 'select',
      name: 'salesTyCd',
      label: 'Sales Type Code',
      options: [
        { value: '', label: 'Sales Type Code' },
       
      ],
      placeholder: 'Sales Type Code',
    },
    {
      type: 'select',
      name: 'rcptTyCd',
      label: 'Receipt Type Code',
      options: [
        { value: '', label: 'Receipt Type Code' },
       
      ],
      placeholder: 'Receipt Type Code',
    },
    {
      type: 'select',
      name: 'salesSttsCd',
      label: 'Invoice Status Code',
      options: [
        { value: 'Y', label: 'Invoice Status Code' },
       
      ],
      placeholder: 'Invoice Status Code',
    },
    {type: 'date', name: 'cfmDt', label: 'Validated Date', hint: 'MM/DD/YYYY'},
    {type: 'text', name: 'pchsDt', placeHolder: 'Purchase Date', label: 'Purchase Date'},
   
    { type: 'date', name: 'salesDt', placeHolder: 'Sales Date', label: 'Sales Date' },
    { type: 'date', name: 'validatedDate', placeHolder: 'Validated Date', label: 'Validated Date' },
    { type: 'date', name: 'cnclReqDt', placeHolder: 'Cancellation Request Date', label: 'Cancellation Request Date' },
    { type: 'date', name: 'cnclDt', placeHolder: 'Cancellation Date', label: 'Cancellation Date' },
    { type: 'text', name: 'rfdRsnCd', placeHolder: 'Refund Reason Code', label: 'Refund Reason Code' },
    { type: 'text', name: 'taxblAmtA', placeHolder: 'Taxable Amount A', label: 'Taxable Amount A' },
    { type: 'text', name: 'taxblAmtB', placeHolder: 'Taxable Amount B', label: 'Taxable Amount B' },
    { type: 'text', name: 'taxblAmtC', placeHolder: 'Taxable Amount C', label: 'Taxable Amount C' },
    { type: 'text', name: 'taxblAmtD', placeHolder: 'Taxable Amount D', label: 'Taxable Amount D' },
    { type: 'text', name: 'taxblAmtE', placeHolder: 'Taxable Amount E', label: 'Taxable Amount E' },
    { type: 'text', name: 'taxRtA', placeHolder: 'Tax Rate A', label: 'Tax Rate A' },
    { type: 'text', name: 'taxRtB', placeHolder: 'Tax Rate B', label: 'Tax Rate B' },
    { type: 'text', name: 'taxRtC', placeHolder: 'Tax Rate C', label: 'Tax Rate C' },
    { type: 'text', name: 'taxRtD', placeHolder: 'Tax Rate D', label: 'Tax Rate D' },
    { type: 'text', name: 'taxRtE', placeHolder: 'Tax Rate E', label: 'Tax Rate E' },
    { type: 'text', name: 'taxAmtA', placeHolder: 'Tax Amount A', label: 'Tax Amount A' },
    { type: 'text', name: 'taxAmtB', placeHolder: 'Tax Amount B', label: 'Tax Amount B' },
    { type: 'text', name: 'taxAmtC', placeHolder: 'Tax Amount C', label: 'Tax Amount C' },
    { type: 'text', name: 'taxAmtD', placeHolder: 'Tax Amount D', label: 'Tax Amount D' },
    { type: 'text', name: 'taxAmtE', placeHolder: 'Tax Amount E', label: 'Tax Amount E' },
    { type: 'text', name: 'totTaxblAmt', placeHolder: 'Total Taxable Amount', label: 'Total Taxable Amount' },
    { type: 'text', name: 'totAmt', placeHolder: 'Total Amount', label: 'Total Amount' },
  
   
   
   
  ];
  

  profileForm = this.formBuilder.group({
    tin: [],
    bhfId: ['00', Validators.required],
    trdInvcNo: ['', Validators.required],
    invcNo: ['', Validators.required],
    orgInvcNo: ['', Validators.required],
    custTin: [''],
    custNm: [],
    salesTyCd: ['N', Validators.required],
    rcptTyCd: ['P', Validators.required],
    pmtTyCd: ['01',Validators.required],
    pchsSttsCd:['02',Validators.required],
    regTyCd:['M',Validators.required],
    salesSttsCd: ['02'],
    cfmDt: [this.getCurrentDate(), Validators.required],
    pchsDt:[this.getCurrentDate(), Validators.required],
    salesDt: [this.getCurrentDate(), Validators.required],
    stockRlsDt: [this.getCurrentDate()],
    cnclReqDt: [null],
    cnclDt: [null],
    rfdDt: [null],
    rfdRsnCd: [''],
    totItemCnt: [],
    taxblAmtA: [0, Validators.required],
    taxblAmtB: [0, Validators.required],
    taxblAmtC: [0, Validators.required],
    taxblAmtD: [0, Validators.required],
    taxblAmtE: [0, Validators.required],
    taxRtA: [0, Validators.required],
    taxRtB: [0, Validators.required],
    taxRtC: [0, Validators.required],
    taxRtD: [0, Validators.required],
    taxRtE: [0, Validators.required],
    taxAmtA: [0, Validators.required],
    taxAmtB: [0, Validators.required],
    taxAmtC: [0, Validators.required],
    taxAmtD: [0, Validators.required],
    taxAmtE: [0, Validators.required],
    totTaxblAmt: [0, Validators.required],
    totTaxAmt: [0, Validators.required],
    totAmt: [0, Validators.required],
    prchrAcptcYn: ['Y', Validators.required],
    remark: [''],
    regrNm: ['', Validators.required],
    regrId: ['', Validators.required],
    modrNm: ['', Validators.required],
    modrId: ['', Validators.required],
 
  });
  private formatDateyyyyMMdd(date: Date) {
    let currentDate = new Date(date);
    currentDate.setHours(new Date().getHours());
    currentDate.setMinutes(new Date().getMinutes());
    currentDate.setSeconds(new Date().getSeconds());

    const datePipe = new DatePipe('en-US');
    return datePipe.transform(currentDate, 'yyyyMMdd') || '';
  }
 getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  private formatDateyyyyMMddHHMMSS(date: Date): string {
    let currentDate = new Date(date);
    currentDate.setHours(new Date().getHours());
    currentDate.setMinutes(new Date().getMinutes());
    currentDate.setSeconds(new Date().getSeconds());

    const datePipe = new DatePipe('en-US');
    return datePipe.transform(currentDate, 'yyyyMMddHHmmss') || '';
  }

  getTransaction() {
    this.Service.gettransactiontype().subscribe(
      (data: transactiontype[]) => {
        this.transactionType = data;
        this.addoptionToSelect( 'salesTyCd', this.transactionType)
        console.log("transaction Type:", data)
      },
      (error) => {
        console.error(error);
      }
    );
  };
  gettransactionprogress() {
    this.Service.gettransactionprogress().subscribe(
      (data: transactionProgress[]) => {
        this.transactionprogress = data;
        this.addoptionToSelect( 'pchsSttsCd', this.transactionprogress)
        console.log("transaction progress:", data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addoptionToSelect(name:string,options:any[]){
   this.formContents = this.formContents.map((content:any)=>{
    if(content.name === name){
      content.options=options
      return content
    }
    return content
   })

  };
  
 


  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}


