import { salereceiptType } from './../models/salereceiptTypes';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Data } from "../models/Data";
import { transactiontype } from "../models/transactiontype";
import { receiptType } from '../models/receiptType';
import { transactionProgress } from '../models/transactionProgress';
import { packagingUnits } from '../models/packagingUnits';
import { unitsofQuantity } from '../models/unitsofQuantity';
import { taxTypes } from '../models/taxTypes';
import { saleSave } from '../models/saleSave';
import { SaveSalesResponse } from '../models/SaveSalesResponse';
import { PurchaseReceipt } from '../models/PurchaseReceipt';



@Injectable({
  providedIn: 'root'
})
export class KraService {
  private readonly baseUrl = 'https://etims.ecare.africa/etims/generic/get';
  


  
  constructor(private http: HttpClient) {

  }
  gettransactiontype(): Observable<transactiontype[]> {
    const url = `${this.baseUrl}/transactiontype`;
    return this.http.get<transactiontype[]>(url);
  }
  getsalereceipttypes(): Observable<salereceiptType[]> {
    const url = `${this.baseUrl}/salereceipttypes`;
    return this.http.get<salereceiptType[]>(url);
  }
  getpaymentmethods(): Observable<receiptType[]> {
    const url = `${this.baseUrl}/paymentmethods`;
    return this.http.get<receiptType[]>(url);
  }
  gettransactionprogress(): Observable<transactionProgress[]> {
    const url = `${this.baseUrl}/transactionprogress`;
    return this.http.get<transactionProgress[]>(url);
  }
  getpackagingunits(): Observable<packagingUnits[]> {
    const url = `${this.baseUrl}/packagingunits`;
    return this.http.get<packagingUnits[]>(url);
  }

 getunitofquantity(): Observable<unitsofQuantity[]> {
    const url = `${this.baseUrl}/unitofquantity`;
    return this.http.get<unitsofQuantity[]>(url);
  }
  gettaxtypes(): Observable<taxTypes[]> {
    const url = `${this.baseUrl}/taxtypes`;
    return this.http.get<taxTypes[]>(url);
  }
  getpurchasereceipttypes(): Observable<PurchaseReceipt []> {
    const url = `${this.baseUrl}/purchasereceipttypes`;
    return this.http.get<PurchaseReceipt[]>(url);
  }
  savepurchases(salesave:saleSave): Observable<SaveSalesResponse> {
    const url = `https://etims.ecare.africa/etims/purchasemanagement/savepurchases`;
    return this.http.post<SaveSalesResponse>(url,salesave)
     
}

}
