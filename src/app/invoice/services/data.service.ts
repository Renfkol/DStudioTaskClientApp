import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice} from "../../model/invoice";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:25366/api/Invoices";

  constructor(private http: HttpClient) {
  }

  getPage(page?:number) {
    //console.log("Try to get page "+ page);
    if(page!=undefined)
      return this.http.get(this.url+'/GetList/'+page);
    else return this.http.get(this.url+'/GetList/1')
  }

  createInvoice(newInvoice: Invoice) {
    return this.http.post(this.url, newInvoice, { observe: 'response' });
  }


  getInvoiceById(id?: number) {
    return this.http.get(this.url + '/GetById/' + id);
  }

  updateProduct(updatedInvoice: Invoice) {

    return this.http.put(this.url, updatedInvoice);
  }
}
